"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import Fade from "embla-carousel-fade"
import useEmblaCarousel from "embla-carousel-react"

import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { homeContent } from "@/lib/home-content"

import { HeroCarouselControls } from "./hero/hero-carousel-controls"

export function Hero() {
  const { hero } = homeContent
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade(),
  ])

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    const interval = window.setInterval(() => emblaApi.scrollNext(), 3000)

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      window.clearInterval(interval)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {hero.slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%] h-full"
            >
              <Image
                src={slide.imageSrc}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(226,87,31,0.14),transparent_38%)]" />
            </div>
          ))}
        </div>
      </div>

      <Container className="relative z-10 grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <div className="glass-panel p-5 md:p-7">
            <p className="text-[13px] font-medium tracking-caption text-ink-muted uppercase md:text-sm">
              {hero.eyebrow}
            </p>
            <div className="relative mt-5 min-h-34 md:min-h-56">
              {hero.slides.map((slide, index) => (
                <h1
                  key={slide.id}
                  className={cn(
                    "font-display absolute inset-0 text-[40px] leading-none font-medium tracking-display transition-all duration-500 md:text-7xl",
                    index === selectedIndex
                      ? "translate-y-0 opacity-100 blur-0"
                      : "pointer-events-none translate-y-2 opacity-0 blur-sm"
                  )}
                >
                  {slide.headlineBefore}
                  <span className="underline decoration-carotene decoration-2 underline-offset-[0.12em] md:decoration-[3px]">
                    {slide.headlineAccent}
                  </span>
                </h1>
              ))}
            </div>
            <p className="mt-7 max-w-2xl text-base leading-body text-muted-foreground md:text-lg">
              {hero.body}
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              render={<Link href={hero.primaryCta.href} />}
              size="lg"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={hero.secondaryCta.href} />}
              variant="outline"
              size="lg"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <HeroCarouselControls
            slideCount={hero.slides.length}
            selectedIndex={selectedIndex}
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
            onDotClick={(index) => emblaApi?.scrollTo(index)}
          />
        </div>

        <aside className="glass-panel relative p-6 lg:col-span-4 lg:p-8">
          <span
            className="absolute top-0 left-0 h-full w-1 bg-carotene"
            aria-hidden="true"
          />
          <SectionMark>The name</SectionMark>
          <p className="mt-5 font-display text-[26px] leading-title font-medium">
            Carotene is a pigment.
          </p>
          <p className="mt-4 text-base leading-body text-muted-foreground">
            Warm, concentrated, used with intent — not as decoration. That is
            also how the work should feel.
          </p>
          <div className="mt-8 h-1.5 w-16 bg-carotene" aria-hidden="true" />
        </aside>
      </Container>
    </section>
  )
}
