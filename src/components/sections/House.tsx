import { Coffee, Shirt, Snowflake, Check, Phone, MapPin, ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/ui/Section'
import { PlaceList } from '@/components/ui/PlaceList'
import type { GuideContent } from '@/content/types'

const HOUSE_ICONS = [Coffee, Shirt, Snowflake]

export function House({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <div id="house" className="scroll-mt-24 space-y-16">
      {/* House info */}
      <Section title={t('sections.house')}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.house.map((item, i) => {
            const Icon = HOUSE_ICONS[i % HOUSE_ICONS.length]
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-card border border-sand-200 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-float"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-olive-soft text-olive">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* House rules */}
      <Section title={t('sections.rules')}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.rules.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-card border border-sand-200 bg-white px-4 py-3 shadow-soft"
            >
              <Check size={18} className="mt-0.5 shrink-0 text-olive" />
              <span className="text-sm leading-relaxed text-ink">{item}</span>
            </li>
          ))}
        </ul>
        {c.rules.footer && <p className="mt-5 italic text-muted">{c.rules.footer}</p>}
      </Section>

      {/* Parking */}
      <Section title={t('sections.parking')} intro={c.parking.intro}>
        <PlaceList items={c.parking.options} />
      </Section>

      {/* Waste sorting */}
      <Section title={t('sections.waste')} intro={c.waste.intro}>
        <div className="overflow-hidden rounded-card border border-sand-200 bg-white shadow-soft">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-terracotta-soft text-terracotta-dark">
                <th className="px-5 py-3 font-semibold uppercase tracking-wide">
                  {c.waste.dayCol}
                </th>
                <th className="px-5 py-3 font-semibold uppercase tracking-wide">
                  {c.waste.typeCol}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.waste.days.map((d, i) => (
                <tr key={d.day} className={i % 2 === 1 ? 'bg-sand-50' : 'bg-white'}>
                  <td className="px-5 py-3 font-medium text-ink">{d.day}</td>
                  <td className="px-5 py-3 text-muted">{d.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted">{c.waste.outro}</p>
      </Section>

      {/* Emergency */}
      <Section title={t('sections.emergency')}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.emergency.items.map((e) => (
            <div
              key={e.label}
              className="flex flex-col rounded-card border border-sand-200 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-float"
            >
              <h3 className="font-display text-base text-ink">{e.label}</h3>
              <a
                href={`tel:${e.phone}`}
                className="mt-3 inline-flex items-center gap-2 self-start rounded-pill bg-terracotta px-4 py-2 text-lg font-bold text-white transition-colors hover:bg-terracotta-dark"
              >
                <Phone size={16} />
                {e.phone}
                <span className="sr-only">{t('actions.call')}</span>
              </a>
              {e.address && (
                <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-muted">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {e.address}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-5 flex items-start gap-2 rounded-card bg-amber-soft px-4 py-3 text-sm leading-relaxed text-terracotta-dark">
          <ShieldAlert size={18} className="mt-0.5 shrink-0" />
          {c.emergency.firstAid}
        </p>
      </Section>
    </div>
  )
}
