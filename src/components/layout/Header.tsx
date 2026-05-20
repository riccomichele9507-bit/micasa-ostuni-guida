import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MenuDropdown } from './MenuDropdown'
import { MAPS } from '@/content/shared'

export function Header() {
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
          <a
            href={MAPS.house}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('actions.reachApartment')}
            className="inline-flex items-center justify-center rounded-pill border border-sand-200 bg-white/80 p-2 text-ink backdrop-blur transition-colors hover:border-terracotta"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.06 6.34 11.62 6.61 11.9a1.23 1.23 0 0 0 1.78 0c.27-.28 6.61-6.84 6.61-11.9C19.5 5.36 16.14 2 12 2Z"
                fill="#EA4335"
              />
              <circle cx="12" cy="9.5" r="2.75" fill="#fff" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
