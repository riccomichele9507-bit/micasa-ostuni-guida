import type { Lang } from '../../../src/content/types.js'
import { getContent } from '../../../src/content/index.js'
import { contentToMarkdown } from '../../../src/content/serialize.js'
import { getOstuniPugliaInfo } from './ostuniPuglia.js'

/**
 * Builds the full knowledge base for a language:
 * the on-page guide (serialized from the same data the UI shows) + extra
 * Ostuni/Puglia notes. Runs server-side only.
 */
export function getKnowledgeBase(lang: Lang): string {
  const guide = contentToMarkdown(getContent(lang))
  const extra = getOstuniPugliaInfo(lang)
  return `${guide}\n\n# Extra notes about Ostuni & Puglia\n${extra}`
}
