import { useParams, Link } from 'react-router-dom'
import { BedDouble, Bath, Maximize, MapPin, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'
import VideoSection from '../components/VideoSection'
import PropertyCard from '../components/PropertyCard'
import Button from '../components/Button'
import NotFound from './NotFound'
import { getPropertyById, getRelatedProperties } from '../data/properties'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function PropertyDetails() {
  const { propertyId } = useParams()
  const property = getPropertyById(propertyId)

  if (!property) return <NotFound />

  const related = getRelatedProperties(property)

  return (
    <div>
      <PageHeader
        eyebrow={property.type}
        title={property.title}
        description={property.location}
        image={property.featuredImage}
        breadcrumb={[{ label: 'Properties', path: '/properties' }, { label: property.title }]}
      />

      <section className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-3">
        <div className="flex flex-col gap-10 lg:col-span-2">
          <ImageGallery mainImage={property.featuredImage} images={property.gallery} title={property.title} />

          <VideoSection
            videoSrc={property.video}
            youtubeUrl={property.youtubeUrl}
            poster={property.featuredImage}
            title={`${property.title} tour`}
          />

          <div className="flex flex-wrap gap-6 rounded-md bg-white p-6 shadow-sm ring-1 ring-ink-900/5">
            {property.bedrooms > 0 && (
              <Stat icon={BedDouble} label="Bedrooms" value={property.bedrooms} />
            )}
            {property.bathrooms > 0 && <Stat icon={Bath} label="Bathrooms" value={property.bathrooms} />}
            <Stat icon={Maximize} label="Area" value={property.area} />
            <Stat icon={MapPin} label="Location" value={property.location} />
          </div>

          <div>
            <h3 className="font-display text-xl text-ink-950">Description</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-450">{property.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-ink-950">Features</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {property.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-450">
                    <CheckCircle2 size={16} className="text-bronze-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg text-ink-950">Amenities</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-slate-450">
                    <CheckCircle2 size={16} className="text-bronze-500" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {property.blockId && (
            <p className="text-sm text-slate-450">
              Part of{' '}
              <Link to={`/blocks/${property.blockId}`} className="font-medium text-bronze-600 hover:text-bronze-700">
                this block
              </Link>
              . View block facilities and nearby locations.
            </p>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <div className="sticky top-24 flex flex-col gap-4 rounded-md bg-ink-950 p-6 text-paper">
            <span className="text-xs uppercase tracking-wide text-paper/50">{property.status}</span>
            <span className="font-display text-3xl">{property.priceLabel}</span>
            <p className="text-sm text-paper/65">
              Inquire now for the latest availability, payment plan and a full walkthrough.
            </p>
            <Button href={getWhatsAppLink('property', property.title)} className="w-full">
              Inquire via WhatsApp
            </Button>
            <Button to="/contact" variant="outline" className="w-full">
              Send a Message
            </Button>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-paper/60 py-20">
          <div className="container-wide">
            <h3 className="font-display text-2xl text-ink-950">Related Properties</h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze-50 text-bronze-600">
        <Icon size={18} />
      </span>
      <div className="flex flex-col">
        <span className="text-xs text-slate-450">{label}</span>
        <span className="text-sm font-medium text-ink-950">{value}</span>
      </div>
    </div>
  )
}
