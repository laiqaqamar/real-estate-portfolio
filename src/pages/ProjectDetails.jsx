import { useParams } from 'react-router-dom'
import { MapPin, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'
import VideoSection from '../components/VideoSection'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import NotFound from './NotFound'
import { getProjectById, projects } from '../data/projects'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  if (!project) return <NotFound />

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <div>
      <PageHeader
        eyebrow={project.status}
        title={project.name}
        description={project.shortDescription}
        image={project.image}
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: project.name }]}
      />

      <section className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-3">
        <div className="flex flex-col gap-10 lg:col-span-2">
          <ImageGallery mainImage={project.image} images={project.gallery} title={project.name} />

          <div>
            <div className="flex items-center gap-2 text-sm text-slate-450">
              <MapPin size={16} className="text-bronze-500" />
              {project.location}
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-450">{project.description}</p>
          </div>

          <VideoSection videoSrc={project.video} poster={project.image} title={`${project.name} tour`} />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-ink-950">Features</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-450">
                    <CheckCircle2 size={16} className="text-bronze-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg text-ink-950">Facilities</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {project.facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-450">
                    <CheckCircle2 size={16} className="text-bronze-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-ink-950">Construction Details</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-450">{project.constructionDetails}</p>
          </div>

          {project.timeline?.length > 0 && (
            <div>
              <h3 className="font-display text-lg text-ink-950">Timeline</h3>
              <div className="mt-4 flex flex-col divide-y divide-ink-900/10 rounded-md bg-white shadow-sm ring-1 ring-ink-900/5">
                {project.timeline.map((t) => (
                  <div key={t.phase} className="flex items-center justify-between px-5 py-4 text-sm">
                    <span className="font-medium text-ink-900">{t.phase}</span>
                    <span className="text-slate-450">{t.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-md bg-ink-950 p-6 text-paper">
            <h3 className="font-display text-lg">Interested in {project.name}?</h3>
            <p className="mt-2 text-sm text-paper/65">
              Reach out for pricing, availability and floor plans.
            </p>
            <Button href={getWhatsAppLink('project', project.name)} className="mt-5 w-full">
              Inquire via WhatsApp
            </Button>
          </div>
        </aside>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-paper/60 py-20">
          <div className="container-wide">
            <h3 className="font-display text-2xl text-ink-950">Related Projects</h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
