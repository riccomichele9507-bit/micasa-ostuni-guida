/** WhatsApp direct link to the host (Michele) — used by the "Host" quick card. */
export const WHATSAPP_URL = 'https://wa.me/393462482556'

/** Max questions a guest can ask the AI assistant (enforced client-side). */
export const MAX_QUESTIONS = 15

/** Max characters accepted for a single guest message. */
export const MAX_MESSAGE_LENGTH = 600

/** localStorage keys. */
export const STORAGE = {
  chatCount: 'micasa.chat.count',
  lang: 'micasa.lang',
  /** Set once the guest has explicitly picked a language on the welcome gate. */
  langChosen: 'micasa.langChosen',
} as const
