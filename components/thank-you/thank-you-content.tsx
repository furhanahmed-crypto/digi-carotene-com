"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { PageHeader } from "@/components/shared/page-header"
import { SectionLayout } from "@/components/shared/section-layout"
import { pageCreamDecor } from "@/components/shared/page-decors"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"
import { AUDIT_REPLY_DAYS } from "@/constants/growth-audit/options"
import { siteContact } from "@/constants/site/contact"

export function ThankYouContent() {
  const params = useSearchParams()
  const name = params.get("name")?.trim() || "there"
  const service = params.get("service")?.trim() || undefined
  const fromContact = params.get("source") === "contact"
  const fromAudit = params.get("source") === "growth-audit"
  const business = params.get("business")?.trim() || undefined
  const links = params.get("links")?.trim() || "channels"
  const viaWhatsApp = params.get("channel") !== "email"

  if (fromAudit) {
    const whatsappText = encodeURIComponent(
      `Hi Digi Carotene, I just requested a free growth audit for ${business || "my business"}.`
    )
    const whatsappHref = `https://wa.me/${siteContact.whatsappE164}?text=${whatsappText}`

    return (
      <div className="min-h-svh">
        <PageHeader
          title={`Thanks, ${name}! Your audit request is in.`}
          description={`Our team will review your ${links} and send your free growth audit within ${AUDIT_REPLY_DAYS} by ${viaWhatsApp ? "WhatsApp" : "email"}.`}
          mark="Thank you"
          adornment={
            <CheckCircle2
              className="size-8 text-emerald-600"
              aria-hidden
            />
          }
          actions={
            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
              >
                Chat on WhatsApp now
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/services/" />}
                size="lg"
                variant="outline"
                className="border-border bg-card/80 text-foreground hover:border-foreground hover:bg-card"
              >
                Explore our services
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/" />}
                size="lg"
                variant="ghost"
              >
                Close
              </Button>
            </div>
          }
        />

        <SectionLayout tone="cream" decor={pageCreamDecor}>
          <SectionMark>What happens next</SectionMark>
          <ol className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <li>
              <span className="font-medium text-foreground">1. Review —</span>{" "}
              We look at the links you shared and how they connect to your goal.
            </li>
            <li>
              <span className="font-medium text-foreground">2. Audit —</span> You
              get the three fastest wins within {AUDIT_REPLY_DAYS}
              {business ? ` for ${business}` : ""}.
            </li>
            <li>
              <span className="font-medium text-foreground">3. Talk —</span> Prefer
              to move sooner? WhatsApp us at {siteContact.whatsappDisplay}.
            </li>
          </ol>
        </SectionLayout>
      </div>
    )
  }

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
              render={<Link href="/services/" />}
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
