// Content model for the MiCasa Ostuni guide.
// Every language file (it/en/fr/de) implements `GuideContent`, so TypeScript
// forces all four languages to stay in sync — a missing field is a build error.

export type Lang = 'it' | 'en' | 'fr' | 'de'

export const LANGS: Lang[] = ['it', 'en', 'fr', 'de']

export const LANG_LABELS: Record<Lang, string> = {
  it: 'Italiano',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
}

export interface Place {
  name: string
  description?: string
  /** Short note: price level, walking distance, etc. */
  note?: string
  mapUrl?: string
  /** External website (booking, info). */
  url?: string
}

export interface WasteDay {
  day: string
  type: string
}

export interface EmergencyItem {
  label: string
  phone: string
  address?: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface OfferItem {
  name: string
  detail: string
}

export interface HouseItem {
  title: string
  body: string
}

export interface GuideContent {
  hero: {
    kicker: string
    welcome: string
    title: string
    subtitle: string
    intro: string
    address: string
    mapUrl: string
    scrollHint: string
  }
  hosts: {
    title: string
    body: string[]
    phones: string[]
    email: string
  }
  checkIn: {
    time: string
    points: string[]
    lockLabel: string
    lockCode: string
  }
  checkOut: {
    time: string
    points: string[]
  }
  wifi: {
    networkLabel: string
    network: string
    passwordLabel: string
    password: string
    note?: string
  }
  house: HouseItem[]
  parking: {
    intro: string
    options: Place[]
  }
  waste: {
    intro: string
    outro: string
    dayCol: string
    typeCol: string
    days: WasteDay[]
  }
  rules: {
    items: string[]
    footer?: string
  }
  emergency: {
    items: EmergencyItem[]
    firstAid: string
  }
  reach: {
    fromAirport: string[]
  }
  thingsToDo: Place[]
  placesToSee: Place[]
  beaches: Place[]
  nearest: Place[]
  eat: Place[]
  drink: Place[]
  beforeYouGo: string[]
  faq: FaqItem[]
  reviews: string[]
  offers: OfferItem[]
}
