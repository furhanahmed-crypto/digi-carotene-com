import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageCreamDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for getting in touch. A Digi Carotene strategist will reply within one working day.",
  robots: { index: false, follow: false },
}

type ThankYouPageProps = {
  searchParams: Promise<{
    name?: string
    service?: string
    source?: string
  }>
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams
  const name = params.name?.trim() || "there"
  const service = params.service?.trim()
  const fromContact = params.source === "contact"

  const headline = fromContact
    ? `Thanks for reaching out, ${name}.`
    : `Thanks for your enquiry, ${name}.`

  const body = service
    ? `We've received your message about ${service}. A strategist will review it and get back within one working day with honest next steps.`
    : "We've received your message. A strategist will review it and get back within one working day with honest next steps."

  return (
    <div className="min-h-svh">
      <PageHeader
        title={headline}
        description={body}
        mark="Thank you"
        actions={
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/" />}
              size="lg"
              className="bg-ink text-paper hover:bg-ink/90"
            >
              Back to home
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/services" />}
              size="lg"
              variant="outline"
              className="border-border bg-card/80 text-foreground hover:border-foreground hover:bg-card"
            >
              Browse services
            </Button>
          </div>
        }
      />

      <SectionLayout tone="cream" decor={pageCreamDecor}>
        <SectionMark>What happens next</SectionMark>
        <ol className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <li>
            <span className="font-medium text-foreground">1. Review —</span> We
            look at your business, goals and the service you selected.
          </li>
          <li>
            <span className="font-medium text-foreground">2. Reply —</span>{" "}
            Expect a clear response within one working day — not a hard sell.
          </li>
          <li>
            <span className="font-medium text-foreground">3. Plan —</span> If we
            are a fit, we outline the first 90 days and the metrics that prove
            it.
          </li>
        </ol>
      </SectionLayout>
    </div>
  )
}
