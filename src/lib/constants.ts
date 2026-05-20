/** Max questions a guest can ask the AI assistant (enforced client-side). */
export const MAX_QUESTIONS = 15

/** Max characters accepted for a single guest message. */
export const MAX_MESSAGE_LENGTH = 600

/** localStorage keys. */
export const STORAGE = {
  chatCount: 'micasa.chat.count',
  lang: 'micasa.lang',
} as const
