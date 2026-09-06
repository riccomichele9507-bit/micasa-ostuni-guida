import { ChevronRight, Recycle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/** Prominent reminder that opens the waste-sorting view. */
export function WasteBanner({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3.5 rounded-card border border-olive/30 bg-olive-soft p-4 text-left shadow-soft transition-shadow duration-300 hover:shadow-float"
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-white/70 text-olive">
        <Recycle size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[1.05rem] leading-snug text-ink">
          {t('home.wasteBanner.title')}
        </span>
        <span className="mt-0.5 block text-sm font-medium text-olive">
          {t('home.wasteBanner.cta')}
        </span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-olive" aria-hidden="true" />
    </button>
  )
}
