import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/cn'
import type { GuideContent } from '@/content/types'

export function Faq({ c }: { c: GuideContent }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" eyebrow={t('nav.faq')} title={t('sections.faq')}>
      <div className="space-y-3">
        {c.faq.map((item, i) => {
          const isOpen = open === i
          const panelId = `faq-panel-${i}`
          const buttonId = `faq-button-${i}`
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-card border border-sand-200 bg-white shadow-soft"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sand-50"
              >
                <span className="font-display text-lg text-ink">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'shrink-0 text-terracotta transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={cn(
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[0.975rem] leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
