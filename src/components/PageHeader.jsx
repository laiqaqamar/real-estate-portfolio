import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import SmartImage from './SmartImage'

/**
 * Premium shared header for interior pages
 * Supports background images through the `image` prop.
 *
 * Example:
 *
 * <PageHeader
 *   eyebrow="Who We Are"
 *   title="About Al Harmain Associates"
 *   description="Building better spaces, creating lasting value."
 *   image={aboutCover}
 *   breadcrumb={[{ label: 'About Us' }]}
 * />
 */

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
  breadcrumb = [],
}) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden bg-ink-950 pt-28 pb-16 md:min-h-[62vh] md:pb-20">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      {image && (
        <div className="absolute inset-0">

          <SmartImage
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-ink-950/55" />

          {/* Bottom dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />

          {/* Left gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/35 to-transparent" />

          {/* Slight image tint */}
          <div className="absolute inset-0 bg-black/10" />

        </div>
      )}

      {/* =====================================================
          PLAIN DARK BACKGROUND
      ===================================================== */}
      {!image && (
        <div className="absolute inset-0 bg-ink-950" />
      )}

      {/* =====================================================
          DECORATIVE BACKGROUND ELEMENTS
      ===================================================== */}

      {/* Large border square */}
      <div className="absolute right-[-40px] top-1/2 hidden h-72 w-72 -translate-y-1/2 rotate-12 border border-paper/10 lg:block" />

      {/* Small decorative square */}
      <div className="absolute right-24 top-32 hidden h-16 w-16 border border-bronze-500/30 lg:block" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-paper/15" />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="container-wide relative z-10 flex min-h-[42vh] flex-col justify-end">

        {/* =================================================
            BREADCRUMB
        ================================================= */}
        {breadcrumb.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-1.5 text-xs"
          >
            {/* Home */}
            <Link
              to="/"
              className="text-paper/50 transition-colors duration-200 hover:text-bronze-400"
            >
              Home
            </Link>

            {breadcrumb.map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5"
              >
                <ChevronRight
                  size={12}
                  className="text-paper/30"
                />

                {b.path ? (
                  <Link
                    to={b.path}
                    className="text-paper/50 transition-colors duration-200 hover:text-bronze-400"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-paper/80">
                    {b.label}
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {/* =================================================
            EYEBROW
        ================================================= */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-9 bg-bronze-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-400">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* =================================================
            TITLE
        ================================================= */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 max-w-4xl font-display text-4xl leading-[1.02] text-paper sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {/* =================================================
            DESCRIPTION
        ================================================= */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-2xl text-sm leading-7 text-paper/70 md:text-base"
          >
            {description}
          </motion.p>
        )}

        {/* =================================================
            DECORATIVE BOTTOM INFO
        ================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="h-px w-16 bg-bronze-500/70" />

          <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-paper/40">
            Al Harmain Associates
          </span>
        </motion.div>

      </div>
    </section>
  )
}