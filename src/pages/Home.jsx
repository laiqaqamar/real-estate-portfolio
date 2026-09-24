import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Calculator, MapPin, MessageCircle, ShieldCheck, UserCircle } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import HeroMedia from '../components/HeroMedia'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import BlockCard from '../components/BlockCard'
import PropertyCard from '../components/PropertyCard'
import AnimatedCounter from '../components/AnimatedCounter'
import { siteInfo, howWeWork } from '../data/siteData'
import { services } from '../data/services'
import { blockCategories, blocks } from '../data/blocks'
import { properties } from '../data/properties'
import { getWhatsAppLink } from '../utils/whatsapp'

// TODO: These are general, non-invented reasons drawn from information we
// actually have (CEO name, location, WhatsApp-first contact). Edit freely
// once you can share more specific reasons to choose Al Harmain Associates.
const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Based in Gulberg Greens',
    description: 'Local presence across D-Markaz, Gulberg Farmhouses and Gulberg Residencia.',
  },
  {
    icon: UserCircle,
    title: 'Led by Raja Abdul Rafay',
    description: 'Direct CEO oversight on every property, project and block.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp-First Communication',
    description: 'Reach our team directly for inquiries, estimates and updates.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear, Transparent Process',
    description: 'A defined process from planning through handover on every project.',
  },
]

export default function Home() {
  const featuredBlocks = blocks.slice(0, 3)
  const featuredProperties = properties.slice(0, 3)

  return (
    <div>
      {/* HERO */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 text-center">

  {/* HERO IMAGE */}
  <img
    src="/src/assets/videos/hero-image.webp"
    alt={`${siteInfo.companyName} — Gulberg Greens, Islamabad`}
    className="absolute inset-0 h-full w-full scale-110 object-cover object-center"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-ink-950/30" />

  {/* HERO CONTENT */}
  <div className="container-wide relative z-10 flex flex-col items-center pt-16">

    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-full bg-ink-950/80 px-5 py-2 text-xs font-bold uppercase tracking-widest text-paper"
    >
      Welcome to {siteInfo.companyName}
    </motion.span>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="mt-6 max-w-7xl font-display text-5xl leading-[1.05] text-paper md:text-7xl"
    >
      Real Estate &amp; Construction.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-6 max-w-xl text-lg text-paper/80"
    >
      {siteInfo.companyName} plans, builds and delivers across Gulberg Greens, Islamabad.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-9 flex flex-wrap items-center justify-center gap-4"
    >
      <Link
        to="/contact"
        className="group flex items-center gap-4 rounded-full bg-ink-950 py-2 pl-6 pr-2 text-sm font-bold text-paper transition-colors hover:bg-ink-800"
      >
        Contact Us
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink-950 transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </Link>

      <Link
        to="/pricing"
        className="group flex items-center gap-4 rounded-full bg-paper py-2 pl-6 pr-2 text-sm font-bold text-ink-950 transition-colors hover:bg-white"
      >
        Get Estimate
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-paper">
          <Calculator size={16} />
        </span>
      </Link>
    </motion.div>

  </div>
</section>

      {/* ABOUT */}
      <section className="container-wide grid grid-cols-1 gap-12 py-24 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-md"
        >
          <video
  src="https://res.cloudinary.com/qrcvira2/video/upload/v1790271875/hero-video.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover"
>
  Your browser does not support the video tag.
</video>
        </motion.div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Us"
            title={siteInfo.companyName}
            description={siteInfo.shortDescription}
          />
          <p className="text-sm leading-relaxed text-slate-450">{siteInfo.vision}</p>

          <div className="mt-4 grid grid-cols-2 gap-6 border-t border-ink-900/10 pt-8 sm:grid-cols-4">
            {siteInfo.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="text-xs text-slate-450">{stat.label}</span>
              </div>
            ))}
          </div>

          <Button to="/about" variant="dark" className="mt-2 w-fit">
            More About Us
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink-900 py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end construction & design services"
            description="From first sketch to final handover, our teams manage every stage of the build under one roof."
            light
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-wide py-24">
        <SectionHeading eyebrow="Why Choose Us" title={`Why work with ${siteInfo.companyName}`} />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-md bg-white p-6 shadow-sm ring-1 ring-ink-900/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze-50 text-bronze-600">
                <item.icon size={20} />
              </span>
              <h3 className="font-display text-lg text-ink-950">{item.title}</h3>
              <p className="text-sm text-slate-450">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* CEO / LEADERSHIP */}
<section className="container-wide py-24">

  <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

    {/* CEO IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="relative h-[500px] overflow-hidden rounded-2xl md:h-[600px]"
    >
      <img
        src="/src/assets/images/ceo2.jpeg"
        alt="Raja Abdul Rafay - CEO of Al Harmain Associates"
        className="h-full w-full object-cover"
      />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950/70 to-transparent" />

      {/* CEO name on image */}
      <div className="absolute bottom-7 left-7">
        <p className="text-xs font-bold uppercase tracking-widest text-paper/70">
          Chief Executive Officer
        </p>

        <h3 className="mt-1 font-display text-3xl text-paper">
          Raja Abdul Rafay
        </h3>
      </div>
    </motion.div>

    {/* CEO INFORMATION */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-6"
    >

      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#b88945]" />

          <span className="text-sm font-medium text-[#b88945]">
            Our Leadership
          </span>
        </div>

        <h2 className="font-display text-4xl leading-tight text-ink-950 md:text-5xl">
          Meet Our CEO
        </h2>
      </div>

      <h3 className="font-display text-2xl text-ink-950">
        Raja Abdul Rafay
      </h3>

      <p className="text-sm leading-relaxed text-slate-450">
        As the Chief Executive Officer of Al Harmain Associates,
        Raja Abdul Rafay leads the company with a focus on quality,
        transparency and long-term value in real estate and
        construction.
      </p>

      <p className="text-sm leading-relaxed text-slate-450">
        His leadership is focused on delivering thoughtfully planned
        developments and maintaining a direct connection with clients
        throughout the project journey.
      </p>

      {/* CEO DETAILS */}
      <div className="grid grid-cols-2 gap-6 border-t border-ink-900/10 pt-7">

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-450">
            Position
          </p>

          <p className="mt-2 text-sm font-semibold text-ink-950">
            Chief Executive Officer
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-450">
            Location
          </p>

          <p className="mt-2 text-sm font-semibold text-ink-950">
            Gulberg Greens, Islamabad
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-450">
            Industry
          </p>

          <p className="mt-2 text-sm font-semibold text-ink-950">
            Real Estate & Construction
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-450">
            Focus
          </p>

          <p className="mt-2 text-sm font-semibold text-ink-950">
            Quality & Transparency
          </p>
        </div>

      </div>

      <Link
        to="/contact"
        className="group mt-2 flex w-fit items-center gap-4 rounded-full bg-ink-950 py-2 pl-6 pr-2 text-sm font-bold text-paper"
      >
        Get in Touch

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink-950 transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </Link>

    </motion.div>

  </div>

</section>

      {/* BLOCK CATEGORIES */}
      <section className="container-wide py-24">
        <SectionHeading
          eyebrow="Explore Gulberg Greens"
          title="Find the block that fits your lifestyle"
          description="D-Markaz, Gulberg Farmhouses or Gulberg Residencia — every block is planned around its own kind of living."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blockCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-md"
            >
              <SmartImage
                src={cat.image}
                alt={cat.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                <h3 className="font-display text-2xl text-paper">{cat.label}</h3>
                <p className="text-sm text-paper/70">{cat.description}</p>
                <Link
                  to={`/blocks?category=${cat.id}`}
                  className="mt-2 w-fit text-sm font-semibold text-bronze-400 hover:text-bronze-300"
                >
                  Discover More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED BLOCKS */}
      <section className="bg-paper-dim bg-paper/60 py-24">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured Blocks" title="Popular blocks right now" />
            <Button to="/blocks" variant="ghost" icon={ArrowRight}>
              View All Blocks
            </Button>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredBlocks.map((block) => (
              <BlockCard key={block.id} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="container-wide py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured Listings" title="Properties you might love" />
          <Button to="/properties" variant="ghost" icon={ArrowRight}>
            View All Properties
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-ink-950 py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Process"
            title="How we work, from concept to handover"
            light
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col gap-3 border-t border-paper/15 pt-6"
              >
                <span className="font-display text-3xl text-bronze-400">{step.step}</span>
                <h3 className="font-display text-lg text-paper">{step.title}</h3>
                <p className="text-sm text-paper/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-24">
        <div className="flex flex-col items-center gap-6 rounded-md bg-bronze-500 px-8 py-16 text-center">
          <h2 className="max-w-2xl font-display text-3xl text-ink-950 md:text-4xl">
            Ready to find your next property, or start your next build?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="dark">
              Contact Our Team
            </Button>
            <Button href={getWhatsAppLink('general')} variant="outline" className="border-ink-950 text-ink-950 hover:bg-ink-950 hover:text-paper">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
