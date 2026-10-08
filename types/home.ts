export type CtaLink = {
  label: string
  href: string
}

export type ServicePanelTone = "yellow" | "green" | "blue" | "purple" | "red"

export type ServicePanel = {
  id: string
  title: string
  body: string
  href: string
  tone: ServicePanelTone
}

export type FrameworkStep = {
  number: string
  title: string
  body: string
  tags: string[]
}

export type DifferentiatorCard = {
  id: string
  title: string
  body: string
}

export type AudienceItem = {
  id: string
  label: string
  body: string
  href?: string
}

export type ResultCard = {
  id: string
  client: string
  industry: string
  metric: string
  metricLabel: string
  summary: string
  tags: string[]
}

export type ReelItem = {
  id: string
  label: string
  handle: string
  videoSrc: string
  posterSrc: string
}

export type SearchRankingTag = {
  label: string
  href: string
}

export type FaqItem = {
  question: string
  answer: string
}
