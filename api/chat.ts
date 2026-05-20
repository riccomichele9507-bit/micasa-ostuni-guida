import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { ChatRequest, ChatTurn } from '../src/types/chat.js'
import type { Lang } from '../src/content/types.js'
import { LANGS } from '../src/content/types.js'
import { getClient, getModel } from './_lib/openai.js'
import { buildSystemPrompt } from './_lib/prompt.js'
import { getKnowledgeBase } from './_lib/kb/index.js'

// Server-side input caps (cost / abuse protection). The 15-question UX limit is
// enforced client-side; these are just sanity bounds.
const MAX_MESSAGES = 40
const MAX_MESSAGE_LENGTH = 600
const MAX_OUTPUT_TOKENS = 800

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

    const response = await client.responses.create({
      model: getModel(),
      instructions: system,
      input: safe.map((m) => ({ role: m.role, content: m.content })),
      tools: [{ type: 'web_search_preview' }],
      max_output_tokens: MAX_OUTPUT_TOKENS,
    })

    const reply = (response.output_text ?? '').trim()
    res.status(200).json({ reply: reply || '…' })
  } catch (err) {
    console.error('[api/chat] error:', err)
    const notConfigured = err instanceof Error && err.message.includes('OPENAI_API_KEY')
    res.status(notConfigured ? 503 : 500).json({
      error: notConfigured ? 'not_configured' : 'upstream_error',
      message: notConfigured
        ? 'The assistant is not configured yet.'
        : 'The assistant is temporarily unavailable. Please try again.',
    })
  }
}
