import PageHeader from '../components/PageHeader'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import { faqs } from '../data/faqs'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function FAQ() {
  return (
    <div>
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Answers to common questions about buying, building and our process."
        image="/src/assets/images/services/interior-hero-image.jpg"
        breadcrumb={[{ label: 'FAQs' }]}
      />

      <section className="container-wide py-20">
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />

          <div className="mt-12 flex flex-col items-center gap-4 rounded-md bg-ink-950 px-8 py-12 text-center">
            <h3 className="font-display text-xl text-paper">Still have a question?</h3>
            <p className="text-sm text-paper/65">Our team typically responds within a few hours.</p>
            <Button href={getWhatsAppLink('general')}>Ask on WhatsApp</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
