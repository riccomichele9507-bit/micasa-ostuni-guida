import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/cn'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
}

/**
 * A single chat bubble.
 * User: right-aligned terracotta, plain text.
 * Assistant: left-aligned white card, markdown-rendered.
 */
export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user'

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] rounded-card px-3.5 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'bg-terracotta text-white'
            : 'border border-sand-200 bg-white text-ink shadow-soft',
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">{content}</p>
        ) : (
          <div className="prose-chat break-words">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: (props) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
