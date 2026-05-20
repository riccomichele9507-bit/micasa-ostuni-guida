import type { Place } from '@/content/types'
import { LinkButton } from './LinkButton'
import { cn } from '@/lib/cn'

interface PlaceListProps {
  items: Place[]
  columns?: 2 | 3
}

export function PlaceList({ items, columns = 2 }: PlaceListProps) {
  return (
    <ul
      className={cn(
        'grid gap-4',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
      )}
    >
      {items.map((p) => (
        <li
          key={p.name}
          className="flex flex-col rounded-card border border-sand-200 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-float"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg leading-snug text-ink">{p.name}</h3>
            {p.note && (
              <span className="mt-0.5 shrink-0 rounded-pill bg-amber-soft px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-terracotta-dark">
                {p.note}
              </span>
            )}
          </div>
          {p.description && <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>}
          {(p.mapUrl || p.url) && (
            <div className="mt-4 flex flex-wrap gap-2 pt-1">
              {p.mapUrl && <LinkButton href={p.mapUrl} variant="map" />}
              {p.url && <LinkButton href={p.url} variant="external" />}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
