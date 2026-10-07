import Link from "next/link"
import { ArrowRight, Bot, Search, Sparkles } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/shared/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { Button } from "@/components/ui/button"
import { HeroHeadlineAccent } from "./hero-headline-accent"
import { HeroMosaic } from "./hero-mosaic"

const capabilityIcons = [Search, Bot, Sparkles] as const

export function AgencyHero() {
  const { hero } = homeSections

  return (
    <SectionLayout tone="white" size="hero">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-border bg-card/90 py-1.5 pr-4 pl-2 shadow-sm backdrop-blur-sm">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-yellow/70 motion-reduce:animate-none" />
              <span className="relative size-2.5 rounded-full bg-brand-yellow" />
            </span>
            <p className="truncate text-[12px] font-semibold tracking-[0.14em] text-foreground uppercase md:text-[13px]">
              {hero.eyebrow}
            </p>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <p className="hidden text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase sm:block">
              Hyderabad · Bangalore · Global
            </p>
          </div>

          <h1 className="mt-5 font-display text-[36px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[56px] lg:text-[64px]">
            <span className="block text-foreground">{hero.headlineBefore}</span>
            <HeroHeadlineAccent accents={hero.headlineAccents} />
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={hero.primaryCta.href} />}
              size="lg"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={hero.secondaryCta.href} />}
              size="lg"
              variant="outline"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {hero.capabilities.map(({ label, detail }, index) => {
              const Icon = capabilityIcons[index] ?? Search
              return (
                <li key={label} className="py-3.5 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className="size-4 shrink-0 text-foreground"
                      aria-hidden="true"
                    />
                    <p className="text-[13px] font-semibold tracking-[0.1em] text-foreground uppercase">
                      {label}
                    </p>
                    <span
                      className="h-px flex-1 bg-brand-yellow/70"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">
                    {detail}
                  </p>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-5" delayMs={80}>
          <HeroMosaic images={hero.mosaic} />
        </Reveal>
      </div>
    </SectionLayout>
  )
}
