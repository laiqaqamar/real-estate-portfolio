
import { useState } from 'react'
import blockHeroImage from '../assets/images/blocks/block-hero-image.webp'
import { useSearchParams } from 'react-router-dom'
import {
  MapPin,
  Building2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import PageHeader from '../components/PageHeader'
import BlockCard from '../components/BlockCard'
import { blocks, blockCategories } from '../data/blocks'

export default function Blocks() {
  const [searchParams] = useSearchParams()

  const [category, setCategory] = useState(
    searchParams.get('category') || 'All'
  )

  const filtered =
    category === 'All'
      ? blocks
      : blocks.filter((b) => b.category === category)

  return (
    <div className="bg-[#f8f7f4]">

      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Al Harmain Associates"
        title="Gulberg Blocks"
        description="Explore thoughtfully planned communities across Gulberg Greens — from commercial destinations to premium residential and farmhouse areas."
        image={blockHeroImage}
        breadcrumb={[{ label: 'Gulberg Blocks' }]}
      />

      {/* INTRODUCTION */}
      <section className="container-wide pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>
            <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
              <Sparkles size={14} />
              Explore Gulberg Greens
            </span>

            <h2 className="max-w-3xl font-display text-3xl leading-tight text-ink-950 sm:text-4xl lg:text-5xl">
              Find the right place for your{' '}
              <span className="text-bronze-600">next chapter.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              Discover the distinctive communities and blocks of Gulberg
              Greens. Explore their character, location and opportunities
              with Al Harmain Associates.
            </p>
          </div>

          {/* LOCATION CARD */}
          <div className="flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4f1eb]">
              <MapPin size={20} className="text-bronze-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Prime Location
              </p>

              <p className="mt-1 text-sm font-semibold text-ink-950">
                Gulberg Greens, Islamabad
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="container-wide pb-10">
        <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-6">

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-600">
                Browse Communities
              </p>

              <h3 className="mt-2 font-display text-2xl text-ink-950">
                Explore by Category
              </h3>
            </div>

            <p className="text-sm text-slate-400">
              {filtered.length}{' '}
              {filtered.length === 1 ? 'community' : 'communities'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {/* ALL BUTTON */}
            <button
              onClick={() => setCategory('All')}
              className={`group flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                category === 'All'
                  ? 'border-ink-950 bg-ink-950 text-white shadow-lg'
                  : 'border-ink-900/10 bg-[#fafaf8] text-slate-600 hover:border-bronze-500 hover:text-bronze-600'
              }`}
            >
              <Building2 size={16} />

              All Blocks
            </button>

            {/* CATEGORY BUTTONS */}
            {blockCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  category === c.id
                    ? 'border-ink-950 bg-ink-950 text-white shadow-lg'
                    : 'border-ink-900/10 bg-[#fafaf8] text-slate-600 hover:border-bronze-500 hover:text-bronze-600'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCKS GRID */}
      <section className="container-wide pb-20">

        {filtered.length === 0 ? (
          <div className="flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-dashed border-ink-900/15 bg-white px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f1eb]">
              <Building2 size={26} className="text-bronze-600" />
            </div>

            <h3 className="font-display text-2xl text-ink-950">
              No blocks found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              There are currently no blocks available in this category.
              Please explore another category.
            </p>

            <button
              onClick={() => setCategory('All')}
              className="mt-6 rounded-xl bg-ink-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-600"
            >
              View All Blocks
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((block) => (
              <div
                key={block.id}
                className="group relative"
              >
                <BlockCard block={block} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* WHY GULBERG SECTION */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white">

        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/5" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/5" />

        <div className="container-wide relative">

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-400">
                Why Gulberg Greens
              </span>

              <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                A destination designed for{' '}
                <span className="text-bronze-400">
                  living and investment.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                Gulberg Greens brings together residential communities,
                commercial destinations and spacious farmhouse areas within
                one of Islamabad's growing developments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <MapPin
                  size={22}
                  className="mb-5 text-bronze-400"
                />

                <h3 className="font-display text-xl">
                  Prime Location
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Convenient access to key areas of Islamabad.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <Building2
                  size={22}
                  className="mb-5 text-bronze-400"
                />

                <h3 className="font-display text-xl">
                  Diverse Communities
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Residential, commercial and farmhouse opportunities.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f1eee8] py-16">
        <div className="container-wide">

          <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
                Need Guidance?
              </span>

              <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink-950">
                Looking for a property in Gulberg Greens?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Speak with Al Harmain Associates and let us help you
                explore the right opportunity.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink-950 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-bronze-600"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

    </div>
  )
}
