import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { ChatRequest, ChatTurn } from '../src/types/chat'
import type { Lang } from '../src/content/types'
import { LANGS } from '../src/content/types'
import { getClient, getModel } from './_lib/anthropic'
import { buildSystemPrompt } from './_lib/prompt'
import { getKnowledgeBase } from './_lib/kb'

// Server-side input caps (cost / abuse protection). The 15-question UX limit is
// enforced client-side; these are just sanity bounds.
const MAX_MESSAGES = 40
const MAX_MESSAGE_LENGTH = 600
const MAX_TOKENS = 700

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed', message: 'Use POST.' })
    return
  }

  try {
    const body = (req.body ?? {}) as Partial<ChatRequest>

    const lang = (body.lang ?? 'en') as Lang
    if (!LANGS.includes(lang)) {
      res.status(400).json({ error: 'bad_request', message: 'Invalid language.' })
      return
    }

    const incoming = Array.isArray(body.messages) ? body.messages : []
    const safe: ChatTurn[] = incoming
      .filter(
        (m): m is ChatTurn =>
          !!m &&
          (m.role === 'user' || m.role === 'assistant') &&
          typeof m.content === 'string' &&
          m.content.trim().length > 0,
      )
      .slice(-MAX_MESSAGES)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }))

    if (!safe.length || safe[safe.length - 1].role !== 'user') {
      res
        .status(400)
        .json({ error: 'bad_request', message: 'The last message must be from the user.' })
      return
    }

    const system = buildSystemPrompt(lang, getKnowledgeBase(lang))
    const client = getClient()

    const completion = await client.messages.create({
      model: getModel(),
      max_tokens: MAX_TOKENS,
      system,
      messages: safe.map((m) => ({ role: m.role, content: m.content })),
    })

    const reply = completion.content
      .filter((block) => block.type === 'text')
      .map((block) => (block as { text: string }).text)
      .join('\n')
      .trim()

    res.status(200).json({ reply: reply || '…' })
  } catch (err) {
    console.error('[api/chat] error:', err)
    const notConfigured =
      err instanceof Error && err.message.includes('ANTHROPIC_API_KEY')
    res.status(notConfigured ? 503 : 500).json({
      error: notConfigured ? 'not_configured' : 'upstream_error',
      message: notConfigured
        ? 'The assistant is not configured yet.'
        : 'The assistant is temporarily unavailable. Please try again.',
    })
  }
}
