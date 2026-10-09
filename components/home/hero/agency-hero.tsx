import { ArrowRight } from "lucide-react"

import { OpenGrowthAuditButton } from "@/components/growth-audit/open-growth-audit-button"
import { homeSections } from "@/constants/home/sections"
import { whatsappHref } from "@/constants/home/navigation"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { Button } from "@/components/ui/button"
import { heroDecor } from "@/components/home/section-decors"
import { HeroHeadlineAccent } from "./hero-headline-accent"
import { HeroMosaic } from "./hero-mosaic"

export function AgencyHero() {
  const { hero } = homeSections

  return (
    <SectionLayout tone="white" size="hero" decor={heroDecor}>
      <Reveal mode="load">
        <div className="grid min-w-0 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <div
              data-reveal="eyebrow"
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/90 py-1.5 pr-3 pl-2 shadow-sm backdrop-blur-sm min-[360px]:gap-3 min-[360px]:pr-4"
            >
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-yellow/70 motion-reduce:animate-none" />
                <span className="relative size-2.5 rounded-full bg-brand-yellow" />
              </span>
              <p className="truncate text-[10px] font-semibold tracking-loose text-foreground uppercase min-[360px]:text-xs md:text-[13px]">
                {hero.eyebrow}
              </p>
            </div>

            {/* Exactly one H1 — keyword from v2 SEO rewrite. Rotating lines are spans below. */}
            <h1
              data-reveal="heading"
              className="mt-4 font-display text-[26px] leading-display-sm font-medium tracking-display break-words min-[360px]:text-[30px] sm:text-[32px] md:mt-5 md:text-5xl lg:text-[56px]"
            >
              {hero.headline}
            </h1>

            <p
              data-reveal="text"
              className="mt-3 min-w-0 font-display text-lg leading-snug text-foreground min-[360px]:text-[20px] sm:text-[22px] md:mt-4 md:text-[28px]"
              aria-live="polite"
            >
              <HeroHeadlineAccent accents={hero.rotatingLines} />
            </p>

            <p
              data-reveal="text"
              className="mt-4 max-w-xl text-sm text-muted-foreground min-[360px]:text-base md:mt-5 md:text-lg"
            >
              {hero.body}
            </p>

            <div data-reveal="cta" className="mt-6 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
              <OpenGrowthAuditButton
                label={hero.primaryCta.label}
                ctaLocation="home_hero"
                className="w-full min-[400px]:w-auto"
              />
              <Button
                nativeButton={false}
                render={<a href={whatsappHref} />}
                size="lg"
                variant="outline"
                className="w-full min-[400px]:w-auto"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div data-reveal="image" className="min-w-0 lg:col-span-5">
            <HeroMosaic images={hero.mosaic} startDelay={1.8} />
          </div>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
