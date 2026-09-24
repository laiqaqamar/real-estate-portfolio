import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SmartImage from './SmartImage'

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Building2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-md bg-ink-950 text-paper"
    >
      {/* Larger image area */}
      <div className="relative h-72 w-full overflow-hidden">
        <SmartImage
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-ink-950/40" />

        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-bronze-500 text-ink-950">
          <Icon size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl">
          {service.name}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-paper/65">
          {service.shortDescription}
        </p>

        <Link
          to={`/services/${service.id}`}
          className="mt-2 text-sm font-semibold text-bronze-400 hover:text-bronze-300"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  )
}