import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import type { GuideContent } from '@/content/types'

export function Reach({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <Section id="reach" eyebrow={t('sections.reach')} title={t('sections.reach')}>
      <ol className="relative ml-5 space-y-6 border-l border-sand-200 pl-8">
        {c.reach.fromAirport.map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-pill bg-terracotta text-sm font-bold text-white shadow-soft">
              {i + 1}
            </span>
            <p className="text-[0.975rem] leading-relaxed text-ink">{step}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
