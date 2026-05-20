import { useEffect, useRef, useState } from 'react'
import { Loader2, Send, Sparkles, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useChat } from '@/hooks/useChat'
import { useQuestionLimit } from '@/hooks/useQuestionLimit'
import { MAX_MESSAGE_LENGTH } from '@/lib/constants'
import { cn } from '@/lib/cn'
import type { Lang } from '@/types/chat'
import { ChatMessage } from './ChatMessage'

interface ChatPanelProps {
  open: boolean
  onClose: () => void
  lang: Lang
}

/**
 * The AI concierge panel. Default-exported so it can be React.lazy-loaded.
 * Stays mounted when closed (visibility toggled via `open`) to preserve the
 * conversation and keep transitions smooth.
 */
export default function ChatPanel({ open, onClose, lang }: ChatPanelProps) {
  const { t } = useTranslation()
  const { messages, loading, error, send } = useChat(lang)
  const { remaining, reached, max, increment } = useQuestionLimit()

  const [draft, setDraft] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const suggestions = t('chat.suggestionItems', {
    returnObjects: true,
  }) as string[]

  const submit = async (text: string) => {
    const value = text.trim()
    if (reached || loading || !value) return
    setDraft('')
    const ok = await send(value)
    if (ok) increment()
  }

  // Auto-scroll to the latest message / thinking indicator.
  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, loading])

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => textareaRef.current?.focus(), 120)
      return () => window.clearTimeout(id)
    }
  }, [open])

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const onTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void submit(draft)
    }
  }

  const inputDisabled = loading || reached

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t('chat.title')}
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-50 flex flex-col bg-white shadow-float transition-all duration-300 ease-out sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[600px] sm:max-h-[80vh] sm:w-[400px] sm:rounded-card sm:border sm:border-sand-200',
        open
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      {/* Header */}
      <header className="flex items-start justify-between gap-3 border-b border-sand-200 bg-sand-50 px-4 py-3 sm:rounded-t-card">
        <div className="min-w-0">
          <h2 className="flex items-center gap-1.5 font-display text-lg leading-tight text-ink">
            <Sparkles size={17} className="shrink-0 text-terracotta" aria-hidden="true" />
            {t('chat.title')}
          </h2>
          <p className="mt-0.5 truncate text-xs text-muted">{t('chat.subtitle')}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('chat.close')}
          className="-mr-1 -mt-1 shrink-0 rounded-pill p-2 text-muted transition-colors hover:bg-sand-100 hover:text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </header>

      {/* Body */}
      <div
        ref={bodyRef}
        className="flex-1 space-y-3 overflow-y-auto bg-sand-50 px-4 py-4"
      >
        {messages.length === 0 ? (
          <div className="space-y-4">
            <p className="rounded-card border border-sand-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-soft">
              {t('chat.intro')}
            </p>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
                {t('chat.suggestions')}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void submit(s)}
                    disabled={inputDisabled}
                    className="rounded-pill border border-sand-200 bg-white px-3 py-1.5 text-left text-sm text-ink transition-colors hover:border-terracotta hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} content={m.content} />
          ))
        )}

        {loading && (
          <div
            className="flex items-center gap-2 text-sm text-muted"
            aria-live="polite"
          >
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            <span>{t('chat.thinking')}</span>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {t('chat.error')}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-sand-200 bg-white px-4 py-3 sm:rounded-b-card">
        {reached ? (
          <p className="rounded-card bg-amber-soft px-3.5 py-2.5 text-sm text-ink">
            {t('chat.limitReached', { max })}
          </p>
        ) : (
          <>
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={onTextareaKeyDown}
                placeholder={t('chat.placeholder')}
                maxLength={MAX_MESSAGE_LENGTH}
                rows={1}
                disabled={inputDisabled}
                aria-label={t('chat.placeholder')}
                className="max-h-32 min-h-[2.75rem] flex-1 resize-none rounded-card border border-sand-200 bg-sand-50 px-3 py-2.5 text-base text-ink placeholder:text-muted focus:border-terracotta focus:outline-none disabled:opacity-50 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => void submit(draft)}
                disabled={inputDisabled || !draft.trim()}
                aria-label={t('chat.send')}
                className="inline-flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-card bg-terracotta text-white transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-2 text-right text-xs text-muted">
              {t('chat.remaining', { count: remaining, max })}
            </p>
          </>
        )}
        <p className="mt-1.5 text-center text-[11px] leading-snug text-muted">
          {t('chat.disclaimer')}
        </p>
      </footer>
    </div>
  )
}
