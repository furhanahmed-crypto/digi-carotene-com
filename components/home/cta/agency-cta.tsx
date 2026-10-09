import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ctaDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"

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
          className="mt-6 max-w-3xl font-display text-[36px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[52px]"
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
          <Button
            nativeButton={false}
            render={<Link href={cta.primary.href} />}
            size="lg"
            className="bg-ink text-paper hover:bg-ink/90 hover:text-paper"
          >
            {cta.primary.label}
            <ArrowRight className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={cta.secondary.href} />}
            size="lg"
            variant="outline"
            className="border-border bg-card/80 text-foreground hover:border-foreground hover:bg-card dark:bg-transparent"
          >
            {cta.secondary.label}
          </Button>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
