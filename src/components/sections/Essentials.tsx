import { KeyRound, LogOut, Wifi } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { CopyButton } from '@/components/ui/CopyButton'
import type { GuideContent } from '@/content/types'

function Card({
  icon,
  title,
  time,
  children,
}: {
  icon: React.ReactNode
  title: string
  time?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col rounded-card border border-sand-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-float">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-terracotta-soft text-terracotta">
          {icon}
        </span>
        <h3 className="font-display text-xl text-ink">{title}</h3>
      </div>
      {time && (
        <span className="mt-4 self-start rounded-pill bg-sea-soft px-3 py-1 text-sm font-semibold text-sea">
          {time}
        </span>
      )}
      {children}
    </div>
  )
}

export function Essentials({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <Section id="essentials" eyebrow={t('sections.essentials')}>
      <div className="grid gap-5 md:grid-cols-3">
        <Card icon={<KeyRound size={20} />} title={t('sections.checkin')} time={c.checkIn.time}>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {c.checkIn.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between gap-3 rounded-card bg-amber-soft px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
                {c.checkIn.lockLabel}
              </p>
              <p className="mt-0.5 font-mono text-2xl font-bold tracking-widest text-ink">
                {c.checkIn.lockCode}
              </p>
            </div>
            <CopyButton value={c.checkIn.lockCode} ariaLabel={c.checkIn.lockLabel} />
          </div>
        </Card>

        <Card icon={<LogOut size={20} />} title={t('sections.checkout')} time={c.checkOut.time}>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {c.checkOut.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>

        <Card icon={<Wifi size={20} />} title={t('sections.wifi')}>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-card bg-sand-50 px-4 py-3">
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
            <div className="flex items-center justify-between gap-3 rounded-card bg-sand-50 px-4 py-3">
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
          </div>
          {c.wifi.note && <p className="mt-3 text-xs leading-relaxed text-muted">{c.wifi.note}</p>}
        </Card>
      </div>
    </Section>
  )
}
