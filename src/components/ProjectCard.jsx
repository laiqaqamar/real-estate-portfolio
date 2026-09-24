import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import SmartImage from './SmartImage'

const statusColors = {
  Planned: 'bg-slate-450/90',
  'Under Construction': 'bg-bronze-500 text-ink-950',
  Completed: 'bg-emerald-600',
}

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-md"
    >
      <Link to={`/projects/${project.id}`} className="relative block aspect-[16/11] overflow-hidden">
        <SmartImage
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-sm px-3 py-1 text-xs font-medium text-paper ${
            statusColors[project.status] || 'bg-slate-450'
          }`}
        >
          {project.status}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center gap-1.5 text-xs text-paper/70">
            <MapPin size={13} className="text-bronze-400" />
            {project.location}
          </div>
          <div className="mt-1 flex items-end justify-between">
            <h3 className="font-display text-xl text-paper">{project.name}</h3>
            <ArrowUpRight
              size={22}
              className="shrink-0 text-bronze-400 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
