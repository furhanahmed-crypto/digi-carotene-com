import Link from "next/link"

import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { SectionHeading } from "@/components/shared/section-heading"
import { MediaFrame } from "@/components/shared/media-frame"
import { ListingCard } from "@/components/shared/listing-card"
import { PageCta } from "@/components/shared/page-cta"
import { Reveal } from "@/components/motion/reveal"
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
  /** Real service name for breadcrumbs / marks (e.g. "Content Marketing"). */
  name: string
  /** Creative H1 from the PDF. */
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
          { label: data.name },
        ]}
        mark={data.name}
      />

      <SectionLayout tone="white">
        <Reveal className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionMark data-reveal="eyebrow">Overview</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow={`What is ${data.name}?`}
              title={data.name}
              body={data.whatIs}
            />
            <div data-reveal="cta" className="mt-8">
              <Button
                nativeButton={false}
                render={<Link href={contactHref} />}
                size="lg"
                className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
              >
                Start a conversation
              </Button>
            </div>
          </div>
          <div data-reveal="image" className="lg:col-span-6">
            <MediaFrame index={0} label={data.name} />
          </div>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream">
        <Reveal>
          <SectionMark data-reveal="eyebrow">Deliverables</SectionMark>
          <SectionHeading
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
            className="mt-6"
            eyebrow="What we produce"
            title="What we deliver"
          />
          <ul data-reveal-group className="mt-10 border-t border-line">
            {data.deliverables.map((item, index) => (
              <li
                key={item}
                data-reveal="card"
                className="border-b border-line py-8 transition-colors hover:bg-white/50 md:py-10 dark:hover:bg-secondary/40"
              >
                <div className="border-carotene md:border-l-2 md:pl-6">
                  <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[21px] leading-[1.2] font-medium md:text-[26px]">
                    {item}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white">
        <Reveal>
          <SectionMark data-reveal="eyebrow">Approach</SectionMark>
          <SectionHeading
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
            className="mt-6"
            eyebrow="How we work"
            title="A four-step implementation"
          />
          <ul data-reveal-group className="mt-10 border-t border-line">
            {data.approach.map((step, index) => (
              <li
                key={step.title}
                data-reveal="card"
                className="grid gap-5 border-b border-line py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                  <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[21px] leading-[1.2] font-medium md:text-[26px]">
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
                    className="w-fit bg-brand-yellow text-ink hover:bg-brand-yellow/90"
                  >
                    Know more
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="cream">
        <Reveal>
          <SectionMark data-reveal="eyebrow">Industries</SectionMark>
          <SectionHeading
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
            className="mt-6"
            eyebrow="Where this lands"
            title="Particularly effective for"
          />
          <ul data-reveal-group className="mt-10 border-t border-line">
            {data.effectiveFor.map((industry, index) => (
              <li
                key={industry}
                data-reveal="card"
                className="border-b border-line py-8 transition-colors hover:bg-white/50 md:py-10 dark:hover:bg-secondary/40"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
                  <div className="border-carotene md:border-l-2 md:pl-6">
                    <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-[21px] leading-[1.2] font-medium md:text-[26px]">
                      {industry}
                    </h3>
                  </div>
                  <Button
                    nativeButton={false}
                    render={<Link href={contactHref} />}
                    size="sm"
                    className="w-fit bg-brand-yellow text-ink hover:bg-brand-yellow/90 md:mr-2"
                  >
                    Know more
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </SectionLayout>

      <SectionLayout tone="white">
        <Reveal>
          <SectionMark data-reveal="eyebrow">FAQ</SectionMark>
          <SectionHeading
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
            className="mt-6"
            eyebrow="Clarity"
            title="Frequently asked questions"
          />
        </Reveal>
        <Accordion className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-background shadow-[0_18px_50px_rgba(17,17,17,0.08)] dark:border-border dark:bg-card dark:shadow-none">
          {data.faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border-ink/10 px-2 transition-colors not-last:border-b hover:bg-brand-yellow/12 data-open:bg-brand-yellow/18 dark:border-border dark:hover:bg-brand-yellow/10 dark:data-open:bg-brand-yellow/14 sm:px-5"
            >
              <AccordionTrigger className="rounded-none py-5 text-left font-display text-[17px] leading-[1.3] font-medium hover:no-underline data-panel-open:text-ink md:text-[20px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionLayout>

      {related.length > 0 ? (
        <SectionLayout tone="cream">
          <Reveal>
            <SectionMark data-reveal="eyebrow">Related</SectionMark>
            <SectionHeading
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
              bodyProps={{ "data-reveal": "text" }}
              className="mt-6"
              eyebrow="Keep exploring"
              title="Related capabilities"
            />
            <div data-reveal-group className="mt-10 grid gap-5 md:grid-cols-2">
              {related.map((item, index) => (
                <div key={item.slug} data-reveal="card">
                  <ListingCard
                    href={`${relatedBasePath}/${item.slug}`}
                    index={index}
                    title={item.title}
                    body={item.description}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </SectionLayout>
      ) : null}

      <PageCta
        band
        title="Ready to put this to work?"
        label="Start a conversation"
        href={contactHref}
      />
    </div>
  )
}
