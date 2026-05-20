import type { GuideContent, Place } from './types'

function placeBlock(title: string, items: Place[]): string {
  if (!items.length) return ''
  const lines = items.map((p) => {
    const parts = [`- ${p.name}`]
    if (p.note) parts.push(`(${p.note})`)
    if (p.description) parts.push(`— ${p.description}`)
    if (p.mapUrl) parts.push(`[Map: ${p.mapUrl}]`)
    if (p.url) parts.push(`[Link: ${p.url}]`)
    return parts.join(' ')
  })
  return `## ${title}\n${lines.join('\n')}`
}

/**
 * Serialize the structured guide content into a single markdown document used
 * as the knowledge base for the AI assistant. Because this is generated from the
 * exact same data shown on the page, the bot's knowledge never drifts from the UI.
 */
export function contentToMarkdown(c: GuideContent): string {
  const out: string[] = []

  out.push(`# ${c.hero.title} — ${c.hero.address}`)
  out.push(c.hero.intro)
  out.push(`Location on Google Maps: ${c.hero.mapUrl}`)

  out.push(
    `## Hosts\n${c.hosts.title}\n${c.hosts.body.join('\n')}\nPhones: ${c.hosts.phones.join(
      ', ',
    )}\nEmail: ${c.hosts.email}`,
  )

  out.push(
    `## Check-in (${c.checkIn.time})\n${c.checkIn.points.join('\n')}\n${c.checkIn.lockLabel}: ${c.checkIn.lockCode}`,
  )
  out.push(`## Check-out (${c.checkOut.time})\n${c.checkOut.points.join('\n')}`)

  out.push(
    `## WiFi\n${c.wifi.networkLabel}: ${c.wifi.network}\n${c.wifi.passwordLabel}: ${c.wifi.password}`,
  )

  out.push(`## House info\n${c.house.map((h) => `${h.title}: ${h.body}`).join('\n')}`)

  out.push(
    `## Parking\n${c.parking.intro}\n${c.parking.options
      .map((o) => `- ${o.name}${o.mapUrl ? ` [Map: ${o.mapUrl}]` : ''}`)
      .join('\n')}`,
  )

  out.push(
    `## Waste sorting\n${c.waste.intro}\n${c.waste.days
      .map((d) => `${d.day}: ${d.type}`)
      .join('\n')}`,
  )

  out.push(`## House rules\n${c.rules.items.join('\n')}${c.rules.footer ? `\n${c.rules.footer}` : ''}`)

  out.push(
    `## Emergency\n${c.emergency.items
      .map((e) => `${e.label}: ${e.phone}${e.address ? ` — ${e.address}` : ''}`)
      .join('\n')}\n${c.emergency.firstAid}`,
  )

  out.push(`## How to reach MiCasa (from Bari Airport)\n${c.reach.fromAirport.join('\n')}`)

  out.push(placeBlock('Things to do', c.thingsToDo))
  out.push(placeBlock('Places to see nearby', c.placesToSee))
  out.push(placeBlock('Beaches', c.beaches))
  out.push(placeBlock('Nearest essentials', c.nearest))
  out.push(placeBlock('Places to eat', c.eat))
  out.push(placeBlock('Places to drink', c.drink))

  out.push(`## Before you go\n${c.beforeYouGo.join('\n')}`)

  out.push(`## FAQ\n${c.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}`)

  out.push(`## Special offers\n${c.offers.map((o) => `${o.name}: ${o.detail}`).join('\n')}`)

  return out.filter(Boolean).join('\n\n')
}
