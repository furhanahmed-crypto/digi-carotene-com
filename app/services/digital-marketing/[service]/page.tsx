import { DigitalServiceDetail } from "./service-detail"

export function generateStaticParams() {
  return [
    "ppc",
    "seo",
    "content",
    "social",
    "graphic-design",
    "web",
    "personal-branding",
    "email",
    "insta-shoot",
  ].map((service) => ({ service }))
}

interface PageProps {
  params: Promise<{ service: string }>
}

export default async function DigitalServicePage({ params }: PageProps) {
  const { service } = await params
  return <DigitalServiceDetail service={service} />
}
