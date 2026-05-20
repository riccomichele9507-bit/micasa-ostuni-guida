import { MapPin, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'

interface LinkButtonProps {
  href: string
  variant?: 'map' | 'external'
  label?: string
  className?: string
}

/** Small pill link that opens a map or external site in a new tab. */
export function LinkButton({ href, variant = 'external', label, className }: LinkButtonProps) {
  const { t } = useTranslation()
  const isMap = variant === 'map'
  const text = label ?? (isMap ? t('actions.openMap') : t('actions.openLink'))

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-sm font-medium transition-colors',
        isMap
          ? 'bg-sea-soft text-sea hover:bg-sea hover:text-white'
          : 'bg-sand-100 text-ink hover:bg-terracotta hover:text-white',
        className,
      )}
    >
      {isMap ? <MapPin size={15} /> : <ExternalLink size={15} />}
      <span>{text}</span>
    </a>
  )
}
