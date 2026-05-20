import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { PlaceList } from '@/components/ui/PlaceList'
import type { GuideContent } from '@/content/types'

export function Explore({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <div id="explore" className="scroll-mt-24 space-y-16">
      <Section eyebrow={t('nav.explore')} title={t('sections.thingsToDo')}>
        <PlaceList items={c.thingsToDo} />
      </Section>

      <Section title={t('sections.placesToSee')}>
        <PlaceList items={c.placesToSee} columns={3} />
      </Section>

      <Section title={t('sections.beaches')}>
        <PlaceList items={c.beaches} columns={3} />
      </Section>
    </div>
  )
}
