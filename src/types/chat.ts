// Shared request/response contract for the AI assistant.
// Imported by BOTH the client (src/lib/api.ts) and the server (api/chat.ts),
// so the two never drift. Uses a relative import so the Vercel function build
// doesn't depend on the Vite "@/" path alias.
import type { Lang } from '../content/types'

export type { Lang }

export interface ChatTurn {
  role: 'user' | 'assistant'
  content: string
}

export interface ChatRequest {
  lang: Lang
  /** Short conversation history; the knowledge base lives server-side. */
  messages: ChatTurn[]
}

export interface ChatResponse {
  reply: string
}

export interface ChatErrorResponse {
  error: string
  message: string
}
