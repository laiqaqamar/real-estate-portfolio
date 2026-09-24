import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SmartImage from './SmartImage'

/**
 * Shared header banner for interior pages (About, Properties, Projects, etc.)
 * Pass `image` for a photo background, or omit it for a plain dark header.
 */
export default function PageHeader({ eyebrow, title, description, image, breadcrumb = [] }) {
  return (
    <div className="relative flex min-h-[42vh] items-end overflow-hidden bg-ink-950 pt-28 pb-14">
      {image && (
        <div className="absolute inset-0">
          <SmartImage src={image} alt={title} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/40" />
        </div>
      )}
      <div className="container-wide relative z-10">
        {breadcrumb.length > 0 && (
          <div className="mb-4 flex items-center gap-1.5 text-xs text-paper/50">
            <Link to="/" className="hover:text-bronze-400">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {b.path ? (
                  <Link to={b.path} className="hover:text-bronze-400">{b.label}</Link>
                ) : (
                  <span className="text-paper/70">{b.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {eyebrow && <span className="eyebrow-mark text-bronze-400">{eyebrow}</span>}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 max-w-2xl font-display text-4xl text-paper md:text-5xl"
        >
          {title}
        </motion.h1>
        {description && <p className="mt-4 max-w-xl text-paper/70">{description}</p>}
      </div>
    </div>
  )
}