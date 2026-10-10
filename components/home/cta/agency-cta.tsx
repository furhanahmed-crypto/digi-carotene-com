import { OpenGrowthAuditButton } from "@/components/growth-audit/open-growth-audit-button"
import { ctaDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function AgencyCta() {
  const { cta } = homeSections

  return (
    <SectionLayout tone="yellow" decor={ctaDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow" tone="paper">
          {cta.eyebrow}
        </SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl min-w-0 font-display text-[28px] leading-display-sm font-medium tracking-display break-words min-[360px]:text-[32px] sm:text-4xl md:text-[52px]"
        >
          {cta.headline}
        </h2>
        <p
          data-reveal="text"
          className="mt-4 max-w-2xl text-base text-ink/70 md:text-lg dark:text-muted-foreground"
        >
          {cta.body}
        </p>
        <div data-reveal="cta" className="mt-8 flex flex-wrap gap-3">
          <OpenGrowthAuditButton
            label={cta.primary.label}
            ctaLocation="home_final_cta"
            className="bg-ink text-paper hover:bg-ink/90 hover:text-paper"
          />
        </div>
      </Reveal>
    </SectionLayout>
  )
}
