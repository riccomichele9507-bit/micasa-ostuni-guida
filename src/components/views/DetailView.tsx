import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface DetailViewProps {
  title: string
  eyebrow?: string
  onBack: () => void
  children: ReactNode
}

/** Wrapper for detail "pages": back link, eyebrow, title, then the view content. */
export function DetailView({ title, eyebrow, onBack, children }: DetailViewProps) {
  const { t } = useTranslation()
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-5 sm:px-6 sm:pt-8 md:pb-12">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-sand-200/70 hover:text-ink"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {t('actions.backHome')}
      </button>
      <header className="mt-4">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h1>
      </header>
      <div className="mt-6">{children}</div>
    </div>
  )
}
