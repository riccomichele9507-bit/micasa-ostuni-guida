import { AlertTriangle } from 'lucide-react'
import { LinkButton } from '@/components/ui/LinkButton'
import type { GuideContent } from '@/content/types'

export function WasteView({ c }: { c: GuideContent }) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-[0.975rem] leading-relaxed text-muted">{c.waste.intro}</p>
        <LinkButton href={c.waste.ecoCenter.url} variant="map" label={c.waste.ecoCenter.label} />
      </div>
      <div className="overflow-hidden rounded-card border border-sand-200 bg-white shadow-soft">
        <table className="w-full text-sm">
          <thead className="bg-sand-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-ink">{c.waste.dayCol}</th>
              <th className="px-4 py-3 text-left font-semibold text-ink">{c.waste.typeCol}</th>
            </tr>
          </thead>
          <tbody>
            {c.waste.days.map((d, i) => (
              <tr key={d.day} className={i % 2 ? 'bg-sand-50/50' : 'bg-white'}>
                <td className="px-4 py-3 font-medium text-ink">{d.day}</td>
                <td className="px-4 py-3 text-muted">{d.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-start gap-3 rounded-card border border-amber-soft bg-amber-soft/50 p-4">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-ink">{c.waste.bagsNote}</p>
      </div>
      <p className="text-sm text-muted">{c.waste.outro}</p>
    </div>
  )
}
