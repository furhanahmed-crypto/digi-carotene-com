import { TargetArrowMotif } from "@/components/decor/motifs"
import { OpenEnquiryButton } from "@/components/enquiry/open-enquiry-button"
import { Reveal } from "@/components/motion/reveal"
import { pageCreamDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

type ServiceOverviewProps = {
  name: string
  whatIs: string
}

/** Cream editorial band — homepage sticky-aside language for “what is this”. */
export function ServiceOverview({ name, whatIs }: ServiceOverviewProps) {
  return (
    <SectionLayout tone="cream" decor={pageCreamDecor}>
      <Reveal>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionMark
              data-reveal="eyebrow"
              adornment={<TargetArrowMotif />}
            >
              Overview
            </SectionMark>
            <p
              data-reveal="text"
              className="mt-5 text-[13px] font-medium tracking-label text-muted-foreground uppercase"
            >
              What is {name}?
            </p>
            <h2
              data-reveal="heading"
              className="mt-3 max-w-md font-display text-[32px] leading-display font-medium tracking-display md:text-[44px]"
            >
              {name}, built for outcomes.
            </h2>
            <div data-reveal="cta" className="mt-8">
              <OpenEnquiryButton
                serviceName={name}
                className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
              />
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div
              data-reveal="card"
              className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm backdrop-blur-[1px] md:p-8 dark:bg-card"
            >
              <p className="text-base leading-prose text-muted-foreground md:text-lg">
                {whatIs}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
