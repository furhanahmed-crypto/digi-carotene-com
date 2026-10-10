import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  OutlineSection,
  PlaceholderBlock,
} from "@/components/inner/outline-section"
import { Reveal } from "@/components/motion/reveal"
import { pageServicesDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { PageCta } from "@/components/shared/page-cta"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { contactHref } from "@/constants/home/navigation"
import { bannerCtaPrimaryClassName } from "@/constants/ui/banner-cta"
import {
  hubGroups,
  hubPackages,
  quizQuestions,
} from "@/constants/inner/services-hub"
import { metadataFor } from "@/lib/seo/page-meta"
import { cn } from "@/lib/utils"

export const metadata: Metadata = metadataFor("/services")

const groupAccents = [
  "border-t-brand-blue",
  "border-t-brand-green",
  "border-t-brand-purple",
  "border-t-brand-red",
] as const

export default function ServicesHubPage() {
  return (
    <div className="min-h-svh">
      <PageHeader
        title="Digital Marketing, Offline Activation and PR Services in Hyderabad"
        description="Everything a brand needs to be found, chosen and remembered — planned by one team, executed in-house, reported in leads."
        mark="Services"
        actions={
          <Button
            nativeButton={false}
            render={<Link href={contactHref} />}
            size="lg"
            className={bannerCtaPrimaryClassName}
          >
            Get a Free Growth Audit
            <ArrowRight className="size-4" />
          </Button>
        }
      />

      <SectionLayout tone="white" decor={pageServicesDecor}>
        <Reveal>
          <SectionMark data-reveal="eyebrow">What we do</SectionMark>
          <div data-reveal-group className="mt-10 grid gap-5 md:grid-cols-2">
            {hubGroups.map((group, index) => (
              <article
                key={group.title}
                data-reveal="card"
                className={cn(
                  "flex h-full flex-col rounded-2xl border border-t-4 border-border bg-card p-6 md:p-8",
                  groupAccents[index % groupAccents.length]
                )}
              >
                <p className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-title font-medium md:text-[28px]">
                  {group.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {group.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-carotene/60 hover:bg-brand-yellow/20"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={group.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline decoration-brand-yellow decoration-2 underline-offset-4"
                >
                  {group.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </SectionLayout>

      <OutlineSection
        tone="cream"
        mark="Not sure?"
        eyebrow="Three questions"
        title="Not Sure Where to Start?"
        body="Answer three questions and we recommend a package, then open the contact form pre-filled."
      >
        <div data-reveal-group className="grid gap-4 sm:grid-cols-3">
          {quizQuestions.map((question, index) => (
            <article
              key={question}
              data-reveal="card"
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs font-medium tracking-label text-muted-foreground uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium">
                {question}
              </h3>
            </article>
          ))}
        </div>
        <PlaceholderBlock data-reveal="text" className="mt-6">
          Answer the three questions above, then use Get a Proposal — we will
          recommend a starting package on the discovery call.
        </PlaceholderBlock>
      </OutlineSection>

      <OutlineSection
        tone="white"
        mark="Packages"
        eyebrow="Pricing"
        title="Packages"
        body="Scope and pricing are confirmed after a free audit. Ad spend is separate."
      >
        <div data-reveal-group className="grid gap-5 md:grid-cols-3">
          {hubPackages.map((pkg) => (
            <article
              key={pkg.title}
              data-reveal="card"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-2xl leading-title font-medium">
                {pkg.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {pkg.audience}
              </p>
              <p className="mt-6 font-display text-xl font-medium">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Scope is fixed after a free audit so you know exactly what is
                included before work starts.
              </p>
              <Button
                nativeButton={false}
                render={<Link href={contactHref} />}
                className="mt-6 self-start bg-brand-yellow text-ink hover:bg-brand-yellow/90"
              >
                Get a Proposal
                <ArrowRight className="size-4" />
              </Button>
            </article>
          ))}
        </div>
      </OutlineSection>

      <PageCta
        band
        mark="Next step"
        title="Tell us where growth is stuck and we will show you the fastest wins."
        label="Get a Free Growth Audit"
        href={contactHref}
      />
    </div>
  )
}
