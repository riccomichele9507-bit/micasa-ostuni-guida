import type { GuideContent } from '@/content/types'

export function CheckOutView({ c }: { c: GuideContent }) {
  return (
    <div className="space-y-6">
      <p className="inline-flex rounded-pill bg-sea-soft px-3 py-1 text-sm font-semibold text-sea">
        {c.checkOut.time}
      </p>
      <ul className="space-y-2 text-[0.975rem] leading-relaxed text-muted">
        {c.checkOut.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}
