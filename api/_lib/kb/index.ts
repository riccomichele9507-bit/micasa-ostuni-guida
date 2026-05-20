import type { Lang } from '../../../src/content/types.js'
import { getContent } from '../../../src/content/index.js'
import { contentToMarkdown } from '../../../src/content/serialize.js'
import { getOstuniPugliaInfo } from './ostuniPuglia.js'
import { getHouseNotes } from './houseNotes.js'

/**
 * Builds the full knowledge base for a language:
 * the on-page guide (serialized from the same data the UI shows) + apartment
 * Q&A/troubleshooting + extra Ostuni/Puglia notes. Runs server-side only.
 */
export function getKnowledgeBase(lang: Lang): string {
  const guide = contentToMarkdown(getContent(lang))
  const houseNotes = getHouseNotes(lang)
  const extra = getOstuniPugliaInfo(lang)
  return `${guide}\n\n# Apartment Q&A / troubleshooting\n${houseNotes}\n\n# Extra notes about Ostuni & Puglia\n${extra}`
}
