import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import VideoSection from '../components/VideoSection'
import Button from '../components/Button'
import NotFound from './NotFound'

import { getServiceById, services } from '../data/services'
import { getWhatsAppLink } from '../utils/whatsapp'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ServiceDetails() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)

  if (!service) return <NotFound />

  const otherServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3)

  return (
    <div className="overflow-hidden bg-paper">

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHeader
        eyebrow="Our Services"
        title={service.name}
        description={service.shortDescription}
        image={service.heroImage}
        breadcrumb={[
          { label: 'Services', path: '/services' },
          { label: service.name },
        ]}
      />

      {/* =========================================================
          MAIN SERVICE CONTENT
      ========================================================= */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.35fr_0.65fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col gap-12"
            >

              {/* Introduction */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                  About This Service
                </p>

                <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink-950 sm:text-5xl">
                  Professional
                  <br />
                  <span className="italic text-bronze-600">
                    {service.name}
                  </span>
                </h2>

                <div className="mt-7 max-w-3xl text-sm leading-7 text-slate-500">
                  <p>{service.description}</p>
                </div>
              </div>

              {/* Process */}
              <div className="border-t border-ink-900/10 pt-8">

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                      How We Work
                    </p>

                    <h3 className="mt-2 font-display text-3xl text-ink-950">
                      Our Process
                    </h3>
                  </div>

                  <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-300 sm:block">
                    Al Harmain
                  </span>
                </div>

                <div className="mt-8 grid gap-4">
                  {service.process.map((step, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="group flex items-start gap-5 border-t border-ink-900/10 py-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-bronze-500/30 text-sm font-medium text-bronze-600 transition-all duration-300 group-hover:bg-bronze-500 group-hover:text-white">
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      <div className="pt-1">
                        <p className="text-sm leading-6 text-ink-800">
                          {step}
                        </p>
                      </div>

                      <CheckCircle2
                        size={17}
                        className="ml-auto mt-1 shrink-0 text-bronze-500 opacity-50 transition-opacity group-hover:opacity-100"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {service.gallery?.length > 0 && (
                <div>

                  <div className="mb-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                      Our Work
                    </p>

                    <h3 className="mt-2 font-display text-3xl text-ink-950">
                      Service Gallery
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {service.gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="group relative overflow-hidden"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <SmartImage
                            src={img}
                            alt={`${service.name} ${i + 1}`}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent opacity-70" />

                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-ink-950">
                            <ArrowUpRight size={15} />
                          </span>

                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper">
                            {service.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video */}
              <div className="border-t border-ink-900/10 pt-10">
                <div className="mb-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                    Explore
                  </p>

                  <h3 className="mt-2 font-display text-3xl text-ink-950">
                    Service Overview
                  </h3>
                </div>

                <VideoSection
                  videoSrc={service.video}
                  poster={service.heroImage}
                  title={`${service.name} overview`}
                />
              </div>

            </motion.div>

            {/* =====================================================
                RIGHT SIDEBAR
            ===================================================== */}
            <motion.aside
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col gap-6"
            >

              {/* Features Card */}
              <div className="border border-ink-900/10 bg-white p-7 shadow-sm">

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center bg-bronze-500/10 text-bronze-600">
                    <Sparkles size={19} />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                    Features
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl text-ink-950">
                  Included Features
                </h3>

                <div className="mt-5 h-px w-10 bg-bronze-500" />

                <ul className="mt-6 flex flex-col gap-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="relative overflow-hidden bg-ink-950 p-7 text-paper">

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-bronze-500/20" />

                <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full border border-bronze-500/10" />

                <div className="relative z-10">

                  <div className="flex h-11 w-11 items-center justify-center bg-bronze-500 text-white">
                    <MessageCircle size={19} />
                  </div>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-bronze-400">
                    Let's Talk
                  </p>

                  <h3 className="mt-2 font-display text-2xl">
                    Interested in this service?
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-paper/60">
                    Message us on WhatsApp for a free consultation
                    and estimate.
                  </p>

                  <Button
                    href={getWhatsAppLink('service', service.name)}
                    className="mt-6 w-full"
                  >
                    Contact via WhatsApp
                    <ArrowRight size={16} />
                  </Button>

                </div>
              </div>

            </motion.aside>

          </div>
        </div>
      </section>

      {/* =========================================================
          OTHER SERVICES
      ========================================================= */}
      <section className="bg-[#f4f1ea] py-20 md:py-24">
        <div className="container-wide">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-600">
                Explore More
              </p>

              <h2 className="mt-3 font-display text-4xl text-ink-950 sm:text-5xl">
                Other
                <span className="italic text-bronze-600">
                  {' '}Services
                </span>
              </h2>
            </div>

            <Link
              to="/services"
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-colors hover:text-bronze-600"
            >
              View All Services
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">

            {otherServices.map((s, index) => (
              <motion.div
                key={s.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${s.id}`}
                  className="group block overflow-hidden bg-white"
                >

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <SmartImage
                      src={s.image}
                      alt={s.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink-950 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>

                    <div className="absolute bottom-5 left-5">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-bronze-400">
                        Service
                      </p>

                      <h3 className="mt-1 font-display text-xl text-white">
                        {s.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-ink-900/10 px-5 py-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Explore Service
                    </span>

                    <ArrowRight
                      size={16}
                      className="text-bronze-600 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-ink-950">

        <div className="absolute inset-0 opacity-15">
          <SmartImage
            src={service.heroImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-ink-950/85" />

        <div className="container-wide relative z-10 py-20 md:py-24">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-400">
                Work With Us
              </p>

              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
                Let's build something
                <br />
                <span className="italic text-bronze-400">
                  exceptional together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-paper/55">
                Talk to our team about your property, construction or
                real estate requirements.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Button
                href={getWhatsAppLink('service', service.name)}
              >
                WhatsApp Us
                <MessageCircle size={16} />
              </Button>

              <Button to="/contact">
                Get in Touch
                <ArrowRight size={16} />
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}