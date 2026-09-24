import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BedDouble, Bath, Maximize, MapPin } from 'lucide-react'
import SmartImage from './SmartImage'

export default function PropertyCard({ property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-ink-900/5 transition-shadow hover:shadow-soft"
    >
      <Link to={`/properties/${property.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <SmartImage
          src={property.featuredImage}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-ink-950/85 px-3 py-1 text-xs font-medium text-paper">
          {property.status}
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-bronze-500 px-3 py-1 text-xs font-semibold text-ink-950">
          {property.type}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-1.5 text-xs text-slate-450">
          <MapPin size={14} className="text-bronze-500" />
          {property.location}
        </div>
        <Link to={`/properties/${property.id}`}>
          <h3 className="font-display text-lg leading-snug text-ink-950 hover:text-bronze-600">
            {property.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-450 line-clamp-2">{property.shortDescription}</p>

        <div className="mt-1 flex items-center gap-4 text-sm text-ink-700">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} className="text-bronze-500" /> {property.bedrooms}
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath size={16} className="text-bronze-500" /> {property.bathrooms}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize size={16} className="text-bronze-500" /> {property.area}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-ink-900/10 pt-4">
          <span className="font-display text-lg text-ink-950">{property.priceLabel}</span>
          <Link
            to={`/properties/${property.id}`}
            className="text-sm font-semibold text-bronze-600 hover:text-bronze-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
