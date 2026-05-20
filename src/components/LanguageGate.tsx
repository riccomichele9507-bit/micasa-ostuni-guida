import { LANGS, LANG_LABELS, type Lang } from '@/content/types'

const FLAGS: Record<Lang, string> = {
  it: '🇮🇹',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
}

/**
 * First-visit language chooser. Shown until the guest explicitly picks a language;
 * after that the full guide opens in the selected language.
 */
export function LanguageGate({ onChoose }: { onChoose: (lang: Lang) => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sand-100 px-4">
      <div className="w-full max-w-md rounded-card border border-sand-200 bg-white p-8 text-center shadow-float">
        <img src="/favicon.svg" alt="" width={52} height={52} className="mx-auto" />
        <p className="mt-5 font-display text-3xl italic text-ink">MiCasa Ostuni</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Scegli la lingua · Choose your language
          <br />
          Choisissez votre langue · Sprache wählen
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {LANGS.map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => onChoose(lng)}
              className="flex items-center justify-center gap-2 rounded-card border border-sand-200 bg-sand-50 px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-terracotta hover:bg-terracotta hover:text-white"
            >
              <span className="text-lg" aria-hidden="true">
                {FLAGS[lng]}
              </span>
              {LANG_LABELS[lng]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
