import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Full-service construction and design, from architectural drawings to final finishing."
        image="/src/assets/images/service-hero.jpg"
        breadcrumb={[{ label: 'Services' }]}
      />
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
}
