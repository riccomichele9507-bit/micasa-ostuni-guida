import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Floating action button that opens the AI concierge chat.
 * Fixed bottom-right, with a translated greeting bubble beside it (sm+).
 */
export function ChatLauncher({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation()

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      <button
        type="button"
        onClick={onClick}
        className="rounded-pill border border-sand-200 bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-soft transition-colors hover:border-terracotta hover:text-terracotta"
      >
        {t('chat.help')}
      </button>
      <button
        type="button"
        onClick={onClick}
        aria-label={t('chat.launcher')}
        className="inline-flex items-center gap-2 rounded-pill bg-terracotta px-4 py-3 text-white shadow-float transition-transform duration-200 hover:scale-105 hover:bg-terracotta-dark active:scale-95 sm:px-5"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span className="hidden text-sm font-medium sm:inline">{t('chat.launcher')}</span>
      </button>
    </div>
  )
}
