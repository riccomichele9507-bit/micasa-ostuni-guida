import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'

interface CopyButtonProps {
  value: string
  className?: string
  /** Accessible label describing what gets copied, e.g. "WiFi password". */
  ariaLabel?: string
}

export function CopyButton({ value, className, ariaLabel }: CopyButtonProps) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard blocked — ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={ariaLabel ?? t('actions.copy')}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill border border-sand-200 bg-sand-50 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-terracotta hover:text-terracotta',
        className,
      )}
    >
      {copied ? <Check size={15} className="text-olive" /> : <Copy size={15} />}
      <span>{copied ? t('actions.copied') : t('actions.copy')}</span>
    </button>
  )
}
