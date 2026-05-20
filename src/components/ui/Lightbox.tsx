import { useEffect } from 'react'
import { X } from 'lucide-react'

interface LightboxProps {
  src: string
  alt?: string
  onClose: () => void
}

/** Full-screen image viewer. Closes on click, Escape, or the close button. */
export function Lightbox({ src, alt = '', onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-pill bg-white/90 p-2 text-ink shadow-soft transition-colors hover:bg-white"
      >
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] rounded-card object-contain shadow-float"
      />
    </div>
  )
}
