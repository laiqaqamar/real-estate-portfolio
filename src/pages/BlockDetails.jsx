import { useParams } from 'react-router-dom'
import { CheckCircle2, MapPin, Ruler, Home as HomeIcon, ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'
import VideoSection from '../components/VideoSection'
import PropertyCard from '../components/PropertyCard'
import Button from '../components/Button'
import NotFound from './NotFound'
import { getBlockById, blockCategories } from '../data/blocks'
import { properties } from '../data/properties'
import { siteInfo } from '../data/siteData'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function BlockDetails() {
  const { blockId } = useParams()
  const block = getBlockById(blockId)

  if (!block) return <NotFound />

  const availableProperties = properties.filter((p) => p.blockId === block.id)
  const categoryLabel = blockCategories.find((c) => c.id === block.category)?.label || block.category

  return (
    <div>
      <PageHeader
        eyebrow={categoryLabel}
        title={block.name}
        description={block.location}
        image={block.image}
        breadcrumb={[{ label: 'Gulberg Blocks', path: '/blocks' }, { label: block.name }]}
      />

      <section className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-3">
        <div className="flex flex-col gap-10 lg:col-span-2">
          <ImageGallery mainImage={block.image} images={block.gallery} title={block.name} />

          <div>
            <h3 className="font-display text-xl text-ink-950">Overview</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-450">{block.overview}</p>
            <p className="mt-3 text-base leading-relaxed text-slate-450">{block.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-md bg-white p-5 shadow-sm ring-1 ring-ink-900/5">
              <HomeIcon size={20} className="mt-0.5 text-bronze-500" />
              <div>
                <p className="text-sm font-medium text-ink-950">Property Types</p>
                <p className="mt-1 text-sm text-slate-450">{block.propertyTypes.join(', ')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md bg-white p-5 shadow-sm ring-1 ring-ink-900/5">
              <Ruler size={20} className="mt-0.5 text-bronze-500" />
              <div>
                <p className="text-sm font-medium text-ink-950">Plot Sizes</p>
                <p className="mt-1 text-sm text-slate-450">{block.plotSizes.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-ink-950">Facilities</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {block.facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-450">
                    <CheckCircle2 size={16} className="text-bronze-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg text-ink-950">Nearby Locations</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {block.nearbyLocations.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-sm text-slate-450">
                    <MapPin size={16} className="text-bronze-500" /> {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <VideoSection videoSrc={block.video} poster={block.image} title={`${block.name} tour`} />

          <div className="flex items-center justify-between rounded-md bg-white p-5 shadow-sm ring-1 ring-ink-900/5">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-bronze-500" />
              <div>
                <p className="text-sm font-medium text-ink-950">{block.location}</p>
                <p className="text-xs text-slate-450">{siteInfo.address}</p>
              </div>
            </div>
            <a
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-bronze-600 hover:text-bronze-700"
            >
              View on Google Maps <ExternalLink size={14} />
            </a>
          </div>

          {availableProperties.length > 0 && (
            <div>
              <h3 className="font-display text-lg text-ink-950">Available Properties in {block.name}</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {availableProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <div className="sticky top-24 rounded-md bg-ink-950 p-6 text-paper">
            <h3 className="font-display text-lg">Interested in {block.name}?</h3>
            <p className="mt-2 text-sm text-paper/65">
              Talk to our team about plot availability, pricing and payment plans.
            </p>
            <Button href={getWhatsAppLink('block', block.name)} className="mt-5 w-full">
              Inquire via WhatsApp
            </Button>
          </div>
        </aside>
      </section>
    </div>
  )
}
