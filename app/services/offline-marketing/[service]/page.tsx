import { OfflineServiceDetail } from "./service-detail"

export function generateStaticParams() {
  return [
    "mall-activations",
    "residential-activations",
    "theatre-marketing",
    "campus-activations",
    "corporate-events",
    "festival-marketing",
    "popup-stores",
    "influencer-campaigns",
    "metro-branding",
  ].map((service) => ({ service }))
}

interface PageProps {
  params: Promise<{ service: string }>
}

export default async function OfflineServicePage({ params }: PageProps) {
  const { service } = await params
  return <OfflineServiceDetail service={service} />
}
