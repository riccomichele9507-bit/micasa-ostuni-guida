import { Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Floating Assistant FAB. Always visible on every view (mobile and desktop),
 * sits above the mobile bottom nav. Click opens the chat.
 */
export function ChatLauncher({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation()
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t('chat.title')}
      className="fixed bottom-24 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-pill bg-terracotta text-white shadow-float transition-transform duration-200 hover:scale-105 hover:bg-terracotta-dark active:scale-95 md:bottom-6"
    >
      <Sparkles size={22} aria-hidden="true" />
    </button>
  )
}
