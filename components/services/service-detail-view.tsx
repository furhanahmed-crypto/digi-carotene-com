import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MegaphoneMotif } from "@/components/decor/motifs"
import { ServiceApproach } from "@/components/services/approach/service-approach"
import { ServiceAudiences } from "@/components/services/audiences/service-audiences"
import { ServiceCta } from "@/components/services/cta/service-cta"
import { ServiceDeliverables } from "@/components/services/deliverables/service-deliverables"
import { ServiceFaqSection } from "@/components/services/faq/service-faq"
import { ServiceOverview } from "@/components/services/overview/service-overview"
import { RelatedServices } from "@/components/services/related/related-services"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref, whatsappHref } from "@/constants/home/navigation"
import type { RelatedService, ServiceDetailData } from "@/types/services"

export type {
  RelatedService,
  ServiceApproachStep,
  ServiceDetailData,
  ServiceFaq,
} from "@/types/services"

type ServiceDetailViewProps = {
  data: ServiceDetailData
  related: RelatedService[]
  categoryLabel: string
  categoryHref: string
  relatedBasePath: string
}

/**
 * Service detail page — same band rhythm & section patterns as the homepage
 * (yellow hero → cream/white cards → framework steps → FAQ → yellow CTA).
 */
export function ServiceDetailView({
  data,
  related,
  categoryLabel,
  categoryHref,
  relatedBasePath,
}: ServiceDetailViewProps) {
  return (
    <main className="relative flex min-h-svh flex-col">
      <PageHeader
        title={data.title}
        description={data.description}
        breadcrumbs={[
          { label: "Services", href: categoryHref },
          { label: categoryLabel, href: categoryHref },
          { label: data.name },
        ]}
        mark={data.name}
        adornment={<MegaphoneMotif />}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={contactHref} />}
              size="lg"
              className="bg-ink text-paper hover:bg-ink/90 hover:text-paper"
            >
              Start a conversation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={
                <a href={whatsappHref} target="_blank" rel="noreferrer" />
              }
              size="lg"
              variant="outline"
              className="border-ink/25 bg-white/50 text-ink hover:border-ink hover:bg-white dark:border-border dark:bg-transparent dark:text-foreground"
            >
              WhatsApp us
            </Button>
          </div>
        }
      />

      <ServiceOverview name={data.name} whatIs={data.whatIs} />
      <ServiceDeliverables items={data.deliverables} />
      <ServiceApproach steps={data.approach} />
      <ServiceAudiences items={data.effectiveFor} />
      <ServiceFaqSection name={data.name} faqs={data.faqs} />
      <RelatedServices items={related} basePath={relatedBasePath} />
      <ServiceCta name={data.name} />
    </main>
  )
}
