import { useCallback, useRef, useState } from 'react'
import type { ChatTurn, Lang } from '@/types/chat'
import { sendChat } from '@/lib/api'
import { MAX_MESSAGE_LENGTH } from '@/lib/constants'

export interface UseChat {
  messages: ChatTurn[]
  loading: boolean
  error: string | null
  /** Sends a user message. Resolves true if a reply was received. */
  send: (text: string) => Promise<boolean>
}

export function useChat(lang: Lang): UseChat {
  const [messages, setMessages] = useState<ChatTurn[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const send = useCallback(
    async (text: string): Promise<boolean> => {
      const content = text.trim().slice(0, MAX_MESSAGE_LENGTH)
      if (!content || loading) return false

      setError(null)
      const history: ChatTurn[] = [...messages, { role: 'user', content }]
      setMessages(history)
      setLoading(true)

      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller
      const timeout = setTimeout(() => controller.abort(), 30_000)

      try {
        const { reply } = await sendChat({ lang, messages: history }, controller.signal)
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
        return true
      } catch (e) {
        setError(e instanceof Error ? e.message : 'error')
        return false
      } finally {
        clearTimeout(timeout)
        setLoading(false)
      }
    },
    [lang, loading, messages],
  )

  return { messages, loading, error, send }
}
