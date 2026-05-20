import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { PlaceList } from '@/components/ui/PlaceList'
import type { GuideContent } from '@/content/types'

export function EatDrink({ c, onAskAI }: { c: GuideContent; onAskAI: () => void }) {
  const { t } = useTranslation()

  return (
    <div id="eat" className="scroll-mt-24 space-y-16">
      <Section eyebrow={t('nav.eat')} title={t('sections.eat')}>
        <PlaceList items={c.eat} />
      </Section>

      {/* Restaurant CTA → opens the AI assistant */}
      <div className="flex flex-col items-start gap-3 rounded-card border border-sand-200 bg-amber-soft/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg italic text-ink">{t('eat.lookingFor')}</p>
        <button
          type="button"
          onClick={onAskAI}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-pill bg-terracotta px-4 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-terracotta-dark"
        >
          <MessageCircle size={16} />
          {t('eat.askAssistant')}
        </button>
      </div>

      <Section title={t('sections.drink')}>
        <PlaceList items={c.drink} columns={3} />
      </Section>

      <Section title={t('sections.nearest')}>
        <PlaceList items={c.nearest} columns={3} />
      </Section>
    </div>
  )
}
