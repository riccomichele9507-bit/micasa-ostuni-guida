import { MapPin, ArrowDown } from 'lucide-react'
import { LinkButton } from '@/components/ui/LinkButton'
import { IMAGES } from '@/lib/images'
import type { GuideContent } from '@/content/types'

export function Hero({ c }: { c: GuideContent }) {
  const hasImage = Boolean(IMAGES.hero)

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background: photo if provided, otherwise warm gradient + blobs */}
      {hasImage ? (
        <>
          <img
            src={IMAGES.hero}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-sand-50" />
        </>
      ) : (
        // Light, warm off-white — same background as the footer
        <div className="absolute inset-0 bg-sand-100" />
      )}

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6">
        <span className="inline-flex items-center rounded-pill bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta shadow-soft backdrop-blur-sm">
          {c.hero.kicker}
        </span>

        <p className="mt-7 font-display text-2xl italic text-terracotta sm:text-3xl">
          {c.hero.welcome}
        </p>
        <h1 className="mt-1 font-display text-5xl leading-[1.05] text-ink sm:text-7xl">
          {c.hero.title}
        </h1>
        <p className="mt-3 font-display text-xl italic text-muted sm:text-2xl">
          {c.hero.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-[1.025rem] leading-relaxed text-ink/90">
          {c.hero.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-pill border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft">
            <MapPin size={16} className="text-terracotta" />
            {c.hero.address}
          </span>
          <LinkButton href={c.hero.mapUrl} variant="map" />
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-muted">
          <ArrowDown size={16} className="animate-bounce text-terracotta" />
          {c.hero.scrollHint}
        </div>
      </div>
    </section>
  )
}
