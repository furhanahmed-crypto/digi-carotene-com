import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { ListingCard } from "@/components/shared/listing-card"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { contactHref } from "@/constants/home/navigation"

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceApproachStep = {
  title: string
  description: string
}

export type ServiceDetailData = {
  title: string
  description: string
  whatIs: string
  approach: ServiceApproachStep[]
  deliverables: string[]
  effectiveFor: string[]
  faqs: ServiceFaq[]
}

export type RelatedService = {
  slug: string
  title: string
  description: string
}

type ServiceDetailViewProps = {
  data: ServiceDetailData
  related: RelatedService[]
  categoryLabel: string
  categoryHref: string
  relatedBasePath: string
}

export function ServiceDetailView({
  data,
  related,
  categoryLabel,
  categoryHref,
  relatedBasePath,
}: ServiceDetailViewProps) {
  return (
    <div className="min-h-svh">
      <PageHeader
        title={data.title}
        description={data.description}
        breadcrumbs={[
          { label: "Services", href: categoryHref },
          { label: categoryLabel, href: categoryHref },
          { label: data.title },
        ]}
        mark="Services"
        imageIndex={1}
      />

      <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
        <Container className="space-y-16 lg:space-y-24">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionMark>Overview</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow={`What is ${data.title}?`}
                title={data.title}
                body={data.whatIs}
              />
              <div className="mt-8">
                <Button
                  nativeButton={false}
                  render={<Link href={contactHref} />}
                  size="lg"
                >
                  Start a conversation
                </Button>
              </div>
            </Reveal>
            <Reveal delayMs={40} className="lg:col-span-6">
              <MediaFrame index={0} label={data.title} />
            </Reveal>
          </div>

          <div className="border-t border-border pt-16 lg:pt-24">
            <Reveal>
              <SectionMark>Deliverables</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="What we produce"
                title="What we deliver"
              />
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {data.deliverables.map((item, index) => (
                <Reveal
                  key={item}
                  as="li"
                  delayMs={index * 40}
                  className="border-b border-line py-8 transition-colors hover:bg-secondary/40 md:py-10"
                >
                  <div className="border-carotene md:border-l-2 md:pl-6">
                    <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                      {index + 1}
                    </p>
                    <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                      {item}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-16 lg:pt-24">
            <Reveal>
              <SectionMark>Approach</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="How we work"
                title="A four-step implementation"
              />
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {data.approach.map((step, index) => (
                <Reveal
                  key={step.title}
                  as="li"
                  delayMs={index * 40}
                  className="grid gap-5 border-b border-line py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                    <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                      {index + 1}
                    </p>
                    <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 md:col-span-8">
                    <p className="text-base leading-[1.6] text-muted-foreground md:text-lg">
                      {step.description}
                    </p>
                    <Button
                      nativeButton={false}
                      render={<Link href={contactHref} />}
                      size="sm"
                      className="w-fit"
                    >
                      Know more
                    </Button>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-16 lg:pt-24">
            <Reveal>
              <SectionMark>Industries</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="Where this lands"
                title="Particularly effective for"
              />
            </Reveal>
            <ul className="mt-10 border-t border-line">
              {data.effectiveFor.map((industry, index) => (
                <Reveal
                  key={industry}
                  as="li"
                  delayMs={index * 40}
                  className="border-b border-line py-8 transition-colors hover:bg-secondary/40 md:py-10"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div className="border-carotene md:border-l-2 md:pl-6">
                      <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                        {index + 1}
                      </p>
                      <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                        {industry}
                      </h3>
                    </div>
                    <Button
                      nativeButton={false}
                      render={<Link href={contactHref} />}
                      size="sm"
                      className="w-fit md:mr-2"
                    >
                      Know more
                    </Button>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-16 lg:pt-24">
            <Reveal>
              <SectionMark>FAQ</SectionMark>
              <SectionHeading
                className="mt-6"
                eyebrow="Clarity"
                title="Frequently asked questions"
              />
            </Reveal>
            <Accordion className="mt-10 border border-line">
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-line not-last:border-b px-4"
                >
                  <AccordionTrigger className="font-display rounded-none py-5 text-left text-[18px] leading-[1.3] font-medium hover:no-underline md:text-[21px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {related.length > 0 ? (
            <div className="border-t border-border pt-16 lg:pt-24">
              <Reveal>
                <SectionMark>Related</SectionMark>
                <SectionHeading
                  className="mt-6"
                  eyebrow="Keep exploring"
                  title="Related capabilities"
                />
              </Reveal>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {related.map((item, index) => (
                  <Reveal key={item.slug} delayMs={index * 40}>
                    <ListingCard
                      href={`${relatedBasePath}/${item.slug}`}
                      index={index}
                      title={item.title}
                      body={item.description}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}

          <Reveal>
            <PageCta
              title="Ready to put this to work?"
              label="Start a conversation"
              href={contactHref}
            />
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
