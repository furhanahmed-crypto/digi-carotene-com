import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { IndustryOutlinePage } from "@/components/inner/industry-outline-page"
import { getIndustry, industries } from "@/constants/inner/industries"
import { industryFaqsBySlug } from "@/constants/inner/industry-faqs"
import {
  industrySlugToAuditLabel,
  industrySlugToCtaKey,
} from "@/lib/contact-popup"
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

  const faq = industryFaqsBySlug[industry.slug]
  if (!faq) notFound()

  const auditIndustry = industrySlugToAuditLabel[industry.slug]
  const ctaKey = `industry_${industrySlugToCtaKey[industry.slug]}`

  return (
    <IndustryOutlinePage
      title={industry.h1}
      description={`Marketing built for how ${industry.name.toLowerCase()} actually win customers — online, on Maps and on the ground.`}
      mark={industry.name}
      sections={industry.sections.map((section) => ({
        ...section,
        mark: industry.name,
      }))}
      faq={faq}
      related={industry.relatedServices.map((service) => ({
        title: service.title,
        href: service.href,
        body: "A capability we often pair with this industry playbook.",
      }))}
      primaryCta="Get a Free Growth Audit"
      ctaTitle={`Speak to our ${industry.name} experts`}
      ctaLabel="Speak to Our Expert"
      auditIndustry={auditIndustry}
      ctaKey={ctaKey}
    />
  )
}
