import { Star, Quote, Sparkles, Phone, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import type { GuideContent } from '@/content/types'

export function Closing({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <div id="hosts" className="scroll-mt-24 space-y-16">
      {/* Hosts */}
      <Section eyebrow={t('sections.hosts')} title={c.hosts.title}>
        <div className="rounded-card border border-sand-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="space-y-4">
            {c.hosts.body.map((p) => (
              <p key={p} className="text-[0.975rem] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5 border-t border-sand-200 pt-6">
            {c.hosts.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="inline-flex items-center gap-1.5 rounded-pill bg-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                <Phone size={15} />
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${c.hosts.email}`}
              className="inline-flex items-center gap-1.5 rounded-pill bg-sand-100 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-terracotta hover:text-white"
            >
              <Mail size={15} />
              {c.hosts.email}
            </a>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section title={t('sections.reviews')}>
        <div className="grid gap-5 sm:grid-cols-2">
          {c.reviews.map((review) => (
            <figure
              key={review}
              className="relative flex flex-col rounded-card border border-sand-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-float"
            >
              <Quote size={28} className="text-terracotta-soft" aria-hidden />
              <div className="mt-2 flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="mt-3 text-[0.975rem] italic leading-relaxed text-ink">
                {review}
              </blockquote>
            </figure>
          ))}
        </div>
      </Section>

      {/* Offers */}
      <Section title={t('sections.offers')}>
        <div className="grid gap-5 sm:grid-cols-3">
          {c.offers.map((offer) => (
            <div
              key={offer.name}
              className="flex flex-col rounded-card border border-sand-200 bg-amber-soft/50 p-6 shadow-soft transition-shadow duration-300 hover:shadow-float"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-amber-soft text-terracotta-dark">
                <Sparkles size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg text-ink">{offer.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{offer.detail}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
