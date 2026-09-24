import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import VideoSection from '../components/VideoSection'
import NotFound from './NotFound'
import { getBlogById, getRelatedBlogs } from '../data/blogs'
import { formatDate } from '../utils/format'

export default function BlogDetails() {
  const { blogId } = useParams()
  const blog = getBlogById(blogId)

  if (!blog) return <NotFound />

  const related = getRelatedBlogs(blog)

  return (
    <div>
      <PageHeader
        eyebrow={blog.category}
        title={blog.title}
        description={formatDate(blog.date)}
        image={blog.featuredImage}
        breadcrumb={[{ label: 'Blogs', path: '/blogs' }, { label: blog.title }]}
      />

      <section className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-3">
        <article className="flex flex-col gap-6 lg:col-span-2">
          {blog.content.split('\n\n').map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-450">
              {para}
            </p>
          ))}

          {blog.images?.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {blog.images.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-md">
                  <SmartImage src={img} alt={`${blog.title} ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}

          <VideoSection videoSrc={blog.video} poster={blog.featuredImage} title={blog.title} />
        </article>

        <aside className="flex flex-col gap-4">
          {related.length > 0 && (
            <div className="rounded-md bg-white p-6 shadow-sm ring-1 ring-ink-900/5">
              <h3 className="font-display text-lg text-ink-950">Related Posts</h3>
              <div className="mt-4 flex flex-col gap-4">
                {related.map((b) => (
                  <Link key={b.id} to={`/blogs/${b.id}`} className="group flex gap-3">
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-sm">
                      <SmartImage src={b.featuredImage} alt={b.title} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-900 group-hover:text-bronze-600 line-clamp-2">
                        {b.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-450">{formatDate(b.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>
    </div>
  )
}
