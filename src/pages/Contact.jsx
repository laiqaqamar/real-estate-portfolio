import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
} from 'lucide-react'

import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'

import { siteInfo } from '../data/siteData'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Contact() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description={`Questions about a property, project, or your next build? Reach out to ${siteInfo.companyName} — we usually respond within a few hours.`}
        image="/src/assets/images/contact-hero.jpg"
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      {/* Contact Section */}
      <section className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-3">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 lg:col-span-1">

          {/* Address */}
          <InfoCard
            icon={MapPin}
            label="Office Address"
            value={siteInfo.address}
          />

          {/* Phone */}
          <InfoCard
            icon={Phone}
            label="Phone / WhatsApp"
            value={siteInfo.phone}
            href={`tel:${siteInfo.phone}`}
          />

          {/* Email */}
          {siteInfo.email && (
            <InfoCard
              icon={Mail}
              label="Email"
              value={siteInfo.email}
              href={`mailto:${siteInfo.email}`}
            />
          )}

          {/* Office Hours */}
          {siteInfo.officeHours && (
            <InfoCard
              icon={Clock}
              label="Office Hours"
              value={siteInfo.officeHours}
            />
          )}

          {/* Google Maps */}
          <a
            href={siteInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-ink-900/15 bg-white px-5 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:border-bronze-500 hover:text-bronze-600"
          >
            <MapPin size={18} />

            View Location on Google Maps

            <ExternalLink size={14} />
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={18} />

            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8 lg:col-span-2">

          {/* Contact Form */}
          <div className="rounded-md bg-white p-8 shadow-soft">
            <h3 className="font-display text-xl text-ink-950">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-slate-450">
              Fill in the form below and our team will get back to you shortly.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Location Box */}
          <div className="flex flex-col items-center gap-4 rounded-md bg-ink-950 p-10 text-center">

            <MapPin
              className="text-bronze-400"
              size={28}
            />

            <div>
              <p className="font-display text-lg text-paper">
                {siteInfo.address}
              </p>

              <p className="mt-1 text-sm text-paper/60">
                Google Maps doesn&apos;t allow embedding this shared link
                directly, so use the button below to open it in a new tab.
              </p>
            </div>

            <a
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm bg-bronze-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-bronze-400"
            >
              View Location on Google Maps

              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-md bg-white p-5 shadow-sm ring-1 ring-ink-900/5">

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze-50 text-bronze-600">
        <Icon size={18} />
      </span>

      <div>
        <p className="text-xs text-slate-450">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-ink-950">
          {value}
        </p>
      </div>
    </div>
  )

  return href ? (
    <a
      href={href}
      className="block transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  ) : (
    content
  )
}