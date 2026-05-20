import { Phone, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { GuideContent } from '@/content/types'

export function Footer({ c }: { c: GuideContent }) {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-sand-200 bg-sand-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl italic text-ink">MiCasa Ostuni</p>
            <p className="mt-1 text-sm text-muted">{t('footer.madeWith')}</p>
            <a
              href={c.hero.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-terracotta"
            >
              <MapPin size={15} className="text-sea" />
              {c.hero.address}
              <span className="font-medium text-terracotta underline-offset-2 group-hover:underline">
                · {t('actions.openMap')}
              </span>
            </a>
          </div>

          <div className="text-sm">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              {t('footer.contact')}
            </p>
            <ul className="space-y-2">
              {c.hosts.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-ink transition-colors hover:text-terracotta"
                  >
                    <Phone size={14} /> {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${c.hosts.email}`}
                  className="inline-flex items-center gap-2 text-ink transition-colors hover:text-terracotta"
                >
                  <Mail size={14} /> {c.hosts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} MiCasa Ostuni · Ostuni, Puglia
        </p>
      </div>
    </footer>
  )
}
