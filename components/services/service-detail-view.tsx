import { MegaphoneMotif } from "@/components/decor/motifs"
import { ConversationActions } from "@/components/enquiry/conversation-actions"
import { ServiceApproach } from "@/components/services/approach/service-approach"
import { ServiceAudiences } from "@/components/services/audiences/service-audiences"
import { ServiceCta } from "@/components/services/cta/service-cta"
import { ServiceDeliverables } from "@/components/services/deliverables/service-deliverables"
import { ServiceFaqSection } from "@/components/services/faq/service-faq"
import { ServiceOverview } from "@/components/services/overview/service-overview"
import { RelatedServices } from "@/components/services/related/related-services"
import { PageHeader } from "@/components/shared/page-header"
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
  relatedBasePath: string
}

/**
 * Service detail page — same band rhythm & section patterns as the homepage
 * (yellow hero → cream/white cards → framework steps → FAQ → yellow CTA).
 */
export function ServiceDetailView({
  data,
  related,
  relatedBasePath,
}: ServiceDetailViewProps) {
  return (
    <main className="relative flex min-h-svh flex-col">
      <PageHeader
        title={data.title}
        description={data.description}
        mark={data.name}
        adornment={<MegaphoneMotif />}
        actions={<ConversationActions serviceName={data.name} />}
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
