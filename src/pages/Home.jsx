import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UserCircle,
  Play,
} from 'lucide-react'

import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import BlockCard from '../components/BlockCard'
import PropertyCard from '../components/PropertyCard'
import AnimatedCounter from '../components/AnimatedCounter'

import { siteInfo, howWeWork } from '../data/siteData'
import { services } from '../data/services'
import { blocks } from '../data/blocks'
import { properties } from '../data/properties'


/* =========================================================
   WHY CHOOSE US
========================================================= */

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Prime Locations',
    description:
      'Strategic locations with high growth potential across Gulberg Greens.',
  },
  {
    icon: UserCircle,
    title: 'Unmatched Quality',
    description:
      'Superior craftsmanship and attention to detail in every project.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Expertise',
    description:
      'From design to handover, we manage the complete journey.',
  },
  {
    icon: MessageCircle,
    title: 'Trusted by Thousands',
    description:
      'A growing legacy of happy families and thriving communities.',
  },
]


export default function Home() {

  const featuredBlocks = blocks.slice(0, 3)

  const featuredProperties = properties.slice(0, 4)


  return (

    <div className="overflow-hidden bg-[#f6f4ee] text-ink-950">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[82vh] overflow-hidden bg-[#091321]">

        <img
          src="/src/assets/videos/hero-image.webp"
          alt={`${siteInfo.companyName} — Gulberg Greens, Islamabad`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="absolute inset-0 bg-black/10" />


        <div className="container-wide relative z-10 flex min-h-[82vh] items-center">

          <div className="max-w-3xl pt-16">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#c99a55]"
            >
              Premium Real Estate & Construction
            </motion.p>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl font-display text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[82px]"
            >
              Building
              <br />
              Better Lifestyles
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg"
            >
              Exceptional properties, inspired design.
              <br />
              A more beautiful tomorrow.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >

              <Link
                to="/properties"
                className="group flex items-center gap-4 rounded-full bg-[#c99a55] px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-[#d9ad6d]"
              >
                Explore Properties

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>


              <Link
                to="/about"
                className="group flex items-center gap-3 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-950"
              >
                About Us

              
              </Link>

            </motion.div>

          </div>

        </div>


        <div className="absolute bottom-8 right-8 hidden items-center gap-8 text-white md:flex">

          <div className="text-right">

            <span className="block text-xs text-white/50">
              01
            </span>

            <span className="text-sm">
              Real Estate
            </span>

          </div>


          <div className="h-px w-10 bg-white/30" />


          <div>

            <span className="block text-xs text-white/50">
              02
            </span>

            <span className="text-sm">
              Construction
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="bg-[#f6f4ee] py-20 md:py-28">

        <div className="container-wide grid items-center gap-14 lg:grid-cols-2 lg:gap-20">


          {/* LEFT IMAGES */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative min-h-[460px]"
          >

            <div className="absolute left-0 top-0 h-[390px] w-[78%] overflow-hidden">

              <video
                src="https://res.cloudinary.com/qrcvira2/video/upload/v1790271875/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />

            </div>


            <div className="absolute bottom-0 right-0 h-[230px] w-[55%] overflow-hidden border-[10px] border-[#f6f4ee]">

              <img
                src="/src/assets/images/blocks/Dmarkaz main.jpeg"
                alt="Al Harmain Associates"
                className="h-full w-full object-cover"
              />

            </div>


            <div className="absolute bottom-8 left-0 z-10 bg-white px-6 py-5 shadow-lg">

              <p className="text-xs uppercase tracking-[0.2em] text-[#b88945]">
                Architecture
              </p>

              <p className="mt-1 font-display text-lg text-ink-950">
                People
              </p>

              <p className="font-display text-lg text-ink-950">
                Communities
              </p>

            </div>

          </motion.div>


          {/* RIGHT ABOUT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="relative">

              {/* STAMP */}

              <div className="absolute right-0 top-0 hidden h-32 w-32 items-center justify-center rounded-full border border-[#b88945]/30 md:flex">

                <div className="absolute inset-2 rounded-full border border-[#b88945]/20" />

                <div className="text-center">

                  <div className="flex items-end justify-center gap-[3px]">

                    <span className="block h-5 w-2 bg-[#b88945]" />
                    <span className="block h-8 w-2 bg-[#b88945]" />
                    <span className="block h-11 w-2 bg-[#b88945]" />

                  </div>

                  <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.25em] text-[#b88945]">
                    Al Harmain
                  </p>

                  <p className="text-[6px] uppercase tracking-[0.22em] text-[#b88945]/80">
                    Associates
                  </p>

                </div>

                <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#f6f4ee] px-2 text-[8px] uppercase tracking-[0.25em] text-[#b88945]">
                  Building
                </span>

                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#f6f4ee] px-2 text-[8px] uppercase tracking-[0.2em] text-[#b88945]">
                  Better Lifestyles
                </span>

              </div>


              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b88945]">
                About Al Harmain
              </p>


              <h2 className="max-w-xl pr-0 font-display text-4xl leading-[1.02] text-ink-950 md:pr-36 md:text-5xl">

                A Vision for
                <br />

                Extraordinary Living

              </h2>


              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">

                Al Harmain Associates is a leading real estate and
                construction group, dedicated to creating exceptional spaces
                that inspire communities and elevate lifestyles.

              </p>


              <div className="mt-8 grid max-w-xl grid-cols-3 gap-6 border-t border-ink-900/10 pt-7">

                {siteInfo.stats
                  .slice(0, 3)
                  .map((stat) => (

                    <div key={stat.label}>

                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />

                      <p className="mt-1 text-xs text-slate-500">
                        {stat.label}
                      </p>

                    </div>

                  ))}

              </div>


              <Button
                to="/about"
                variant="dark"
                className="mt-8 w-fit"
              >
                More About Us
              </Button>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-[#0b1727] py-20 md:py-28">

        <div className="container-wide">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c99a55]">
              Our Expertise
            </p>

            <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
              End-to-End Real Estate Solutions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/55">
              From visionary design to flawless construction, we deliver
              integrated solutions across every stage of your real estate journey.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.slice(0, 4).map((service) => (

              <div
                key={service.id}
                className="group overflow-hidden border border-white/10 bg-[#101f32] transition duration-300 hover:-translate-y-1 hover:border-[#c99a55]/50"
              >

                <ServiceCard
                  service={service}
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-[#f6f4ee] py-20 md:py-24">

        <div className="container-wide">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b88945]">
              Why Choose Us
            </p>

            <h2 className="mt-3 font-display text-4xl text-ink-950 md:text-5xl">

              More Than Properties,
              <br className="hidden md:block" />
              We Build Possibilities

            </h2>

          </div>


          <div className="mt-14 grid border-y border-ink-900/10 md:grid-cols-4">

            {whyChooseUs.map((item, index) => {

              const Icon = item.icon

              return (

                <div
                  key={item.title}
                  className={`p-7 md:p-8 ${
                    index !== 0
                      ? 'border-t border-ink-900/10 md:border-l md:border-t-0'
                      : ''
                  }`}
                >

                  <Icon
                    size={24}
                    strokeWidth={1.4}
                    className="text-[#b88945]"
                  />

                  <h3 className="mt-5 font-display text-lg text-ink-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>

              )

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CEO / LEADERSHIP
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f1eee6] py-20 md:py-28">

        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#c99a55]/5 blur-3xl" />


        <div className="container-wide relative z-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">


            {/* CEO IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <div className="relative h-[500px] overflow-hidden md:h-[590px]">

                <img
                  src="/src/assets/images/ceo2.jpeg"
                  alt="Raja Abdul Rafay - CEO of Al Harmain Associates"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-white/[0.04]" />


                <div className="absolute bottom-0 left-0 w-full bg-[#0b1727]/95 px-7 py-6 md:px-8 md:py-7">

                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                    Meet Our CEO
                  </p>

                  <p
                    className="mt-2 text-[30px] leading-none text-white md:text-[36px]"
                    style={{
                      fontFamily:
                        '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive',
                      fontStyle: 'italic',
                      fontWeight: 400,
                    }}
                  >
                    Raja Abdul Rafay
                  </p>

                </div>

              </div>


              <div className="absolute -bottom-3 left-8 h-[3px] w-20 bg-[#b88945]" />

            </motion.div>


            {/* CEO CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                duration: 0.8,
              }}
              className="flex flex-col"
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#b88945]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88945]">
                  Leadership
                </span>

              </div>


              <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] text-ink-950 md:text-5xl lg:text-[56px]">

                A Message
                <br />

                <span>
                  from Our CEO
                </span>

              </h2>


              <div className="mt-7 h-px w-12 bg-[#b88945]" />


              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 md:text-[15px]">

                As the Chief Executive Officer of Al Harmain Associates,
                Raja Abdul Rafay leads the company with a focus on quality,
                transparency and long-term value in real estate and construction.

              </p>


              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-[15px]">

                His leadership is focused on delivering thoughtfully planned
                developments and maintaining a direct connection with clients
                throughout the project journey.

              </p>


              <div className="mt-9 grid grid-cols-1 gap-7 border-t border-ink-900/10 pt-7 sm:grid-cols-2">

                <div>

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Position
                  </p>

                  <p className="mt-2 text-sm font-semibold text-ink-950">
                    Chief Executive Officer
                  </p>

                </div>


                <div>

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-2 text-sm font-semibold text-ink-950">
                    Gulberg Greens, Islamabad
                  </p>

                </div>


                <div>

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Industry
                  </p>

                  <p className="mt-2 text-sm font-semibold text-ink-950">
                    Real Estate & Construction
                  </p>

                </div>


                <div>

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-semibold text-ink-950">
                    Quality & Transparency
                  </p>

                </div>

              </div>


              <div className="mt-8">

                <p
                  className="text-[30px] text-ink-950/70"
                  style={{
                    fontFamily:
                      '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive',
                    fontStyle: 'italic',
                  }}
                >
                  Raja Abdul Rafay
                </p>

                <div className="mt-1 h-px w-32 bg-ink-900/20" />

              </div>


              <Link
                to="/contact"
                className="group mt-8 flex w-fit items-center gap-5 bg-[#0b1727] py-3 pl-6 pr-3 text-sm font-semibold text-white transition hover:bg-[#b88945]"
              >

                Our Leadership

                <span className="flex h-8 w-8 items-center justify-center bg-white text-ink-950 transition-transform group-hover:translate-x-1">

                  <ArrowUpRight size={15} />

                </span>

              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPLORE AREAS
      ===================================================== */}

      <section className="bg-[#f6f4ee] py-20 md:py-24">

        <div className="container-wide">

          <div className="flex flex-wrap items-end justify-between gap-5">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b88945]">
                Explore Areas
              </p>

              <h2 className="mt-3 font-display text-4xl text-ink-950 md:text-5xl">

                Find the Perfect Location
                <br className="hidden md:block" />
                for Your Lifestyle

              </h2>

            </div>


            <Link
              to="/blocks"
              className="flex items-center gap-2 text-sm font-semibold text-ink-950"
            >

              View All Areas

              <ArrowRight size={16} />

            </Link>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {featuredBlocks.map((block) => (

              <div
                key={block.id}
                className="overflow-hidden"
              >

                <BlockCard
                  block={block}
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PROPERTIES
      ===================================================== */}

      <section className="bg-white py-20 md:py-24">

        <div className="container-wide">

          <div className="flex flex-wrap items-end justify-between gap-5">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b88945]">
                Popular Properties
              </p>

              <h2 className="mt-3 font-display text-4xl text-ink-950 md:text-5xl">
                Featured Properties
              </h2>

            </div>


            <Link
              to="/properties"
              className="flex items-center gap-2 text-sm font-semibold"
            >

              View All Properties

              <ArrowRight size={16} />

            </Link>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProperties.map((property) => (

              <PropertyCard
                key={property.id}
                property={property}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FROM CONCEPT TO HANDOVER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#071525] py-20 md:py-24">

        <div className="absolute inset-0">

          <img
            src="/src/assets/images/block-hero.jpg"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#071525]/90" />

        </div>


        <div className="container-wide relative z-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c99a55]">
              Our Process
            </p>

            <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
              From Concept to Handover
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60">
              A seamless journey, built on trust, expertise, and excellence.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


            {/* 01 */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >

              <div className="relative h-[170px] overflow-hidden">

                <img
                  src="/src/assets/images/services/architecture-hero-image.jpg"
                  alt="Consultation and Planning"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>


              <div className="mt-4 flex items-start gap-4">

                <span className="font-display text-3xl text-[#c99a55]">
                  01
                </span>

                <div className="flex-1">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="font-display text-lg text-white">
                      Consultation & Planning
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/80">
                      <ArrowUpRight size={13} />
                    </span>

                  </div>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    Understanding your vision and goals.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* 02 */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="group"
            >

              <div className="relative h-[170px] overflow-hidden">

                <img
                  src="/src/assets/images/service-hero.jpg"
                  alt="Design and Development"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>


              <div className="mt-4 flex items-start gap-4">

                <span className="font-display text-3xl text-[#c99a55]">
                  02
                </span>

                <div className="flex-1">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="font-display text-lg text-white">
                      Design & Development
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/80">
                      <ArrowUpRight size={13} />
                    </span>

                  </div>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    Turning ideas into inspiring designs.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* 03 */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="group"
            >

              <div className="relative h-[170px] overflow-hidden">

                <img
                  src="/src/assets/images/block-hero.jpg"
                  alt="Construction"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>


              <div className="mt-4 flex items-start gap-4">

                <span className="font-display text-3xl text-[#c99a55]">
                  03
                </span>

                <div className="flex-1">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="font-display text-lg text-white">
                      Construction
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/80">
                      <ArrowUpRight size={13} />
                    </span>

                  </div>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    Quality execution with complete transparency.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* 04 */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="group"
            >

              <div className="relative h-[170px] overflow-hidden">

                <img
                  src="/src/assets/images/services/finishing-design.jpg"
                  alt="Finishing and Handover"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>


              <div className="mt-4 flex items-start gap-4">

                <span className="font-display text-3xl text-[#c99a55]">
                  04
                </span>

                <div className="flex-1">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="font-display text-lg text-white">
                      Handover
                    </h3>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/80">
                      <ArrowUpRight size={13} />
                    </span>

                  </div>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    Delivering your vision with care and excellence.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          READY TO FIND YOUR NEXT PROPERTY
      ===================================================== */}

      <section className="relative overflow-hidden">

        <div className="relative min-h-[370px] md:min-h-[410px]">

          <img
            src="/src/assets/images/block-hero.jpg"
            alt="Find your next property"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1727]/95 via-[#0b1727]/75 to-[#0b1727]/20" />


          <div className="container-wide relative z-10 flex min-h-[370px] items-center md:min-h-[410px]">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5ae70]">
                Let's Build Together
              </p>


              <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] text-white md:text-5xl">

                Ready to Find Your Next Property
                <br className="hidden md:block" />

                or Start Your Next Build?

              </h2>


              <p className="mt-4 text-sm text-white/70 md:text-base">
                Let's turn your vision into reality.
              </p>


              <div className="mt-7 flex flex-wrap gap-3">

                <Button
                  to="/contact"
                  variant="dark"
                  className="bg-[#d8b26d] text-ink-950 hover:bg-[#e4c486]"
                >
                  Get in Touch
                </Button>


                <Button
                  to="/properties"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ink-950"
                >
                  Explore Properties
                </Button>

              </div>

            </div>

          </div>

        </div>

      </section>


    </div>

  )
}