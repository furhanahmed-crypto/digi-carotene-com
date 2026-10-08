import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { OutlinePage } from "@/components/inner/outline-page"
import { getIndustry, industries } from "@/constants/inner/industries"
import { metadataFor, type PageSlug } from "@/lib/seo/page-meta"

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!getIndustry(slug)) return {}
  return metadataFor(`/industries/${slug}` as PageSlug)
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  return (
    <OutlinePage
      title={industry.h1}
      description="[[One-line statement of this industry's marketing problem — to confirm]]"
      mark={industry.name}
      breadcrumbs={[
        { label: "Industries", href: "/industries" },
        { label: industry.name },
      ]}
      sections={industry.sections.map((section) => ({
        ...section,
        mark: industry.name,
      }))}
      clientLogos
      clientLogoSeed={industry.slug}
      faqs={[]}
      related={industry.relatedServices.map((service) => ({
        title: service.title,
        href: service.href,
        body: "[[One-line service summary — to confirm]]",
      }))}
      primaryCta="Get a Free Growth Audit"
      ctaTitle={`Talk to our ${industry.name} specialists`}
      ctaLabel="Talk to an Industry Specialist"
    />
  )
}
