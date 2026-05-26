import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { PlaceList } from '@/components/ui/PlaceList'
import type { GuideContent } from '@/content/types'

export function ExploreView({ c }: { c: GuideContent }) {
  const { t } = useTranslation()
  return (
    <div className="space-y-10">
      <Section title={t('sections.reach')}>
        <ol className="space-y-3">
          {c.reach.fromAirport.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-terracotta text-xs font-semibold text-white">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={t('sections.thingsToDo')}>
        <PlaceList items={c.thingsToDo} />
      </Section>

      <Section title={t('sections.placesToSee')}>
        <PlaceList items={c.placesToSee} />
      </Section>

      <Section title={t('sections.beaches')}>
        <PlaceList items={c.beaches} columns={3} />
      </Section>
    </div>
  )
}
