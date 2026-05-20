import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import type { GuideContent } from '@/content/types'

export function BeforeYouGo({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <Section id="before" eyebrow={t('sections.beforeYouGo')} title={t('sections.beforeYouGo')}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {c.beforeYouGo.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-card border border-sand-200 bg-white px-4 py-3 shadow-soft transition-shadow duration-300 hover:shadow-float"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-olive-soft text-olive">
              <Check size={16} />
            </span>
            <span className="text-sm leading-relaxed text-ink">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
