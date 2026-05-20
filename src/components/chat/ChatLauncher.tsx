import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Floating action button that opens the AI concierge chat.
 * Single element (no separate bubble): icon + "I'm here to help" on all sizes.
 */
export function ChatLauncher({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-pill bg-terracotta px-4 py-3 text-white shadow-float transition-transform duration-200 hover:scale-105 hover:bg-terracotta-dark active:scale-95 md:inline-flex md:px-5"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="text-sm font-medium">{t('chat.help')}</span>
    </button>
  )
}
