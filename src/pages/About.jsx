
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Handshake,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import blockHeroImage from '../assets/images/blocks/block-hero-image.webp'
import aboutCover from '../assets/images/hero-back-image.png'
import ceoImage from '../assets/images/ceo.jpeg'
import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import Button from '../components/Button'
import aboutOffice from '../assets/images/about-office.png'
import { siteInfo, howWeWork } from '../data/siteData'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
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
  hidden: { opacity: 0, x: -40 },
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
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Trusted Quality',
    text: 'We focus on dependable standards, thoughtful planning and quality that creates lasting value.',
  },
  {
    icon: Sparkles,
    title: 'Modern Living',
    text: 'Our approach combines contemporary design with practical spaces made for everyday life.',
  },
  {
    icon: Handshake,
    title: 'Client First',
    text: 'Every project begins with understanding our clients and ends with delivering on our commitments.',
  },
  {
    icon: Compass,
    title: 'Local Expertise',
    text: 'Our knowledge of Islamabad and Gulberg Greens helps us identify meaningful property opportunities.',
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-paper">

      {/* =========================================================
          HERO
      ========================================================= */}

      <PageHeader
        eyebrow="Who We Are"
        title="About Al Harmain Associates"
        description="Building better spaces, creating lasting value and helping people find places they are proud to call home."
        image={aboutCover}
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* =========================================================
          INTRO / STORY
      ========================================================= */}

      <section className="relative bg-paper py-20 md:py-28">
        <div className="container-wide">

          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Images */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden">

                <SmartImage
src={aboutOffice}
                  alt="Al Harmain Associates"
                  className="h-[460px] w-full object-cover sm:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 bg-paper px-6 py-5 shadow-xl sm:bottom-8 sm:left-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-bronze-600">
                    Al Harmain
                  </p>

                  <p className="mt-1 font-display text-2xl text-ink-950">
                    Built on Trust
                  </p>

                  <div className="mt-2 h-px w-12 bg-bronze-500" />
                </div>
              </div>

              <div className="absolute -bottom-7 right-5 hidden w-52 bg-ink-950 p-5 text-paper shadow-2xl sm:block md:right-0">
                <MapPin size={18} className="mb-3 text-bronze-400" />

                <p className="text-[10px] uppercase tracking-[0.2em] text-paper/50">
                  Based In
                </p>

                <p className="mt-1 font-display text-lg">
                  Gulberg Greens
                </p>

                <p className="text-xs text-paper/60">
                  Islamabad, Pakistan
                </p>
              </div>

              <div className="absolute -left-3 -top-3 h-20 w-20 border border-bronze-500/40" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                About Al Harmain
              </p>

              <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-ink-950 sm:text-5xl lg:text-[3.6rem]">
                A Vision for
                <br />
                <span className="italic text-bronze-600">
                  Extraordinary Living
                </span>
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-slate-500">
                <p>
                  {siteInfo.shortDescription}
                </p>

                <p>
                  We believe real estate is about more than buildings.
                  It is about creating environments where families grow,
                  businesses develop and communities thrive.
                </p>

                <p>
                  From residential developments to commercial spaces,
                  construction and property solutions, our goal is to
                  deliver thoughtful work with long-term value.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-ink-900/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze-500/10">
                  <MapPin size={17} className="text-bronze-600" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Our Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-ink-950">
                    Gulberg Greens, Islamabad
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button to="/contact">
                  Talk To Our Team
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="bg-ink-950 py-16 md:py-20">
        <div className="container-wide">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-400">
              Our Journey
            </p>

            <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
              Experience That Creates Value
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 border border-paper/10 sm:grid-cols-3">

            {/* YEARS EXPERIENCE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group border-b border-paper/10 px-6 py-12 text-center sm:border-b-0 sm:border-r"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <span className="font-display text-5xl font-medium text-paper sm:text-6xl">
                  5<span className="text-bronze-400">+</span>
                </span>
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                Years Experience
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-bronze-500" />
            </motion.div>

            {/* HAPPY CLIENTS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group border-b border-paper/10 px-6 py-12 text-center sm:border-b-0 sm:border-r"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <span className="font-display text-5xl font-medium text-paper sm:text-6xl">
                  500<span className="text-bronze-400">+</span>
                </span>
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                Happy Clients
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-bronze-500" />
            </motion.div>

            {/* PROJECTS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group px-6 py-12 text-center"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <span className="font-display text-5xl font-medium text-paper sm:text-6xl">
                  250<span className="text-bronze-400">+</span>
                </span>
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">
                Projects Completed
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-bronze-500" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="bg-[#f4f1ea] py-20 md:py-24">
        <div className="container-wide">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                Why Al Harmain
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight text-ink-950 sm:text-5xl">
                More Than
                <br />
                <span className="italic text-bronze-600">
                  Properties
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                We combine property expertise, construction knowledge and
                a people-first approach to create spaces that stand the
                test of time.
              </p>

              <div className="mt-8 h-px w-20 bg-bronze-500" />
            </motion.div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">

              {values.map((value, index) => {
                const Icon = value.icon

                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group border-t border-ink-900/10 pt-6"
                  >
                    <div className="flex items-start justify-between">

                      <div className="flex h-11 w-11 items-center justify-center border border-bronze-500/30 text-bronze-600 transition-all duration-300 group-hover:bg-bronze-500 group-hover:text-white">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <span className="text-xs text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl text-ink-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {value.text}
                    </p>
                  </motion.div>
                )
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CEO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-wide">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* CEO IMAGE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-lg">

                <div className="absolute -bottom-5 -left-5 h-32 w-32 border border-bronze-500/40" />

                <div className="relative overflow-hidden">
                  <img
                    src={ceoImage}
                    alt={siteInfo.ceo}
                    className="h-[500px] w-full object-cover object-center"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-7">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-bronze-400">
                      Leadership
                    </p>

                    <p className="mt-1 font-display text-2xl text-white">
                      {siteInfo.ceo}
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-7 -right-5 hidden w-48 bg-paper p-5 shadow-xl sm:block">
                  <Quote
                    size={23}
                    className="text-bronze-500"
                  />

                  <p className="mt-3 font-display text-sm italic leading-5 text-ink-950">
                    Building communities for a better tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CEO CONTENT */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-600">
                Leadership
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight text-ink-950 sm:text-5xl">
                A Message from
                <br />
                <span className="italic text-bronze-600">
                  Our CEO
                </span>
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-slate-500">
                <p>
                  At Al Harmain Associates, our vision is to create
                  exceptional living and working spaces that add value
                  to people's lives.
                </p>

                <p>
                  We believe that successful real estate development
                  requires more than beautiful buildings. It requires
                  integrity, transparency, attention to detail and a
                  long-term commitment to our clients and communities.
                </p>
              </div>

              <div className="mt-8 border-t border-ink-900/10 pt-6">
                <p className="font-display text-xl text-ink-950">
                  {siteInfo.ceo}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-bronze-600">
                  Chief Executive Officer
                </p>
              </div>

              <div className="mt-8">
                <Button to="/contact">
                  Connect With Us
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          AREAS / LOCATION
      ========================================================= */}

      <section className="bg-ink-950 py-20 md:py-24">
        <div className="container-wide">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-bronze-400">
                Where We Work
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight text-paper sm:text-5xl">
                Rooted in
                <br />
                <span className="italic text-bronze-400">
                  Islamabad
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-paper/55">
                Our work is closely connected to Gulberg Greens and
                the wider Islamabad property market. We understand
                the neighbourhoods, opportunities and lifestyle that
                make the capital an attractive place to live and invest.
              </p>

              <div className="mt-8 flex items-start gap-4 border-t border-paper/10 pt-6">
                <MapPin
                  className="mt-1 shrink-0 text-bronze-400"
                  size={20}
                />

                <div>
                  <p className="text-sm font-medium text-paper">
                    Gulberg Greens
                  </p>

                  <p className="mt-1 text-xs text-paper/45">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden">

                <SmartImage
                 src={blockHeroImage}
                  alt="Gulberg Greens Islamabad"
                  className="h-[400px] w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink-950">
                  <MapPin size={17} />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-paper">
                  Gulberg Greens
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-600">
              Our Process
            </p>

            <h2 className="mt-3 font-display text-4xl text-ink-950 sm:text-5xl">
              From Concept
              <br />
              <span className="italic text-bronze-600">
                to Completion
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              A clear and thoughtful process designed to keep every
              project moving with confidence, quality and transparency.
            </p>
          </div>

          <div className="relative mt-16">

            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-ink-900/10 lg:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {howWeWork.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-bronze-500 bg-paper font-display text-lg text-bronze-600">
                    {String(step.step).padStart(2, '0')}
                  </div>

                  <h3 className="mt-6 font-display text-xl text-ink-950">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  <div className="mx-auto mt-5 h-px w-8 bg-bronze-500" />
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-ink-950">

        <div className="absolute inset-0 opacity-20">
          <SmartImage
            src="/src/assets/images/about-hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-ink-950/80" />

        <div className="container-wide relative z-10 py-20 md:py-24">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-400">
                Start Your Journey
              </p>

              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
                Ready to find your
                <br />
                <span className="italic text-bronze-400">
                  next property?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-paper/55">
                Whether you are looking for a new home, an investment
                opportunity or a construction partner, our team is ready
                to help.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <Button to="/contact">
                Get in Touch
                <ArrowRight size={16} />
              </Button>

              <Button to="/properties">
                Explore Properties
                <ArrowUpRight size={16} />
              </Button>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
