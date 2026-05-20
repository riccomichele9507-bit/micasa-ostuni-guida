import { Suspense, lazy, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageGate } from '@/components/LanguageGate'
import { STORAGE } from '@/lib/constants'
import type { Lang } from '@/content/types'

// The whole guide is a separate chunk so the first screen (the language gate)
// loads with minimal JS. It is prefetched on idle, so it opens instantly.
const Guide = lazy(() => import('@/Guide'))

export default function App() {
  const { i18n } = useTranslation()
  const [langChosen, setLangChosen] = useState(() => {
    try {
      return localStorage.getItem(STORAGE.langChosen) === '1'
    } catch {
      return false
    }
  })

  // Prefetch the guide chunk while the gate is shown → instant on language choice.
  useEffect(() => {
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback
    const load = () => void import('@/Guide')
    const id = ric ? ric(load) : window.setTimeout(load, 1200)
    return () => {
      const cic = (window as unknown as { cancelIdleCallback?: (id: number) => void })
        .cancelIdleCallback
      if (cic) cic(id as number)
      else window.clearTimeout(id as number)
    }
  }, [])

  const chooseLang = (l: Lang) => {
    void i18n.changeLanguage(l)
    try {
      localStorage.setItem(STORAGE.langChosen, '1')
    } catch {
      /* storage unavailable — proceed anyway */
    }
    setLangChosen(true)
  }

  if (!langChosen) {
    return <LanguageGate onChoose={chooseLang} />
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-sand-100" />}>
      <Guide />
    </Suspense>
  )
}
