import { notFound } from "next/navigation"

import { ServiceDetailView } from "@/components/services/service-detail-view"
import { digitalServiceCopy } from "@/constants/services/digital"

export function DigitalServiceDetail({ service }: { service: string }) {
  const data = digitalServiceCopy[service]

  if (!data) {
    notFound()
  }

  const related = Object.keys(digitalServiceCopy)
    .filter((key) => key !== service)
    .slice(0, 2)
    .map((key) => ({
      slug: key,
      title: digitalServiceCopy[key].shortTitle,
      description: digitalServiceCopy[key].description,
    }))

  return (
    <ServiceDetailView
      data={{
        name: data.shortTitle,
        title: data.title,
        description: data.description,
        whatIs: data.whatIs,
        approach: data.approach,
        deliverables: data.deliverables,
        effectiveFor: data.effectiveFor,
        faqs: data.faqs,
      }}
      related={related}
      categoryLabel="Digital Marketing"
      categoryHref="/services/digital-marketing"
      relatedBasePath="/services/digital-marketing"
    />
  )
}
