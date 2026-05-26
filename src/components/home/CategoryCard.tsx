import { ChevronRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface CategoryCardProps {
  icon: LucideIcon
  iconBg?: string
  title: string
  subtitle: string
  onClick: () => void
}

export function CategoryCard({
  icon: Icon,
  iconBg = 'bg-sea-soft text-sea',
  title,
  subtitle,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3.5 rounded-card border border-sand-200 bg-white p-4 text-left shadow-soft transition-shadow duration-300 hover:shadow-float"
    >
      <span
        className={cn(
          'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-card',
          iconBg,
        )}
      >
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg leading-tight text-ink">{title}</span>
        <span className="mt-0.5 block truncate text-sm text-muted">{subtitle}</span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-muted" aria-hidden="true" />
    </button>
  )
}
