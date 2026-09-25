
import { motion } from 'framer-motion'
import { ArrowUpRight, FolderKanban } from 'lucide-react'
import { useState } from 'react'

import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

import projectHero from '../assets/images/projects/project-hero.png'

const statuses = [
  'All',
  'Planned',
  'Under Construction',
  'Completed',
]

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

export default function Projects() {
  const [status, setStatus] = useState('All')

  const filtered =
    status === 'All'
      ? projects
      : projects.filter((p) => p.status === status)

  return (
    <div className="overflow-hidden bg-paper">

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        description="Developments currently underway, planned, and completed by Al Harmain Associates."
        image={projectHero}
        breadcrumb={[{ label: 'Projects' }]}
      />

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">

          {/* Section Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-600">
                Our Portfolio
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight text-ink-950 sm:text-5xl">
                Spaces That
                <br />
                <span className="italic text-bronze-600">
                  Create Value
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500 lg:pb-1">
              Explore our developments, planned projects and completed work
              across real estate and construction.
            </p>
          </motion.div>

          {/* =====================================================
              FILTERS
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 border-y border-ink-900/10 py-5"
          >
            <div className="flex flex-wrap items-center gap-2">

              <div className="mr-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <FolderKanban size={15} className="text-bronze-600" />
                Filter
              </div>

              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                    status === s
                      ? 'border-bronze-500 bg-bronze-500 text-ink-950 shadow-sm'
                      : 'border-ink-900/10 bg-transparent text-slate-500 hover:border-bronze-400 hover:text-ink-950'
                  }`}
                >
                  {s}
                </button>
              ))}

            </div>
          </motion.div>

          {/* =====================================================
              RESULTS COUNT
          ===================================================== */}
          <div className="mb-7 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Showing{' '}
              <span className="font-semibold text-ink-950">
                {filtered.length}
              </span>{' '}
              {filtered.length === 1 ? 'Project' : 'Projects'}
            </p>

            <div className="hidden h-px w-24 bg-bronze-500 sm:block" />
          </div>

          {/* =====================================================
              PROJECT GRID
          ===================================================== */}
          {filtered.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="border border-ink-900/10 bg-white py-24 text-center"
            >
              <FolderKanban
                size={34}
                className="mx-auto text-bronze-500"
              />

              <h3 className="mt-5 font-display text-2xl text-ink-950">
                No Projects Found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                No projects are currently available for this status.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="group"
                >
                  <div className="relative overflow-hidden bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <ProjectCard project={project} />

                    {/* Hover indicator */}
                    <div className="pointer-events-none absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink-950 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-ink-950">

        <div className="absolute inset-0 opacity-10">
          <img
            src={projectHero}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-ink-950/90" />

        <div className="container-wide relative z-10 py-20 md:py-24">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-400">
                Your Next Opportunity
              </p>

              <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
                Find a place worth
                <br />
                <span className="italic text-bronze-400">
                  investing in.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-paper/55">
                Whether you are looking for a home, investment opportunity,
                or a development project, our team is ready to help.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-bronze-500 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-ink-950 transition-all duration-300 hover:bg-bronze-400"
              >
                Talk To Our Team

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  )
}

