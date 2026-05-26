import { cn } from '@/lib/cn'

interface SuggestionPillProps {
  label: string
  onClick?: () => void
  /** If provided, renders as an external link that opens in a new tab. */
  href?: string
  /** Periodic wiggle to draw attention (used on the Maps pill). */
  wiggle?: boolean
  className?: string
}

export function SuggestionPill({ label, onClick, href, wiggle, className }: SuggestionPillProps) {
  const cls = cn(
    'inline-flex shrink-0 rounded-pill border border-sand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-soft transition-colors hover:border-terracotta hover:text-terracotta',
    wiggle && 'animate-wiggle hover:animate-none',
    className,
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {label}
    </button>
  )
}
