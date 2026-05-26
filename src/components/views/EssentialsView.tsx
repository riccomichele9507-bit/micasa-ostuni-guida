import { Phone, ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { CopyButton } from '@/components/ui/CopyButton'
import { LinkButton } from '@/components/ui/LinkButton'
import type { GuideContent } from '@/content/types'

export function EssentialsView({ c }: { c: GuideContent }) {
  const { t } = useTranslation()
  return (
    <div className="space-y-10">
      {/* WiFi */}
      <Section title={t('sections.wifi')}>
        <div className="space-y-3 rounded-card border border-sand-200 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {c.wifi.networkLabel}
              </p>
              <p className="mt-0.5 truncate font-mono text-lg font-semibold text-ink">
                {c.wifi.network}
              </p>
            </div>
            <CopyButton value={c.wifi.network} ariaLabel={c.wifi.networkLabel} />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {c.wifi.passwordLabel}
              </p>
              <p className="mt-0.5 truncate font-mono text-lg font-semibold text-ink">
                {c.wifi.password}
              </p>
            </div>
            <CopyButton value={c.wifi.password} ariaLabel={c.wifi.passwordLabel} />
          </div>
          {c.wifi.note && <p className="text-xs leading-relaxed text-muted">{c.wifi.note}</p>}
        </div>
      </Section>

      {/* House info */}
      <Section title={t('sections.house')}>
        <div className="grid gap-3 sm:grid-cols-2">
          {c.house.map((h) => (
            <div
              key={h.title}
              className="rounded-card border border-sand-200 bg-white p-5 shadow-soft"
            >
              <h3 className="font-display text-lg text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* House rules */}
      <Section title={t('sections.rules')}>
        <ul className="space-y-2 rounded-card border border-sand-200 bg-white p-5 text-sm leading-relaxed text-muted shadow-soft">
          {c.rules.items.map((r) => (
            <li key={r}>• {r}</li>
          ))}
        </ul>
        {c.rules.footer && (
          <p className="mt-3 text-sm italic text-muted">{c.rules.footer}</p>
        )}
      </Section>

      {/* Parking */}
      <Section title={t('sections.parking')}>
        <p className="text-sm leading-relaxed text-muted">{c.parking.intro}</p>
        <div className="mt-3 space-y-2">
          {c.parking.options.map((o) => (
            <div
              key={o.name}
              className="flex items-center justify-between gap-3 rounded-card border border-sand-200 bg-white p-3 shadow-soft"
            >
              <span className="min-w-0 font-medium text-ink">{o.name}</span>
              {o.mapUrl && <LinkButton href={o.mapUrl} variant="map" />}
            </div>
          ))}
        </div>
      </Section>

      {/* Emergency */}
      <Section title={t('sections.emergency')}>
        <div className="grid gap-2 sm:grid-cols-2">
          {c.emergency.items.map((e) => (
            <a
              key={e.label + e.phone}
              href={`tel:${e.phone}`}
              className="flex items-center justify-between gap-3 rounded-card border border-sand-200 bg-white p-3 shadow-soft transition-colors hover:border-terracotta"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  {e.label}
                </p>
                <p className="font-display text-lg text-ink">{e.phone}</p>
                {e.address && <p className="text-xs text-muted">{e.address}</p>}
              </div>
              <Phone size={16} className="shrink-0 text-muted" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-3 inline-flex items-start gap-2 rounded-card bg-amber-soft px-3 py-2 text-sm text-ink">
          <ShieldAlert size={16} className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
          <span>{c.emergency.firstAid}</span>
        </p>
      </Section>

      {/* Before you go */}
      <Section title={t('sections.beforeYouGo')}>
        <ul className="space-y-2 rounded-card border border-sand-200 bg-white p-5 text-sm leading-relaxed text-muted shadow-soft">
          {c.beforeYouGo.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
