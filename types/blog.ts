export type BlogAuthor = {
  name: string
  url: string
  linkedIn: string
}

export type BlogParagraphBlock = {
  type: "paragraph"
  text: string
}

export type BlogListBlock = {
  type: "list"
  ordered: boolean
  items: string[]
}

export type BlogTableBlock = {
  type: "table"
  headers: string[]
  rows: string[][]
  caption?: string
}

export type BlogBlock = BlogParagraphBlock | BlogListBlock | BlogTableBlock

export type BlogSection = {
  id: string
  heading: string
  blocks: BlogBlock[]
}

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogCta = {
  body: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

export type BlogPost = {
  slug: string
  number: number
  metaTitle: string
  metaDescription: string
  focusKeyword: string
  secondaryKeywords: string[]
  metaKeywords: string[]
  searchIntent: string
  ogTitle: string
  featuredImageAlt: string
  internalLinks: string[]
  schema: string[]
  h1: string
  quickAnswer: string
  datePublished: string
  dateModified: string
  author: BlogAuthor
  sections: BlogSection[]
  faqs: BlogFaq[]
  cta: BlogCta
  relatedSlugs: string[]
}

export type BlogIndexItem = {
  slug: string
  number: number
  title: string
  excerpt: string
  focusKeyword: string
  datePublished: string
  dateModified: string
  featuredImageAlt: string
  relatedSlugs: string[]
}
