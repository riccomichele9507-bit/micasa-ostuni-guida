import { Gift } from 'lucide-react'
import type { OfferItem } from '@/content/types'

export function OfferBanner({ offer }: { offer: OfferItem }) {
  return (
    <div className="rounded-card border border-sand-200 bg-amber-soft/50 p-4 shadow-soft">
      <p className="flex items-center gap-2 font-display text-lg leading-tight text-ink">
        <Gift size={18} className="text-terracotta" aria-hidden="true" />
        <span>{offer.name}</span>
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{offer.detail}</p>
    </div>
  )
}
