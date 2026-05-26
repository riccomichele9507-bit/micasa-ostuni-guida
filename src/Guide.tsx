import { Suspense, lazy, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '@/components/layout/Header'
import { BottomNav } from '@/components/layout/BottomNav'
import { ChatLauncher } from '@/components/chat/ChatLauncher'
import Home from '@/Home'
import { DetailView } from '@/components/views/DetailView'
import { CheckInView } from '@/components/views/CheckInView'
import { CheckOutView } from '@/components/views/CheckOutView'
import { EssentialsView } from '@/components/views/EssentialsView'
import { ExploreView } from '@/components/views/ExploreView'
import { EatView } from '@/components/views/EatView'
import { WasteView } from '@/components/views/WasteView'
import { getContent } from '@/content'
import type { Lang } from '@/content/types'
import type { View } from '@/views'

// Chat panel (with react-markdown) loads on first interaction; prefetched on idle.
const ChatPanel = lazy(() => import('@/components/chat/ChatPanel'))

/**
 * App shell: header + current view + bottom nav (mobile) + always-visible
 * Assistant FAB + lazy chat panel. Views are managed as a single-page
 * state machine; "Torna alla home" returns to the home view.
 */
export default function Guide() {
  const { i18n, t } = useTranslation()
  const lang = (i18n.resolvedLanguage ?? 'en') as Lang
  const c = getContent(lang)

  const [view, setView] = useState<View>('home')
  const [chatMounted, setChatMounted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Scroll to top whenever the view changes (each view is its own page).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [view])

  // Prefetch the chat chunk on idle so it opens instantly.
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

  const openChat = (prefill?: string) => {
    if (prefill) setPendingQuestion(prefill)
    setChatMounted(true)
    setChatOpen(true)
  }

  const navigate = (v: View) => setView(v)
  const backHome = () => setView('home')

  const renderView = () => {
    if (view === 'home') {
      return <Home c={c} onAskAI={openChat} onNavigate={navigate} />
    }
    switch (view) {
      case 'checkin':
        return (
          <DetailView title={t('sections.checkin')} onBack={backHome}>
            <CheckInView c={c} />
          </DetailView>
        )
      case 'checkout':
        return (
          <DetailView title={t('sections.checkout')} onBack={backHome}>
            <CheckOutView c={c} />
          </DetailView>
        )
      case 'essentials':
        return (
          <DetailView
            title={t('home.cat.essentialsTitle')}
            eyebrow={t('home.esploraGuida')}
            onBack={backHome}
          >
            <EssentialsView c={c} />
          </DetailView>
        )
      case 'explore':
        return (
          <DetailView
            title={t('home.cat.exploreTitle')}
            eyebrow={t('home.esploraGuida')}
            onBack={backHome}
          >
            <ExploreView c={c} />
          </DetailView>
        )
      case 'eat':
        return (
          <DetailView
            title={t('home.cat.eatTitle')}
            eyebrow={t('home.esploraGuida')}
            onBack={backHome}
          >
            <EatView c={c} />
          </DetailView>
        )
      case 'waste':
        return (
          <DetailView
            title={t('home.cat.wasteTitle')}
            eyebrow={t('home.esploraGuida')}
            onBack={backHome}
          >
            <WasteView c={c} />
          </DetailView>
        )
    }
  }

  return (
    <>
      <Header onNavigate={navigate} onAskAI={() => openChat()} />
      {renderView()}
      <BottomNav view={view} onNavigate={navigate} onAskAI={() => openChat()} />
      <ChatLauncher onClick={() => openChat()} />
      {chatMounted && (
        <Suspense fallback={null}>
          <ChatPanel
            open={chatOpen}
            onClose={() => setChatOpen(false)}
            lang={lang}
            pendingQuestion={pendingQuestion}
            onPromptConsumed={() => setPendingQuestion(null)}
          />
        </Suspense>
      )}
    </>
  )
}
