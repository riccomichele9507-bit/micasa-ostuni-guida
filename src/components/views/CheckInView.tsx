import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { CopyButton } from '@/components/ui/CopyButton'
import { LinkButton } from '@/components/ui/LinkButton'
import { Lightbox } from '@/components/ui/Lightbox'
import { IMAGES } from '@/lib/images'
import { MAPS } from '@/content/shared'
import { cn } from '@/lib/cn'
import type { GuideContent } from '@/content/types'

const APARTMENT_STREET = 'Vicolo Andrea Costa 12/14'

export function CheckInView({ c }: { c: GuideContent }) {
  const photos = IMAGES.checkin.filter(Boolean).slice(0, 3)
  const [zoom, setZoom] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {zoom && <Lightbox src={zoom} onClose={() => setZoom(null)} />}

      <p className="inline-flex rounded-pill bg-sea-soft px-3 py-1 text-sm font-semibold text-sea">
        {c.checkIn.time}
      </p>

      <div className="flex items-center justify-between gap-3 rounded-card border border-sand-200 bg-white p-3 shadow-soft sm:p-4">
        <div className="flex min-w-0 items-center gap-2">
          <MapPin size={18} className="shrink-0 text-terracotta" aria-hidden="true" />
          <span className="font-medium text-ink">{APARTMENT_STREET}</span>
        </div>
        <LinkButton href={MAPS.house} variant="map" />
      </div>

      {photos.length > 0 && (
        <div
          className={cn(
            'grid gap-2.5',
            photos.length >= 3 ? 'grid-cols-3' : 'grid-cols-2',
          )}
        >
          {photos.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setZoom(src)}
              className="group relative cursor-zoom-in overflow-hidden rounded-card border border-sand-200"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      <ul className="space-y-2 text-[0.975rem] leading-relaxed text-muted">
        {c.checkIn.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-3 rounded-card bg-amber-soft px-4 py-3">
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
    </div>
  )
}
