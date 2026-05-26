import {
  MapPin,
  KeyRound,
  LogOut,
  MessageCircle,
  Info,
  Compass,
  UtensilsCrossed,
  Recycle,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ChatPromptCard } from '@/components/home/ChatPromptCard'
import { SuggestionPill } from '@/components/home/SuggestionPill'
import { QuickCard } from '@/components/home/QuickCard'
import { CategoryCard } from '@/components/home/CategoryCard'
import { OfferBanner } from '@/components/home/OfferBanner'
import { MAPS } from '@/content/shared'
import { WHATSAPP_URL } from '@/lib/constants'
import type { GuideContent } from '@/content/types'
import type { View } from '@/views'

interface HomeProps {
  c: GuideContent
  /** Open the chat. If `prefill` is given, the chat auto-submits that as the first question. */
  onAskAI: (prefill?: string) => void
  onNavigate: (view: View) => void
}

export default function Home({ c, onAskAI, onNavigate }: HomeProps) {
  const { t } = useTranslation()
  const offer = c.offers[0]

  return (
    <div className="mx-auto max-w-3xl space-y-7 px-4 pb-24 pt-6 sm:px-6 sm:pt-10 md:pb-12">
      {/* Hero */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          {c.hero.kicker}
        </p>
        <h1 className="mt-1.5 font-display text-3xl leading-tight text-ink sm:text-4xl">
          {t('home.heroTitle')}
        </h1>
        <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted">
          {t('home.heroSubtitle')}
        </p>
      </section>

      <ChatPromptCard onClick={() => onAskAI()} />

      {/* Suggestion pills */}
      <div className="-mx-1 flex flex-wrap gap-2 px-1">
        <SuggestionPill
          label={t('home.suggestions.wifi')}
          onClick={() => onAskAI(t('home.suggestions.wifi'))}
        />
        <SuggestionPill
          label={t('home.suggestions.parking')}
          onClick={() => onAskAI(t('home.suggestions.parking'))}
        />
        <SuggestionPill label={t('actions.reachApartment')} href={MAPS.house} wiggle />
      </div>

      {/* Serve subito */}
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {t('home.serveSubito')}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <QuickCard
            icon={MapPin}
            iconBg="bg-terracotta-soft text-terracotta"
            title={t('actions.reachApartment')}
            subtitle={t('home.cards.reachSubtitle')}
            href={MAPS.house}
            wiggle
          />
          <QuickCard
            icon={KeyRound}
            iconBg="bg-amber-soft text-terracotta-dark"
            title={t('sections.checkin')}
            subtitle={t('home.cards.checkinSubtitle')}
            onClick={() => onNavigate('checkin')}
          />
          <QuickCard
            icon={LogOut}
            iconBg="bg-sea-soft text-sea"
            title={t('sections.checkout')}
            subtitle={t('home.cards.checkoutSubtitle')}
            onClick={() => onNavigate('checkout')}
          />
          <QuickCard
            icon={MessageCircle}
            iconBg="bg-olive-soft text-olive"
            title={t('home.cards.hostTitle')}
            subtitle={t('home.cards.hostSubtitle')}
            href={WHATSAPP_URL}
          />
        </div>
      </section>

      {/* Esplora la guida */}
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {t('home.esploraGuida')}
        </p>
        <div className="space-y-3">
          <CategoryCard
            icon={Info}
            iconBg="bg-sea-soft text-sea"
            title={t('home.cat.essentialsTitle')}
            subtitle={t('home.cat.essentialsSubtitle')}
            onClick={() => onNavigate('essentials')}
          />
          <CategoryCard
            icon={Compass}
            iconBg="bg-terracotta-soft text-terracotta"
            title={t('home.cat.exploreTitle')}
            subtitle={t('home.cat.exploreSubtitle')}
            onClick={() => onNavigate('explore')}
          />
          <CategoryCard
            icon={UtensilsCrossed}
            iconBg="bg-amber-soft text-terracotta-dark"
            title={t('home.cat.eatTitle')}
            subtitle={t('home.cat.eatSubtitle')}
            onClick={() => onNavigate('eat')}
          />
          <CategoryCard
            icon={Recycle}
            iconBg="bg-olive-soft text-olive"
            title={t('home.cat.wasteTitle')}
            subtitle={t('home.cat.wasteSubtitle')}
            onClick={() => onNavigate('waste')}
          />
        </div>
      </section>

      {/* Per te */}
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {t('home.perTe')}
        </p>
        <OfferBanner offer={offer} />
      </section>
    </div>
  )
}
