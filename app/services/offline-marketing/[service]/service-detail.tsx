import { notFound } from "next/navigation"

import { ServiceDetailView } from "@/components/services/service-detail-view"
import { offlineServiceCopy } from "@/constants/services/offline"

export function OfflineServiceDetail({ service }: { service: string }) {
  const data = offlineServiceCopy[service]

  if (!data) {
    notFound()
  }

  const related = Object.keys(offlineServiceCopy)
    .filter((key) => key !== service)
    .slice(0, 2)
    .map((key) => ({
      slug: key,
      title: offlineServiceCopy[key].shortTitle,
      description: offlineServiceCopy[key].description,
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
      categoryLabel="Offline Marketing"
      categoryHref="/services/offline-marketing"
      relatedBasePath="/services/offline-marketing"
    />
  )
}
