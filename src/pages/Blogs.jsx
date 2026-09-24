import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import { blogs, blogCategories } from '../data/blogs'
import { formatDate } from '../utils/format'

export default function Blogs() {
  const [category, setCategory] = useState('All')

  const filtered = category === 'All' ? blogs : blogs.filter((b) => b.category === category)

  return (
    <div>
      <PageHeader
        eyebrow="Insights"
        title="Blogs"
        description="Guides and updates on real estate, construction and community living."
        image="/src/assets/images/blogs/blog-hero.png"
        breadcrumb={[{ label: 'Blogs' }]}
      />

      <section className="container-wide py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('All')}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              category === 'All'
                ? 'border-bronze-500 bg-bronze-500 text-ink-950'
                : 'border-ink-900/15 text-slate-450 hover:border-bronze-400'
            }`}
          >
            All
          </button>
          {blogCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c
                  ? 'border-bronze-500 bg-bronze-500 text-ink-950'
                  : 'border-ink-900/15 text-slate-450 hover:border-bronze-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className="group overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-ink-900/5 transition-shadow hover:shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <SmartImage
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center gap-2 text-xs text-slate-450">
                  <span className="rounded-full bg-bronze-50 px-2.5 py-1 font-medium text-bronze-600">
                    {blog.category}
                  </span>
                  <span>{formatDate(blog.date)}</span>
                </div>
                <h3 className="font-display text-lg leading-snug text-ink-950 group-hover:text-bronze-600">
                  {blog.title}
                </h3>
                <p className="text-sm text-slate-450 line-clamp-2">{blog.excerpt}</p>
                <span className="mt-2 text-sm font-semibold text-bronze-600">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
