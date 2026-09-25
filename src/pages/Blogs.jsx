
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Building2,
  Lightbulb,
  TrendingUp,
} from 'lucide-react'

import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import { blogs, blogCategories } from '../data/blogs'
import { formatDate } from '../utils/format'

import blogHeroImage from '../assets/images/blogs/blog-hero.png'

export default function Blogs() {
  const [category, setCategory] = useState('All')

  const filtered =
    category === 'All'
      ? blogs
      : blogs.filter((b) => b.category === category)

  return (
    <div className="bg-[#f8f7f4]">

      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Al Harmain Associates"
        title="Insights & Ideas"
        description="Explore practical guides, real estate insights, construction knowledge and updates from Al Harmain Associates."
        image={blogHeroImage}
        breadcrumb={[{ label: 'Blogs' }]}
      />

      {/* INTRODUCTION */}
      <section className="container-wide pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
              <BookOpen size={14} />
              Knowledge & Insights
            </span>

            <h2 className="max-w-3xl font-display text-3xl leading-tight text-ink-950 sm:text-4xl lg:text-5xl">
              Ideas that help you make{' '}
              <span className="text-bronze-600">
                better property decisions.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              From understanding the property market to planning your next
              construction project, our insights are designed to help you
              navigate real estate with greater clarity.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Our Focus
            </p>

            <p className="mt-2 max-w-xs text-sm font-semibold leading-6 text-ink-950">
              Real Estate · Construction · Investment · Community Living
            </p>
          </div>

        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="container-wide pb-10">
        <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-6">

          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-600">
              Explore Articles
            </p>

            <h3 className="mt-2 font-display text-2xl text-ink-950">
              Browse by Topic
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">

            <button
              onClick={() => setCategory('All')}
              className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                category === 'All'
                  ? 'border-ink-950 bg-ink-950 text-white shadow-lg'
                  : 'border-ink-900/10 bg-[#fafaf8] text-slate-600 hover:border-bronze-500 hover:text-bronze-600'
              }`}
            >
              All Articles
            </button>

            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  category === c
                    ? 'border-ink-950 bg-ink-950 text-white shadow-lg'
                    : 'border-ink-900/10 bg-[#fafaf8] text-slate-600 hover:border-bronze-500 hover:text-bronze-600'
                }`}
              >
                {c}
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="container-wide pb-20">

        <div className="mb-7 flex items-end justify-between border-b border-ink-900/10 pb-5">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-600">
              Latest Reading
            </p>

            <h3 className="mt-2 font-display text-2xl text-ink-950">
              Featured Articles
            </h3>
          </div>

          <p className="text-sm text-slate-400">
            {filtered.length}{' '}
            {filtered.length === 1 ? 'article' : 'articles'}
          </p>

        </div>

        {filtered.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-ink-900/15 bg-white px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f1eb]">
              <BookOpen size={25} className="text-bronze-600" />
            </div>

            <h3 className="font-display text-2xl text-ink-950">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try selecting another category.
            </p>

            <button
              onClick={() => setCategory('All')}
              className="mt-6 rounded-xl bg-ink-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-600"
            >
              View All Articles
            </button>

          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filtered.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >

                {/* IMAGE */}
                <div className="aspect-[4/3] overflow-hidden bg-[#eeeae3]">
                  <SmartImage
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-3 p-6">

                  <div className="flex items-center gap-3 text-xs text-slate-400">

                    <span className="rounded-full bg-[#f4f1eb] px-3 py-1.5 font-semibold text-bronze-600">
                      {blog.category}
                    </span>

                    <span>
                      {formatDate(blog.date)}
                    </span>

                  </div>

                  <h3 className="font-display text-xl leading-snug text-ink-950 transition-colors duration-300 group-hover:text-bronze-600">
                    {blog.title}
                  </h3>

                  <p className="line-clamp-2 text-sm leading-6 text-slate-500">
                    {blog.excerpt}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-sm font-bold text-bronze-600">
                    Read Article
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </div>
              </Link>
            ))}

          </div>
        )}
      </section>

      {/* TEXT-ONLY FEATURE SECTION */}
      <section className="bg-white py-20">
        <div className="container-wide">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
                Our Perspective
              </span>

              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
                More than property.
                <br />
                <span className="text-bronze-600">
                  It's about the way you live.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-8 text-slate-500">
                Real estate decisions are about much more than square
                footage and numbers. Location, planning, construction
                quality, community and long-term value all play an important
                role.
              </p>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Through our articles, we aim to make these subjects easier
                to understand and help our readers approach property
                decisions with better information.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* THREE TEXT CARDS */}
      <section className="bg-[#f1eee8] py-20">
        <div className="container-wide">

          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
              What You'll Find
            </span>

            <h2 className="mt-3 font-display text-3xl text-ink-950 sm:text-4xl">
              Knowledge for every stage of your property journey.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f1eb]">
                <Building2
                  size={21}
                  className="text-bronze-600"
                />
              </div>

              <h3 className="font-display text-2xl text-ink-950">
                Real Estate
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Learn about property types, locations, market considerations
                and important factors to consider before making a property
                decision.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f1eb]">
                <Lightbulb
                  size={21}
                  className="text-bronze-600"
                />
              </div>

              <h3 className="font-display text-2xl text-ink-950">
                Construction
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Discover useful perspectives on planning, construction,
                design and the details that contribute to a well-built
                property.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="rounded-2xl border border-ink-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f1eb]">
                <TrendingUp
                  size={21}
                  className="text-bronze-600"
                />
              </div>

              <h3 className="font-display text-2xl text-ink-950">
                Investment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Explore ideas around property value, long-term planning and
                the considerations that can shape a real estate investment.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* DARK BRAND SECTION */}
      <section className="bg-ink-950 py-20 text-white">
        <div className="container-wide">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-400">
              Al Harmain Associates
            </span>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Building knowledge alongside{' '}
              <span className="text-bronze-400">
                better places.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
              We believe informed decisions create stronger communities.
              Our insights are part of our commitment to helping clients
              understand property, construction and the opportunities
              around them.
            </p>

            <Link
              to="/properties"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-bronze-600 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-500"
            >
              Explore Properties
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f1eee8] py-16">
        <div className="container-wide">

          <div className="flex flex-col gap-7 rounded-2xl bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
                Have Questions?
              </span>

              <h2 className="mt-3 font-display text-3xl text-ink-950">
                Let's talk about your next property.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Our team is ready to help you explore properties,
                opportunities and services that match your needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink-950 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-600"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  )
}

