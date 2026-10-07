import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { metadataFor, pageMetaBySlug, type PageSlug } from "@/lib/seo/page-meta"

import { DigitalServiceDetail } from "./service-detail"

const services = [
  "performance-marketing",
  "growth-marketing",
  "seo",
  "content",
  "social",
  "graphic-design",
  "web",
  "personal-branding",
  "email",
  "insta-shoot",
] as const

export function generateStaticParams() {
  return services.map((service) => ({ service }))
}

interface PageProps {
  params: Promise<{ service: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service } = await params
  const slug = `/services/digital-marketing/${service}` as PageSlug
  if (!(slug in pageMetaBySlug)) return {}
  return metadataFor(slug)
}

export default async function DigitalServicePage({ params }: PageProps) {
  const { service } = await params
  if (!services.includes(service as (typeof services)[number])) notFound()
  return <DigitalServiceDetail service={service} />
}
