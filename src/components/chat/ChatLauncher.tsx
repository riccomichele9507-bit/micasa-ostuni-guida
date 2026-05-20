import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Floating action button that opens the AI concierge chat.
 * Fixed bottom-right; icon-only on mobile, icon + label on sm+.
 */
export function ChatLauncher({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t('chat.launcher')}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-pill bg-terracotta px-4 py-3 text-white shadow-float transition-transform duration-200 hover:scale-105 hover:bg-terracotta-dark active:scale-95 sm:px-5"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden text-sm font-medium sm:inline">
        {t('chat.launcher')}
      </span>
    </button>
  )
}
