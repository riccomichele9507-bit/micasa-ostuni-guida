import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { PlaceList } from '@/components/ui/PlaceList'
import type { GuideContent } from '@/content/types'

export function EatDrink({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <div id="eat" className="scroll-mt-24 space-y-16">
      <Section eyebrow={t('nav.eat')} title={t('sections.eat')}>
        <PlaceList items={c.eat} />
      </Section>

      <Section title={t('sections.drink')}>
        <PlaceList items={c.drink} columns={3} />
      </Section>

      <Section title={t('sections.nearest')}>
        <PlaceList items={c.nearest} columns={3} />
      </Section>
    </div>
  )
}
