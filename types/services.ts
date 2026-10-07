export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceApproachStep = {
  title: string
  description: string
}

export type ServiceDetailData = {
  /** Real service name for breadcrumbs / marks (e.g. "Content Marketing"). */
  name: string
  /** Creative H1 from the PDF. */
  title: string
  description: string
  whatIs: string
  approach: ServiceApproachStep[]
  deliverables: string[]
  effectiveFor: string[]
  faqs: ServiceFaq[]
}

export type RelatedService = {
  slug: string
  title: string
  description: string
}
