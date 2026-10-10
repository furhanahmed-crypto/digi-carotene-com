import type { Metadata } from "next"

import { GrowthAuditPageForm } from "@/components/growth-audit/growth-audit-page-form"
import { MediaFrame } from "@/components/shared/media-frame"
import { pageCreamDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { AUDIT_REPLY_DAYS } from "@/constants/growth-audit/options"
import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/growth-audit")

export default function GrowthAuditPage() {
  return (
    <div className="min-h-svh">
      <SectionLayout tone="cream" size="hero" decor={pageCreamDecor}>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionMark>Free growth audit</SectionMark>
            <h1 className="mt-6 max-w-2xl font-display text-4xl leading-display-sm font-medium tracking-display md:text-[48px]">
              Get Your Free Growth Audit
            </h1>
            <p className="mt-4 max-w-xl text-base leading-body text-muted-foreground md:text-lg">
              Tell us about your business. We&apos;ll review your website, social
              channels and ads, then send you the three fastest wins — free.
              Reply within {AUDIT_REPLY_DAYS}.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background p-5 shadow-sm md:p-7">
              <GrowthAuditPageForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <MediaFrame
                label="Growth audit"
                aspect="photo"
                src="/assets/campaigns/08.webp"
              />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A strategist reviews your funnel and sends clear next steps —
                no sales theatre, just the numbers that matter.
              </p>
            </div>
          </aside>
        </div>
      </SectionLayout>
    </div>
  )
}
