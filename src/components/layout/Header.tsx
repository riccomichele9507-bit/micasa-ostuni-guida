import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MenuDropdown } from './MenuDropdown'

interface HeaderProps {
  onAskAI: () => void
}

export function Header({ onAskAI }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200/70 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="" width={30} height={30} />
          <span className="font-display text-lg italic text-ink">MiCasa Ostuni</span>
        </a>

        <div className="flex items-center gap-2">
          <MenuDropdown />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={onAskAI}
            className="inline-flex items-center gap-1.5 rounded-pill bg-terracotta px-3.5 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">{t('chat.launcher')}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
