export type ScenarioMove = {
  title: string
  body: string
}

export type ScenarioFaq = {
  question: string
  answer: string
}

export type ScenarioService = {
  label: string
  href: string
}

export type ScenarioCta = {
  body: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

export type ScenarioResults = {
  headers: string[]
  rows: string[][]
}

export type GrowthScenario = {
  slug: string
  number: number
  industry: string
  label: string
  metaTitle: string
  metaDescription: string
  focusKeyword: string
  secondaryKeywords: string[]
  metaKeywords: string[]
  ogTitle: string
  ogDescription: string
  featuredImageAlt: string
  internalLinks: string[]
  schema: string[]
  h1: string
  quickAnswer: string
  headlineMetric: string
  headlineMetricLabel: string
  cardSummary: string
  tags: string[]
  homeFeatured: boolean
  businessPattern: Record<string, string>
  challenge: string
  objectives: string[]
  whatWeDid: ScenarioMove[]
  resultsTitle: string
  results: ScenarioResults
  whatMadeTheDifference: string
  faqs: ScenarioFaq[]
  servicesUsed: ScenarioService[]
  cta: ScenarioCta
  /** @deprecated Unused in UI — kept optional for older content files. */
  disclaimer?: string
}

export type GrowthScenarioIndexItem = {
  slug: string
  number: number
  industry: string
  title: string
  metaTitle: string
  focusKeyword: string
  headlineMetric: string
  headlineMetricLabel: string
  cardSummary: string
  tags: string[]
  homeFeatured: boolean
  featuredImageAlt: string
}
