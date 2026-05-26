import { Home, Info, Compass, UtensilsCrossed, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'
import type { View } from '@/views'

interface BottomNavProps {
  view: View
  onNavigate: (view: View) => void
  onAskAI: () => void
}

const TABS = [
  { view: 'home' as const, icon: Home, key: 'nav.home' },
  { view: 'essentials' as const, icon: Info, key: 'nav.essentials' },
  { view: 'explore' as const, icon: Compass, key: 'nav.explore' },
  { view: 'eat' as const, icon: UtensilsCrossed, key: 'nav.eatShort' },
]

/**
 * Mobile-only bottom navigation. Tabs set the view directly (no scroll-spy:
 * each view is its own "page" in the single-page state machine).
 */
export function BottomNav({ view, onNavigate, onAskAI }: BottomNavProps) {
  const { t } = useTranslation()

  const tabClass = (isActive: boolean) =>
    cn(
      'relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition-colors',
      isActive ? 'text-terracotta' : 'text-muted',
    )

  return (
    <nav
      aria-label={t('nav.menu')}
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-sand-200 bg-white/95 shadow-[0_-6px_16px_-8px_rgba(42,36,29,0.18)] backdrop-blur md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {TABS.map((s) => {
        const Icon = s.icon
        const isActive = view === s.view
        return (
          <button
            key={s.view}
            type="button"
            onClick={() => onNavigate(s.view)}
            aria-current={isActive ? 'true' : undefined}
            className={tabClass(isActive)}
          >
            {isActive && (
              <span
                className="absolute top-0 h-0.5 w-7 rounded-full bg-terracotta"
                aria-hidden="true"
              />
            )}
            <Icon size={20} aria-hidden="true" />
            <span className="leading-none">{t(s.key)}</span>
          </button>
        )
      })}
      <button type="button" onClick={onAskAI} className={tabClass(false)}>
        <Sparkles size={20} aria-hidden="true" />
        <span className="leading-none">{t('nav.assistant')}</span>
      </button>
    </nav>
  )
}
