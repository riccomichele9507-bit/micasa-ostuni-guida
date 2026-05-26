import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu as MenuIcon, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { View } from '@/views'

interface MenuDropdownProps {
  onNavigate: (view: View) => void
  onAskAI: () => void
}

interface ViewItem {
  kind: 'view'
  view: View
  key: string
}
interface ChatItem {
  kind: 'chat'
  key: string
}
type Item = ViewItem | ChatItem

const ITEMS: Item[] = [
  { kind: 'view', view: 'home', key: 'nav.home' },
  { kind: 'view', view: 'checkin', key: 'sections.checkin' },
  { kind: 'view', view: 'checkout', key: 'sections.checkout' },
  { kind: 'view', view: 'essentials', key: 'home.cat.essentialsTitle' },
  { kind: 'view', view: 'explore', key: 'home.cat.exploreTitle' },
  { kind: 'view', view: 'eat', key: 'home.cat.eatTitle' },
  { kind: 'view', view: 'waste', key: 'home.cat.wasteTitle' },
  { kind: 'chat', key: 'nav.assistant' },
]

export function MenuDropdown({ onNavigate, onAskAI }: MenuDropdownProps) {
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

  const handle = (item: Item) => {
    setOpen(false)
    if (item.kind === 'view') onNavigate(item.view)
    else onAskAI()
  }

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
          {ITEMS.map((m, i) => (
            <li key={i} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => handle(m)}
                className="block w-full px-4 py-2.5 text-left text-sm text-ink transition-colors hover:bg-sand-50 hover:text-terracotta"
              >
                {t(m.key)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
