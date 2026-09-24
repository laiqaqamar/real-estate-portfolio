import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import BlockCard from '../components/BlockCard'
import { blocks, blockCategories } from '../data/blocks'

export default function Blocks() {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')

  const filtered = category === 'All' ? blocks : blocks.filter((b) => b.category === category)

  return (
    <div>
      <PageHeader
        eyebrow="Communities"
        title="Gulberg Blocks"
        description="Explore Al Harmain Associates' blocks within Gulberg Greens — D-Markaz, Gulberg Farmhouses and Gulberg Residencia."
        image="/src/assets/images/blocks/block-hero-image.webp"
        breadcrumb={[{ label: 'Gulberg Blocks' }]}
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
            All Blocks
          </button>
          {blockCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c.id
                  ? 'border-bronze-500 bg-bronze-500 text-ink-950'
                  : 'border-ink-900/15 text-slate-450 hover:border-bronze-400'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-slate-450">No blocks found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((block) => (
              <BlockCard key={block.id} block={block} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
