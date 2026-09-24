import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PropertyCard from '../components/PropertyCard'
import { properties, propertyTypes, propertyStatuses } from '../data/properties'

const sortOptions = [
  { id: 'newest', label: 'Newest' },
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
    if (type !== 'All') list = list.filter((p) => p.type === type)
    if (status !== 'All') list = list.filter((p) => p.status === status)
    if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice))
    if (bedrooms !== 'All') list = list.filter((p) => p.bedrooms === Number(bedrooms))

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))

    return list
  }, [query, type, status, maxPrice, bedrooms, sort])

  return (
    <div>
      <PageHeader
        eyebrow="Listings"
        title="Properties"
        description="Browse houses, apartments, farmhouses, commercial units and plots currently available."
        image="/src/assets/images/properties-hero.jpg"
        breadcrumb={[{ label: 'Properties' }]}
      />

      <section className="container-wide py-16">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-450" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, location or type…"
                className="w-full rounded-sm border border-ink-900/15 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-bronze-500"
              />
            </div>
            <button
              onClick={() => setFiltersOpen((o) => !o)}
              className="flex items-center justify-center gap-2 rounded-sm border border-ink-900/15 bg-white px-5 py-3 text-sm font-medium text-ink-900 sm:hidden"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-bronze-500"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={`grid-cols-2 gap-3 sm:grid sm:grid-cols-4 ${filtersOpen ? 'grid' : 'hidden sm:grid'}`}>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-sm border border-ink-900/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-bronze-500"
            >
              <option value="All">All Types</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-sm border border-ink-900/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-bronze-500"
            >
              <option value="All">All Status</option>
              {propertyStatuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="rounded-sm border border-ink-900/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-bronze-500"
            >
              <option value="All">Any Bedrooms</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}+ Bed
                </option>
              ))}
            </select>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max price (PKR)"
              className="rounded-sm border border-ink-900/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-bronze-500"
            />
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-450">{filtered.length} properties found</p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-24 text-center">
            <p className="font-display text-xl text-ink-950">No properties found</p>
            <p className="text-sm text-slate-450">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
