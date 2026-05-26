import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface QuickCardProps {
  icon: LucideIcon
  /** Tailwind classes for the icon box (background + icon color). */
  iconBg?: string
  title: string
  subtitle: string
  onClick?: () => void
  /** If provided, renders an external link (opens in a new tab). */
  href?: string
  /** Periodic wiggle to draw attention. */
  wiggle?: boolean
}

export function QuickCard({
  icon: Icon,
  iconBg = 'bg-sea-soft text-sea',
  title,
  subtitle,
  onClick,
  href,
  wiggle,
}: QuickCardProps) {
  const cls = cn(
    'flex w-full flex-col items-start gap-3 rounded-card border border-sand-200 bg-white p-4 text-left shadow-soft transition-shadow duration-300 hover:shadow-float',
    wiggle && 'animate-wiggle hover:animate-none',
  )
  const inner = (
    <>
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-card',
          iconBg,
        )}
      >
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-lg leading-tight text-ink">{title}</span>
        <span className="mt-0.5 block text-sm leading-snug text-muted">{subtitle}</span>
      </span>
    </>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
