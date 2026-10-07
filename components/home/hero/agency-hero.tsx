import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Search, Sparkles } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"
import { HeroHeadlineAccent } from "./hero-headline-accent"

const capabilityIcons = [Search, Bot, Sparkles] as const

export function AgencyHero() {
  const { hero } = homeSections

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,196,0,0.08),transparent_36%)]"
        aria-hidden="true"
      />

      <Container>
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
                className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
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

            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {hero.capabilities.map(({ label, detail }, index) => {
                const Icon = capabilityIcons[index] ?? Search
                return (
                  <li key={label}>
                    <div className="group rounded-xl border border-brand-yellow/25 bg-brand-yellow/[0.06] px-3 py-2.5 transition-colors hover:border-brand-yellow/45 hover:bg-brand-yellow/10">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-yellow/20 text-ink transition-colors group-hover:bg-brand-yellow">
                          <Icon className="size-3.5" aria-hidden="true" />
                        </span>
                        <p className="text-[13px] font-semibold tracking-[0.08em] text-foreground uppercase">
                          {label}
                        </p>
                      </div>
                      <p className="mt-1.5 pl-9 text-[12px] leading-none text-muted-foreground">
                        {detail}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={80}>
            <div className="grid grid-cols-3 gap-2.5 md:gap-3">
              {hero.mosaic.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 30vw, 140px"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
