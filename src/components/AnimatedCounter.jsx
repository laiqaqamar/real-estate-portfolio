import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

/**
 * Renders an animated counter for a numeric value.
 * Supports both numbers and numeric strings from siteData.js.
 */
export default function AnimatedCounter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  // Convert numeric strings like "5" or "100" into numbers
  const numericValue = Number(value)
  const hasValue = value !== null && value !== undefined && !Number.isNaN(numericValue)

  useEffect(() => {
    if (!inView || !hasValue) return

    let start = null
    let frame

    function step(timestamp) {
      if (start === null) start = timestamp

      const progress = Math.min(
        (timestamp - start) / (duration * 1000),
        1
      )

      setDisplay(Math.floor(progress * numericValue))

      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(frame)
  }, [inView, numericValue, duration, hasValue])

  if (!hasValue) {
    return (
      <motion.span
        ref={ref}
        className="font-display text-2xl text-ink-950/30 md:text-3xl"
      >
        Add info
      </motion.span>
    )
  }

  return (
    <motion.span
      ref={ref}
      className="font-display text-4xl text-ink-950 md:text-5xl"
    >
      {display}
      {suffix}
    </motion.span>
  )
}