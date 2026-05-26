import { LanguageSwitcher } from './LanguageSwitcher'
import { MenuDropdown } from './MenuDropdown'
import type { View } from '@/views'

interface HeaderProps {
  onNavigate: (view: View) => void
  onAskAI: () => void
}

export function Header({ onNavigate, onAskAI }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-200/70 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5"
        >
          <img src="/favicon.svg" alt="" width={30} height={30} />
          <span className="font-display text-lg italic text-ink">MiCasa Ostuni</span>
        </button>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <MenuDropdown onNavigate={onNavigate} onAskAI={onAskAI} />
        </div>
      </div>
    </header>
  )
}
