import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { PlaceList } from '@/components/ui/PlaceList'
import type { GuideContent } from '@/content/types'

export function EatView({ c }: { c: GuideContent }) {
  const { t } = useTranslation()
  return (
    <div className="space-y-10">
      <Section title={t('sections.eat')}>
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
