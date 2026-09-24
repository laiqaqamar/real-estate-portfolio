import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const statuses = ['All', 'Planned', 'Under Construction', 'Completed']

export default function Projects() {
  const [status, setStatus] = useState('All')

  const filtered = status === 'All' ? projects : projects.filter((p) => p.status === status)

  return (
    <div>
      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        description="Developments currently underway, planned, and completed by Al Harmain Associates."
        image="/src/assets/images/projects/project-hero.png"
        breadcrumb={[{ label: 'Projects' }]}
      />

      <section className="container-wide py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                status === s
                  ? 'border-bronze-500 bg-bronze-500 text-ink-950'
                  : 'border-ink-900/15 text-slate-450 hover:border-bronze-400'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-slate-450">No projects found for this status.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
