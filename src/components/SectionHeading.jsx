import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow-mark ${light ? 'text-bronze-200' : 'text-bronze-600'}`}>{eyebrow}</span>
      )}
      <h2 className={`text-3xl md:text-4xl font-medium leading-[1.1] ${light ? 'text-paper' : 'text-ink-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? 'text-paper/70' : 'text-slate-450'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
