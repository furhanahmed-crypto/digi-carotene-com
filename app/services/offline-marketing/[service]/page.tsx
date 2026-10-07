import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { metadataFor, pageMetaBySlug, type PageSlug } from "@/lib/seo/page-meta"

import { OfflineServiceDetail } from "./service-detail"

const services = [
  "mall-activations",
  "residential-activations",
  "theatre-marketing",
  "campus-activations",
  "corporate-events",
  "festival-marketing",
  "popup-stores",
  "influencer-campaigns",
  "metro-branding",
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
  const slug = `/services/offline-marketing/${service}` as PageSlug
  if (!(slug in pageMetaBySlug)) return {}
  return metadataFor(slug)
}

export default async function OfflineServicePage({ params }: PageProps) {
  const { service } = await params
  if (!services.includes(service as (typeof services)[number])) notFound()
  return <OfflineServiceDetail service={service} />
}
