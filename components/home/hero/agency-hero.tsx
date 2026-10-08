import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { contactHref, whatsappHref } from "@/constants/home/navigation"
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
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div
              data-reveal="eyebrow"
              className="inline-flex max-w-full items-center gap-3 rounded-full border border-border bg-card/90 py-1.5 pr-4 pl-2 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-yellow/70 motion-reduce:animate-none" />
                <span className="relative size-2.5 rounded-full bg-brand-yellow" />
              </span>
              <p className="truncate text-[12px] font-semibold tracking-[0.14em] text-foreground uppercase md:text-[13px]">
                {hero.eyebrow}
              </p>
            </div>

            {/* Exactly one H1 — keyword from v2 SEO rewrite. Rotating lines are spans below. */}
            <h1
              data-reveal="heading"
              className="mt-5 font-display text-[32px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[48px] lg:text-[56px]"
            >
              {hero.headline}
            </h1>

            <p
              data-reveal="text"
              className="mt-4 font-display text-[22px] leading-snug text-foreground md:text-[28px]"
              aria-live="polite"
            >
              <HeroHeadlineAccent accents={hero.rotatingLines} />
            </p>

            <p
              data-reveal="text"
              className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
            >
              {hero.body}
            </p>

            <div data-reveal="cta" className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href={hero.primaryCta.href || contactHref} />}
                size="lg"
              >
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href={whatsappHref} />}
                size="lg"
                variant="outline"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div data-reveal="image" className="lg:col-span-5">
            <HeroMosaic images={hero.mosaic} startDelay={1.8} />
          </div>
        </div>
      </Reveal>
    </SectionLayout>
  )
}
