import type { GuideContent, Lang } from './types.js'
import { it } from './it.js'
import { en } from './en.js'
import { fr } from './fr.js'
import { de } from './de.js'

const CONTENT: Record<Lang, GuideContent> = { it, en, fr, de }

export function getContent(lang: Lang): GuideContent {
  return CONTENT[lang] ?? CONTENT.en
}

export type { GuideContent, Lang }
