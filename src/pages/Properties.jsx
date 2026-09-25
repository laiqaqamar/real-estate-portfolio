
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Search,
  SlidersHorizontal,
  MapPin,
  X,
  ArrowUpDown,
} from 'lucide-react'
import farm1Image from '../assets/images/properties/farm1.jpeg'
import PageHeader from '../components/PageHeader'
import PropertyCard from '../components/PropertyCard'
import { properties, propertyTypes, propertyStatuses } from '../data/properties'

const sortOptions = [
  { id: 'newest', label: 'Newest Listings' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
]

export default function Properties() {
  const [searchParams] = useSearchParams()

  const [query, setQuery] = useState('')
  const [type, setType] = useState(searchParams.get('type') || 'All')
  const [status, setStatus] = useState('All')
  const [maxPrice, setMaxPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('All')
  const [sort, setSort] = useState('newest')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...properties]

    if (query.trim()) {
      const q = query.toLowerCase()

      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      )
    }

    if (type !== 'All') {
      list = list.filter((p) => p.type === type)
    }

    if (status !== 'All') {
      list = list.filter((p) => p.status === status)
    }

    if (maxPrice) {
      list = list.filter((p) => p.price <= Number(maxPrice))
    }

    if (bedrooms !== 'All') {
      list = list.filter((p) => p.bedrooms >= Number(bedrooms))
    }

    if (sort === 'price-asc') {
      list.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      list.sort((a, b) => b.price - a.price)
    } else {
      list.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() -
          new Date(a.dateAdded).getTime()
      )
    }

    return list
  }, [query, type, status, maxPrice, bedrooms, sort])

  const clearFilters = () => {
    setQuery('')
    setType('All')
    setStatus('All')
    setMaxPrice('')
    setBedrooms('All')
    setSort('newest')
  }

  const hasFilters =
    query ||
    type !== 'All' ||
    status !== 'All' ||
    maxPrice ||
    bedrooms !== 'All'

  return (
    <div className="bg-[#f8f7f4]">

      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Al Harmain Associates"
        title="Our Properties"
        description="Explore carefully selected residential, commercial and investment opportunities across Islamabad and beyond."
image={farm1Image}
        breadcrumb={[{ label: 'Properties' }]}
      />

      {/* INTRO */}
      <section className="container-wide pt-16 pb-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-bronze-600">
              Find Your Place
            </span>

            <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink-950 sm:text-4xl">
              Discover a property that feels like{' '}
              <span className="text-bronze-600">home.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Browse our available properties and find the right space for
              living, investment, business or your next development.
            </p>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/10 bg-white">
              <MapPin size={19} className="text-bronze-600" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Location
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-900">
                Gulberg Greens, Islamabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTER AREA */}
      <section className="container-wide pb-12">
        <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

          {/* TOP SEARCH BAR */}
          <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center">

            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by property name, location or type..."
                className="h-12 w-full rounded-xl border border-ink-900/10 bg-[#fafaf8] pl-12 pr-4 text-sm text-ink-900 outline-none transition placeholder:text-slate-400 focus:border-bronze-500 focus:bg-white"
              />
            </div>

            <button
              onClick={() => setFiltersOpen((open) => !open)}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-ink-900/10 px-5 text-sm font-semibold text-ink-900 transition hover:border-bronze-500 hover:text-bronze-600 lg:hidden"
            >
              <SlidersHorizontal size={17} />
              Filters
            </button>

            <div className="relative">
              <ArrowUpDown
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-ink-900/10 bg-white pl-11 pr-10 text-sm font-medium text-ink-900 outline-none focus:border-bronze-500 sm:w-auto"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* FILTERS */}
          <div
            className={`border-t border-ink-900/10 p-4 sm:p-5 ${
              filtersOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-11 rounded-xl border border-ink-900/10 bg-[#fafaf8] px-3 text-sm text-ink-900 outline-none focus:border-bronze-500"
              >
                <option value="All">All Property Types</option>

                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-11 rounded-xl border border-ink-900/10 bg-[#fafaf8] px-3 text-sm text-ink-900 outline-none focus:border-bronze-500"
              >
                <option value="All">All Statuses</option>

                {propertyStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="h-11 rounded-xl border border-ink-900/10 bg-[#fafaf8] px-3 text-sm text-ink-900 outline-none focus:border-bronze-500"
              >
                <option value="All">Any Bedrooms</option>

                {[1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number}+ Bedrooms
                  </option>
                ))}
              </select>

              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Maximum price (PKR)"
                className="h-11 rounded-xl border border-ink-900/10 bg-[#fafaf8] px-3 text-sm text-ink-900 outline-none placeholder:text-slate-400 focus:border-bronze-500"
              />
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-600 transition hover:text-ink-950"
              >
                <X size={14} />
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* RESULTS HEADER */}
      <section className="container-wide pb-6">
        <div className="flex flex-col gap-3 border-b border-ink-900/10 pb-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze-600">
              Property Collection
            </p>

            <h3 className="mt-2 font-display text-2xl text-ink-950">
              Available Properties
            </h3>
          </div>

          <p className="text-sm text-slate-500">
            <span className="font-semibold text-ink-900">
              {filtered.length}
            </span>{' '}
            {filtered.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
      </section>

      {/* PROPERTY GRID */}
      <section className="container-wide pb-20">

        {filtered.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-ink-900/15 bg-white px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f1eb]">
              <Search size={25} className="text-bronze-600" />
            </div>

            <h3 className="font-display text-2xl text-ink-950">
              No properties found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              We couldn't find any properties matching your current search
              and filters. Try changing your search criteria.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-ink-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-600"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-ink-950 py-16 text-white">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-bronze-400">
                Need Assistance?
              </span>

              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                Can't find the property you're looking for?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                Tell us what you're looking for and our team can help you
                explore suitable property opportunities.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-bronze-600 px-7 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-bronze-500"
            >
              Contact Our Team
            </a>

          </div>
        </div>
      </section>

    </div>
  )
}

