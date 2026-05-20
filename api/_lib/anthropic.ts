import Anthropic from '@anthropic-ai/sdk'

let client: Anthropic | null = null

/** Lazily creates the Anthropic client. Throws a clear error if the key is missing. */
export function getClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not set')
  }
  if (!client) {
    client = new Anthropic({ apiKey })
  }
  return client
}

export function getModel(): string {
  return process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5'
}
