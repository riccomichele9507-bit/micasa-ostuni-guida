import { Suspense, lazy, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Essentials } from '@/components/sections/Essentials'
import { House } from '@/components/sections/House'
import { Explore } from '@/components/sections/Explore'
import { EatDrink } from '@/components/sections/EatDrink'
import { BeforeYouGo } from '@/components/sections/BeforeYouGo'
import { Faq } from '@/components/sections/Faq'
import { Closing } from '@/components/sections/Closing'
import { ChatLauncher } from '@/components/chat/ChatLauncher'
import { LanguageGate } from '@/components/LanguageGate'
import { getContent } from '@/content'
import { STORAGE } from '@/lib/constants'
import type { Lang } from '@/content/types'

// Lazy-load the chat panel (with react-markdown) so the guide renders fast
// and the chat bundle loads only on first interaction.
const ChatPanel = lazy(() => import('@/components/chat/ChatPanel'))

export default function App() {
  const { i18n } = useTranslation()
  const lang = (i18n.resolvedLanguage ?? 'en') as Lang
  const c = getContent(lang)

  const [chatMounted, setChatMounted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [langChosen, setLangChosen] = useState(() => {
    try {
      return localStorage.getItem(STORAGE.langChosen) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const openChat = () => {
    setChatMounted(true)
    setChatOpen(true)
  }

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
    <>
      <Header onAskAI={openChat} />
      <Hero c={c} />

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 sm:py-20">
        <Essentials c={c} />
        <House c={c} />
        <Explore c={c} />
        <EatDrink c={c} onAskAI={openChat} />
        <BeforeYouGo c={c} />
        <Faq c={c} />
        <Closing c={c} />
      </main>

      <Footer c={c} />

      {!chatOpen && <ChatLauncher onClick={openChat} />}
      {chatMounted && (
        <Suspense fallback={null}>
          <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} lang={lang} />
        </Suspense>
      )}
    </>
  )
}
