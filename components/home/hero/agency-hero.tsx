import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"

const capabilityLabels = ["SEO", "AEO", "GEO", "Performance", "PR"] as const

export function AgencyHero() {
  const { hero } = homeSections

  return (
    <section className="relative overflow-visible border-b border-transparent bg-background pt-28 pb-36 md:pt-36 md:pb-44">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,196,0,0.08),transparent_36%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="text-[13px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {hero.eyebrow}
            </p>

            <h1 className="mt-4 font-display text-[40px] leading-[1.05] font-medium tracking-[-0.02em] md:text-[64px] lg:text-[72px]">
              <span className="text-foreground">{hero.headlineBefore}</span>{" "}
              <span className="text-foreground underline decoration-brand-yellow decoration-[0.12em] underline-offset-[0.12em]">
                {hero.headlineAccent}
              </span>
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

            <p className="mt-8 text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase md:text-[13px]">
              {capabilityLabels.map((label, index) => (
                <span key={label}>
                  {index > 0 ? (
                    <span className="mx-2.5 text-border" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  {label}
                </span>
              ))}
            </p>
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
