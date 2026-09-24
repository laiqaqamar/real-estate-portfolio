import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SmartImage from './SmartImage'
import { blockCategories } from '../data/blocks'

export default function BlockCard({ block }) {
  const categoryLabel = blockCategories.find((c) => c.id === block.category)?.label || block.category

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-ink-900/5 transition-shadow hover:shadow-soft"
    >
      <Link to={`/blocks/${block.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <SmartImage
          src={block.image}
          alt={block.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-bronze-500 px-3 py-1 text-xs font-semibold text-ink-950">
          {categoryLabel}
        </span>
      </Link>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-1.5 text-xs text-slate-450">
          <MapPin size={14} className="text-bronze-500" />
          {block.location}
        </div>
        <Link to={`/blocks/${block.id}`}>
          <h3 className="font-display text-lg text-ink-950 hover:text-bronze-600">{block.name}</h3>
        </Link>
        <p className="text-sm text-slate-450 line-clamp-2">{block.shortDescription}</p>
        <Link
          to={`/blocks/${block.id}`}
          className="mt-2 text-sm font-semibold text-bronze-600 hover:text-bronze-700"
        >
          Explore Block →
        </Link>
      </div>
    </motion.div>
  )
}
