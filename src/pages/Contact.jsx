
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Building2,
  Handshake,
  Headphones,
} from 'lucide-react'

import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'

import { siteInfo } from '../data/siteData'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Contact() {
  return (
    <div className="bg-[#f8f7f4]">

      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Al Harmain Associates"
        title="Let's Talk"
        description={`Questions about a property, project, or your next build? Reach out to ${siteInfo.companyName} — we're here to help.`}
        image="/src/assets/images/contact-hero.png"
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      {/* INTRO */}
      <section className="container-wide pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
              <MessageCircle size={14} />
              Get In Touch
            </span>

            <h2 className="max-w-3xl font-display text-3xl leading-tight text-ink-950 sm:text-4xl lg:text-5xl">
              We're ready to help with your{' '}
              <span className="text-bronze-600">
                next property decision.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              Whether you're looking for a property, planning a construction
              project, or simply want to learn more about our services,
              our team is ready to hear from you.
            </p>
          </div>

          {/* RESPONSE CARD */}
          <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f1eb]">
              <Headphones
                size={20}
                className="text-bronze-600"
              />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Customer Support
            </p>

            <p className="mt-1 text-sm font-semibold text-ink-950">
              We're here to assist you
            </p>

          </div>

        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="container-wide pb-20">

        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.5fr]">

          {/* LEFT CONTACT DETAILS */}
          <div className="flex flex-col gap-4">

            <div className="mb-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-600">
                Contact Information
              </p>

              <h3 className="mt-2 font-display text-2xl text-ink-950">
                How can we help?
              </h3>
            </div>

            {/* ADDRESS */}
            <InfoCard
              icon={MapPin}
              label="Office Address"
              value={siteInfo.address}
            />

            {/* PHONE */}
            <InfoCard
              icon={Phone}
              label="Phone / WhatsApp"
              value={siteInfo.phone}
              href={`tel:${siteInfo.phone}`}
            />

            {/* EMAIL */}
            {siteInfo.email && (
              <InfoCard
                icon={Mail}
                label="Email"
                value={siteInfo.email}
                href={`mailto:${siteInfo.email}`}
              />
            )}

            {/* OFFICE HOURS */}
            {siteInfo.officeHours && (
              <InfoCard
                icon={Clock}
                label="Office Hours"
                value={siteInfo.officeHours}
              />
            )}

            {/* GOOGLE MAPS */}
            <a
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze-400 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f1eb] text-bronze-600">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Find Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-ink-950">
                    View Location on Google Maps
                  </p>
                </div>

              </div>

              <ExternalLink
                size={16}
                className="text-slate-400 transition group-hover:text-bronze-600"
              />
            </a>

            {/* WHATSAPP */}
            <a
              href={getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl bg-[#1fbd5b] p-5 text-white shadow-[0_10px_30px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20b957]"
            >
              <div className="flex items-center gap-4">

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle size={19} />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                    Quick Response
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Chat with us on WhatsApp
                  </p>
                </div>

              </div>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* CONTACT FORM */}
          <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">

            <div className="border-b border-ink-900/10 pb-6">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-600">
                Send An Enquiry
              </span>

              <h3 className="mt-2 font-display text-2xl text-ink-950 sm:text-3xl">
                Tell us what you need
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Fill in the form below and our team will review your
                message and get back to you as soon as possible.
              </p>

            </div>

            <div className="mt-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="bg-white py-20">
        <div className="container-wide">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
                Why Reach Out?
              </span>

              <h2 className="mt-4 font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
                One conversation can help you take the{' '}
                <span className="text-bronze-600">
                  next step.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Our team can help you understand your options and connect
                you with the right property or service for your needs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">

              {/* ITEM 1 */}
              <div className="rounded-2xl border border-ink-900/10 bg-[#f8f7f4] p-6">

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Building2
                    size={20}
                    className="text-bronze-600"
                  />
                </div>

                <h3 className="font-display text-xl text-ink-950">
                  Properties
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Ask about available properties, locations and current
                  opportunities.
                </p>

              </div>

              {/* ITEM 2 */}
              <div className="rounded-2xl border border-ink-900/10 bg-[#f8f7f4] p-6">

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Handshake
                    size={20}
                    className="text-bronze-600"
                  />
                </div>

                <h3 className="font-display text-xl text-ink-950">
                  Projects
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Discuss construction, development and project
                  requirements with our team.
                </p>

              </div>

              {/* ITEM 3 */}
              <div className="rounded-2xl border border-ink-900/10 bg-[#f8f7f4] p-6">

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                  <Headphones
                    size={20}
                    className="text-bronze-600"
                  />
                </div>

                <h3 className="font-display text-xl text-ink-950">
                  Guidance
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Get in touch when you need information or guidance
                  about your next move.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-ink-950 py-20 text-white">

        <div className="container-wide">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-bronze-400">
                <MapPin size={14} />
                Visit Our Office
              </span>

              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                Find Al Harmain Associates in{' '}
                <span className="text-bronze-400">
                  Gulberg Greens.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Our office is located in Gulberg Greens, Islamabad.
                Open the location in Google Maps for directions and
                navigation.
              </p>

              <p className="mt-5 font-display text-lg text-white">
                {siteInfo.address}
              </p>

            </div>

            <a
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-bronze-600 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-500"
            >
              Open Google Maps
              <ExternalLink size={15} />
            </a>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f1eee8] py-16">
        <div className="container-wide">

          <div className="flex flex-col gap-7 rounded-2xl bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
                Al Harmain Associates
              </span>

              <h2 className="mt-3 font-display text-3xl text-ink-950">
                Ready to discuss your next property?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Send us a message or connect with us directly on WhatsApp.
              </p>
            </div>

            <a
              href={getWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink-950 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-600"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>

    </div>
  )
}

/* -------------------------------------------------------
   INFO CARD
------------------------------------------------------- */

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <div className="flex items-start gap-4">

      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f1eb] text-bronze-600">
        <Icon size={18} />
      </span>

      <div className="min-w-0">

        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-semibold leading-6 text-ink-950">
          {value}
        </p>

      </div>

    </div>
  )

  return href ? (
    <a
      href={href}
      className="block rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze-400 hover:shadow-lg"
    >
      {content}
    </a>
  ) : (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
      {content}
    </div>
  )
}

