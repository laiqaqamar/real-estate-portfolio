import { useState } from 'react'
import { Calculator, Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import {
  projectTypes,
  constructionTypes,
  foundationDepths,
  calculateEstimate,
} from '../data/calculatorRates'
import { formatPKR } from '../utils/format'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function Pricing() {
  const [projectTypeId, setProjectTypeId] = useState(projectTypes[0].id)
  const [plotSize, setPlotSize] = useState('')
  const [coveredArea, setCoveredArea] = useState('')
  const [constructionTypeId, setConstructionTypeId] = useState(constructionTypes[0].id)
  const [foundationDepthId, setFoundationDepthId] = useState(foundationDepths[0].id)
  const [result, setResult] = useState(null)

  function handleCalculate(e) {
    e.preventDefault()
    const area = Number(coveredArea)
    if (!area || area <= 0) return

    const estimate = calculateEstimate({
      projectTypeId,
      coveredAreaSqFt: area,
      constructionTypeId,
      foundationDepthId,
    })
    setResult(estimate)
  }

  const selectedConstructionType = constructionTypes.find((c) => c.id === constructionTypeId)
  const selectedFoundationDepth = foundationDepths.find((f) => f.id === foundationDepthId)
  const selectedProjectType = projectTypes.find((p) => p.id === projectTypeId)

  return (
    <div>
      <PageHeader
        eyebrow="Pricing"
        title="Construction Cost Calculator"
        description="Get a quick, approximate estimate for your construction project."
        image="/src/assets/images/pricing-hero.jpg"
        breadcrumb={[{ label: 'Pricing' }]}
      />

      <section className="container-wide grid grid-cols-1 gap-10 py-20 lg:grid-cols-2">
        <form
          onSubmit={handleCalculate}
          className="flex flex-col gap-5 rounded-md bg-white p-8 shadow-soft"
        >
          <div className="flex items-center gap-3">
            <Calculator className="text-bronze-500" size={22} />
            <h3 className="font-display text-xl text-ink-950">Estimate Your Project</h3>
          </div>

          <SelectField
            label="Project Type"
            value={projectTypeId}
            onChange={setProjectTypeId}
            options={projectTypes.map((p) => ({ value: p.id, label: p.label }))}
          />

          <TextField
            label="Plot Size (e.g. 5 Marla, 1 Kanal)"
            value={plotSize}
            onChange={setPlotSize}
            placeholder="5 Marla"
          />

          <TextField
            label="Covered Area (sq ft)"
            value={coveredArea}
            onChange={setCoveredArea}
            placeholder="2500"
            type="number"
            required
          />

          <SelectField
            label="Construction Type"
            value={constructionTypeId}
            onChange={setConstructionTypeId}
            options={constructionTypes.map((c) => ({ value: c.id, label: c.label }))}
          />

          <SelectField
            label="Foundation Depth"
            value={foundationDepthId}
            onChange={setFoundationDepthId}
            options={foundationDepths.map((f) => ({ value: f.id, label: f.label }))}
          />

          <Button type="submit" className="mt-2">
            Calculate Estimate
          </Button>
        </form>

        <div className="flex flex-col gap-6">
          {result ? (
            <div className="rounded-md bg-ink-950 p-8 text-paper">
              <h3 className="font-display text-xl">Your Estimate</h3>
              <dl className="mt-6 flex flex-col gap-4 text-sm">
                <Row label="Project Type" value={selectedProjectType.label} />
                <Row label="Plot Size" value={plotSize || '—'} />
                <Row label="Covered Area" value={`${coveredArea} sq ft`} />
                <Row label="Construction Type" value={selectedConstructionType.label} />
                <Row label="Foundation Depth" value={selectedFoundationDepth.label} />
                <Row label="Rate per sq ft" value={formatPKR(result.ratePerSqFt)} />
              </dl>
              <div className="mt-6 border-t border-paper/15 pt-6">
                <p className="text-xs uppercase tracking-wide text-paper/50">Total Estimated Cost</p>
                <p className="mt-1 font-display text-3xl text-bronze-400">{formatPKR(result.totalCost)}</p>
              </div>
              <div className="mt-6 flex items-start gap-2 rounded-sm bg-paper/5 p-4 text-xs text-paper/60">
                <Info size={16} className="mt-0.5 shrink-0" />
                Estimated cost only. Final pricing may vary depending on site conditions, design
                complexity and material choices.
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-md bg-paper-dim bg-paper/60 p-12 text-center text-slate-450">
              <Calculator size={32} className="text-bronze-400" />
              <p className="text-sm">Fill in the form to see your estimated construction cost.</p>
            </div>
          )}

          <div className="rounded-md border border-ink-900/10 bg-white p-8 text-center">
            <h3 className="font-display text-lg text-ink-950">Need a Custom Calculation?</h3>
            <p className="mt-2 text-sm text-slate-450">
              Every project is different. Get a detailed, itemized quotation from our team.
            </p>
            <Button href={getWhatsAppLink('estimate')} className="mt-5">
              Talk to Us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-900">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-bronze-500"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function TextField({ label, value, onChange, placeholder, type = 'text', required = false }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-900">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-sm border border-ink-900/15 bg-white px-4 py-3 text-sm outline-none focus:border-bronze-500"
      />
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-paper/60">{label}</dt>
      <dd className="font-medium text-paper">{value}</dd>
    </div>
  )
}
