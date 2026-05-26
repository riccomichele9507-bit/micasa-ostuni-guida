import { useState } from 'react'
import { CopyButton } from '@/components/ui/CopyButton'
import { Lightbox } from '@/components/ui/Lightbox'
import { IMAGES } from '@/lib/images'
import { cn } from '@/lib/cn'
import type { GuideContent } from '@/content/types'

export function CheckInView({ c }: { c: GuideContent }) {
  const photos = IMAGES.checkin.filter(Boolean).slice(0, 3)
  const [zoom, setZoom] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {zoom && <Lightbox src={zoom} onClose={() => setZoom(null)} />}

      <p className="inline-flex rounded-pill bg-sea-soft px-3 py-1 text-sm font-semibold text-sea">
        {c.checkIn.time}
      </p>

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
