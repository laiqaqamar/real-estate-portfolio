import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'
import SmartImage from '../components/SmartImage'
import Button from '../components/Button'
import { siteInfo, howWeWork } from '../data/siteData'
import ceoImage from '../assets/images/ceo.jpeg'

export default function About() {
  return (
    <div>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Who We Are"
        title="About Al Harmain Associates"
        description={`${siteInfo.companyName} — real estate and construction in Gulberg Greens, Islamabad.`}
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* OUR STORY */}
      <section className="container-wide grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] overflow-hidden rounded-md"
        >
          <SmartImage
            src={ceoImage}
            alt="Our team"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Our Story"
            title="Al Harmain Associates"
          />

          <p className="text-sm leading-relaxed text-slate-450">
            {siteInfo.shortDescription}
          </p>

          <p className="text-sm leading-relaxed text-slate-450">
            We operate within Gulberg Greens, Islamabad — across D-Markaz,
            Gulberg Farmhouses and Gulberg Residencia.
          </p>
        </div>
      </section>

      {/* CEO */}
      <section className="container-wide pb-20">
        <div className="flex flex-col items-start gap-6 rounded-md bg-white p-8 shadow-soft sm:flex-row sm:items-center">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
            <img
              src={ceoImage}
              alt={siteInfo.ceo}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-bronze-600">
              Chief Executive Officer
            </p>

            <h3 className="font-display text-xl text-ink-950">
              {siteInfo.ceo}
            </h3>

            <p className="mt-1 text-sm text-slate-450">
              {siteInfo.companyName} — {siteInfo.address}
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-ink-950 py-20">
        <div className="container-wide grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-md border border-paper/10 p-8">
            <h3 className="font-display text-2xl text-paper">
              Our Mission
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              {siteInfo.mission}
            </p>
          </div>

          <div className="rounded-md border border-paper/10 p-8">
            <h3 className="font-display text-2xl text-paper">
              Our Vision
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              {siteInfo.vision}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-2 gap-8 rounded-md bg-white p-10 shadow-soft sm:grid-cols-4">
          {siteInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />

              <span className="text-xs text-slate-450">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-paper/60 py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Process"
            title="How we work"
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
            {howWeWork.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-3 border-t border-ink-900/10 pt-6"
              >
                <span className="font-display text-3xl text-bronze-500">
                  {step.step}
                </span>

                <h3 className="font-display text-lg text-ink-950">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-450">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-20">
        <div className="flex flex-col items-center gap-6 rounded-md bg-ink-950 px-8 py-16 text-center">
          <h2 className="max-w-xl font-display text-3xl text-paper">
            Have a project in mind?
          </h2>

          <Button to="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}