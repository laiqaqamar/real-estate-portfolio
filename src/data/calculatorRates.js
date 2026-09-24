// =============================================================
// CONSTRUCTION COST CALCULATOR RATES
// PLACEHOLDER RATES - these were not supplied by Al Harmain Associates.
// Replace every ratePerSqFt / multiplier below with your company's real
// figures before publishing. Update rates here only - never hardcode a
// rate inside a component.
// All rates are PKR per square foot of covered area unless noted.
// =============================================================

export const projectTypes = [
  { id: 'house', label: 'House' },
  { id: 'apartment', label: 'Apartment' },
  { id: 'farmhouse', label: 'Farmhouse' },
  { id: 'commercial', label: 'Commercial' },
]

export const constructionTypes = [
  { id: 'grey-structure', label: 'Grey Structure Only', ratePerSqFt: 2600 },
  { id: 'grey-plus-finishing-standard', label: 'Grey Structure + Standard Finishing', ratePerSqFt: 4200 },
  { id: 'grey-plus-finishing-premium', label: 'Grey Structure + Premium Finishing', ratePerSqFt: 5800 },
  { id: 'turnkey-luxury', label: 'Turnkey Luxury', ratePerSqFt: 7500 },
]

export const foundationDepths = [
  { id: 'standard', label: 'Standard (3–4 ft)', multiplier: 1 },
  { id: 'deep', label: 'Deep (5–7 ft)', multiplier: 1.08 },
  { id: 'extra-deep', label: 'Extra Deep (8+ ft, weak soil)', multiplier: 1.18 },
]

// Simple multiplier applied per project type on top of the base construction-type rate.
export const projectTypeMultipliers = {
  house: 1,
  apartment: 0.95,
  farmhouse: 1.05,
  commercial: 1.15,
}

/**
 * Calculate an approximate construction cost estimate.
 * Kept as a plain function so the Pricing page stays simple —
 * update the rate tables above, not this function, when prices change.
 */
export function calculateEstimate({ projectTypeId, coveredAreaSqFt, constructionTypeId, foundationDepthId }) {
  const constructionType = constructionTypes.find((c) => c.id === constructionTypeId)
  const foundationDepth = foundationDepths.find((f) => f.id === foundationDepthId)
  const projectMultiplier = projectTypeMultipliers[projectTypeId] ?? 1

  if (!constructionType || !foundationDepth || !coveredAreaSqFt) return null

  const baseRate = constructionType.ratePerSqFt * projectMultiplier * foundationDepth.multiplier
  const ratePerSqFt = Math.round(baseRate)
  const totalCost = Math.round(ratePerSqFt * coveredAreaSqFt)

  return { ratePerSqFt, totalCost }
}
