import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  intro?: ReactNode
  children: ReactNode
  className?: string
}

/** Standard page section: anchor target, eyebrow, display title, optional intro. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      {(eyebrow || title || intro) && (
        <header className="mb-7">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-[2.6rem]">
              {title}
            </h2>
          )}
          {intro && <p className="mt-3 max-w-2xl text-[0.975rem] text-muted">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
