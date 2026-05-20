import type { GuideContent, Lang } from './types'
import { it } from './it'
import { en } from './en'
import { fr } from './fr'
import { de } from './de'

const CONTENT: Record<Lang, GuideContent> = { it, en, fr, de }

export function getContent(lang: Lang): GuideContent {
  return CONTENT[lang] ?? CONTENT.en
}

export type { GuideContent, Lang }
