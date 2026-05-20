import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { LANGS, LANG_LABELS, type Lang } from '@/content/types'
import { cn } from '@/lib/cn'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = (i18n.resolvedLanguage ?? 'en') as Lang

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

  const choose = (lng: Lang) => {
    void i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('lang.label')}
        className="inline-flex items-center gap-1.5 rounded-pill border border-sand-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-terracotta hover:text-terracotta"
      >
        <Globe size={16} />
        <span className="uppercase">{current}</span>
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('lang.label')}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-card border border-sand-200 bg-white py-1 shadow-float"
        >
          {LANGS.map((lng) => (
            <li key={lng}>
              <button
                type="button"
                role="option"
                aria-selected={lng === current}
                onClick={() => choose(lng)}
                className={cn(
                  'flex w-full items-center justify-between px-3.5 py-2 text-left text-sm transition-colors hover:bg-sand-50',
                  lng === current ? 'font-semibold text-terracotta' : 'text-ink',
                )}
              >
                {LANG_LABELS[lng]}
                {lng === current && <Check size={15} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
