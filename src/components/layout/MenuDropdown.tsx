import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu as MenuIcon, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

// All sections, in page order.
const MENU = [
  { id: 'essentials', key: 'sections.essentials' },
  { id: 'house', key: 'sections.house' },
  { id: 'explore', key: 'nav.explore' },
  { id: 'eat', key: 'nav.eat' },
  { id: 'before', key: 'sections.beforeYouGo' },
  { id: 'faq', key: 'sections.faq' },
  { id: 'hosts', key: 'sections.hosts' },
] as const

export function MenuDropdown() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('nav.menu')}
        className="inline-flex items-center gap-1.5 rounded-pill border border-sand-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-terracotta hover:text-terracotta"
      >
        <MenuIcon size={16} />
        <span className="hidden sm:inline">{t('nav.menu')}</span>
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={t('nav.menu')}
          className="absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-card border border-sand-200 bg-white py-1 shadow-float"
        >
          {MENU.map((m) => (
            <li key={m.id} role="none">
              <a
                role="menuitem"
                href={`#${m.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-sand-50 hover:text-terracotta"
              >
                {t(m.key)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
