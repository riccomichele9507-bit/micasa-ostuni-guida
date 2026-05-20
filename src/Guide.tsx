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
import { getContent } from '@/content'
import type { Lang } from '@/content/types'

// Chat code (incl. react-markdown) loads only when needed; prefetched on idle.
const ChatPanel = lazy(() => import('@/components/chat/ChatPanel'))

export default function Guide() {
  const { i18n } = useTranslation()
  const lang = (i18n.resolvedLanguage ?? 'en') as Lang
  const c = getContent(lang)

  const [chatMounted, setChatMounted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Prefetch the chat chunk while the browser is idle so it opens instantly.
  useEffect(() => {
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
      .requestIdleCallback
    const load = () => void import('@/components/chat/ChatPanel')
    const id = ric ? ric(load) : window.setTimeout(load, 1500)
    return () => {
      const cic = (window as unknown as { cancelIdleCallback?: (id: number) => void })
        .cancelIdleCallback
      if (cic) cic(id as number)
      else window.clearTimeout(id as number)
    }
  }, [])

  const openChat = () => {
    setChatMounted(true)
    setChatOpen(true)
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
