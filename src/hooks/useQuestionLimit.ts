import { useCallback, useEffect, useState } from 'react'
import { MAX_QUESTIONS, STORAGE } from '@/lib/constants'

/**
 * Tracks how many questions the guest has asked (client-side only, in localStorage).
 * This is a UX guard — it can be bypassed by clearing browser storage, which is an
 * accepted trade-off for this private guest guide.
 */
export function useQuestionLimit() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const stored = Number(localStorage.getItem(STORAGE.chatCount) ?? '0')
    if (Number.isFinite(stored) && stored > 0) setCount(stored)
  }, [])

  const increment = useCallback(() => {
    setCount((c) => {
      const next = c + 1
      try {
        localStorage.setItem(STORAGE.chatCount, String(next))
      } catch {
        /* storage unavailable — ignore */
      }
      return next
    })
  }, [])

  return {
    count,
    max: MAX_QUESTIONS,
    remaining: Math.max(0, MAX_QUESTIONS - count),
    reached: count >= MAX_QUESTIONS,
    increment,
  }
}
