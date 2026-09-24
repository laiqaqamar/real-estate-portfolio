import { useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import VideoSection from '../components/VideoSection'
import Button from '../components/Button'
import NotFound from './NotFound'
import { getServiceById, services } from '../data/services'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function ServiceDetails() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)

  if (!service) return <NotFound />

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div>
      <PageHeader
        eyebrow="Our Services"
        title={service.name}
        description={service.shortDescription}
        image={service.heroImage}
        breadcrumb={[{ label: 'Services', path: '/services' }, { label: service.name }]}
      />

      <section className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <p className="text-base leading-relaxed text-slate-450">{service.description}</p>

          <div>
            <h3 className="font-display text-xl text-ink-950">Our Process</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-bronze-500" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {service.gallery?.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {service.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-md">
                  <SmartImage src={img} alt={`${service.name} ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}

          <VideoSection videoSrc={service.video} poster={service.heroImage} title={`${service.name} overview`} />
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-md bg-white p-6 shadow-soft">
            <h3 className="font-display text-lg text-ink-950">Included Features</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-450">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md bg-ink-950 p-6 text-paper">
            <h3 className="font-display text-lg">Interested in this service?</h3>
            <p className="mt-2 text-sm text-paper/65">
              Message us on WhatsApp for a free consultation and estimate.
            </p>
            <Button href={getWhatsAppLink('service', service.name)} className="mt-5 w-full">
              Contact via WhatsApp
            </Button>
          </div>
        </aside>
      </section>

      <section className="bg-paper/60 py-20">
        <div className="container-wide">
          <h3 className="font-display text-2xl text-ink-950">Other Services</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <a
                key={s.id}
                href={`/services/${s.id}`}
                className="group overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-ink-900/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-ink-950">{s.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
