import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { LANGS } from '@/content/types'
import { STORAGE } from '@/lib/constants'

import it from './locales/it/common.json'
import en from './locales/en/common.json'
import fr from './locales/fr/common.json'
import de from './locales/de/common.json'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { common: it },
      en: { common: en },
      fr: { common: fr },
      de: { common: de },
    },
    fallbackLng: 'en',
    supportedLngs: LANGS,
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: STORAGE.lang,
    },
  })

export default i18n
