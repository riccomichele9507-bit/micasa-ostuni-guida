import { useEffect, useState } from 'react'
import { Home, Info, Compass, UtensilsCrossed, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'

interface BottomNavProps {
  onAskAI: () => void
}

// Tabs that map to a page section (used for scroll-spy + smooth scroll).
const SECTIONS = [
  { id: 'top', icon: Home, key: 'nav.home' },
  { id: 'essentials', icon: Info, key: 'nav.essentials' },
  { id: 'explore', icon: Compass, key: 'nav.explore' },
  { id: 'eat', icon: UtensilsCrossed, key: 'nav.eatShort' },
] as const

/**
 * Mobile-only bottom navigation. 4 section tabs (with scroll-spy highlighting the
 * section in view) + an "Assistant" tab that opens the chat. Hidden on desktop,
 * where the header nav + floating chat button are used instead.
 */
export function BottomNav({ onAskAI }: BottomNavProps) {
  const { t } = useTranslation()
  const [active, setActive] = useState('top')

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id)
    let ticking = false
    const compute = () => {
      ticking = false
      const line = 96 // active line just below the sticky header
      let current = 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(compute)
      }
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

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
      {SECTIONS.map((s) => {
        const Icon = s.icon
        const isActive = active === s.id
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => go(s.id)}
            aria-current={isActive ? 'true' : undefined}
            className={tabClass(isActive)}
          >
            {isActive && (
              <span className="absolute top-0 h-0.5 w-7 rounded-full bg-terracotta" aria-hidden="true" />
            )}
            <Icon size={20} aria-hidden="true" />
            <span className="leading-none">{t(s.key)}</span>
          </button>
        )
      })}

      <button type="button" onClick={onAskAI} className={tabClass(false)}>
        <MessageCircle size={20} aria-hidden="true" />
        <span className="leading-none">{t('nav.assistant')}</span>
      </button>
    </nav>
  )
}
