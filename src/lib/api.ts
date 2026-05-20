import type { ChatRequest, ChatResponse, ChatErrorResponse } from '@/types/chat'

/** Calls the server-side /api/chat function. The API key never touches the client. */
export async function sendChat(
  req: ChatRequest,
  signal?: AbortSignal,
): Promise<ChatResponse> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
    signal,
  })

  if (!res.ok) {
    let message = `Request failed (${res.status})`
    try {
      const data = (await res.json()) as ChatErrorResponse
      if (data?.message) message = data.message
    } catch {
      /* ignore parse errors */
    }
    throw new Error(message)
  }

  return (await res.json()) as ChatResponse
}
