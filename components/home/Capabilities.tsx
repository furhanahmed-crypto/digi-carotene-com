"use client"

import * as React from "react"
import Link from "next/link"
import { useLenis } from "lenis/react"

import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"

const HEADER_OFFSET = 112

type PillarId = (typeof homeContent.capabilities.pillars)[number]["id"]

export function Capabilities() {
  const { capabilities } = homeContent
  const pillars = capabilities.pillars
  const [activeId, setActiveId] = React.useState<PillarId>(pillars[0].id)
  const lenis = useLenis()
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({})

  React.useEffect(() => {
    const nodes = pillars
      .map((pillar) => sectionRefs.current[pillar.id])
      .filter((node): node is HTMLElement => Boolean(node))

    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )

        const next = visible[0]?.target.getAttribute("data-pillar-id")
        if (next && pillars.some((pillar) => pillar.id === next)) {
          setActiveId(next as PillarId)
        }
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -45% 0px`,
        threshold: [0.15, 0.35, 0.6],
      }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [pillars])

  const scrollToPillar = (id: string) => {
    const target = sectionRefs.current[id]
    if (!target) return

    setActiveId(id)

    if (lenis) {
      lenis.scrollTo(target, { offset: -HEADER_OFFSET, duration: 1 })
      return
    }

    const top =
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section id="services" className="border-t border-border py-[72px] lg:py-[140px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.headline}
            body={capabilities.body}
          />
        </Reveal>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          <nav
            aria-label="Service pillars"
            className="border-border bg-background/90 sticky top-[80px] z-20 -mx-5 mb-8 border-y px-5 backdrop-blur-md md:-mx-8 md:px-8 lg:top-[85px] lg:col-span-4 lg:mx-0 lg:mb-0 lg:border-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none xl:col-span-3"
          >
            <div className="flex gap-2 overflow-x-auto py-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:py-0">
              {pillars.map((pillar) => {
                const isActive = activeId === pillar.id
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => scrollToPillar(pillar.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative shrink-0 border border-transparent px-4 py-3 text-left text-[12px] font-medium tracking-[0.08em] uppercase transition-colors lg:w-full lg:border-border lg:bg-secondary lg:px-5 lg:py-4 lg:text-[13px] lg:tracking-[0.12em]",
                      isActive
                        ? "border-carotene/30 bg-secondary text-foreground lg:border-border lg:bg-muted"
                        : "text-muted-foreground hover:text-foreground lg:hover:bg-muted/60"
                    )}
                  >
                    <span
                      className={cn(
                        "bg-carotene absolute top-1.5 bottom-1.5 left-0 w-1 transition-opacity lg:top-0 lg:bottom-0",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                      aria-hidden="true"
                    />
                    <span className="block">
                      {pillar.number} · {pillar.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </nav>

          <div className="space-y-16 lg:col-span-8 lg:space-y-24 xl:col-span-9">
            {pillars.map((pillar) => (
              <article
                key={pillar.id}
                id={pillar.id}
                data-pillar-id={pillar.id}
                ref={(node) => {
                  sectionRefs.current[pillar.id] = node
                }}
                className="relative scroll-mt-[120px]"
              >
                <div className="sticky top-[148px] z-10 -mx-1 bg-background/95 py-3 backdrop-blur-md lg:top-[70px] lg:mx-0">
                  <SectionMark>{pillar.title}</SectionMark>
                </div>
                <p className="mt-6 max-w-2xl text-base leading-[1.6] text-muted-foreground md:text-lg">
                  {pillar.summary}
                </p>

                <ul className="mt-8 border-t border-border">
                  {pillar.items.map((item, index) => (
                    <li
                      key={item.label}
                      className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-8 md:py-8"
                    >
                      <div className="md:col-span-4">
                        <p className="text-carotene text-[12px] font-medium tracking-[0.08em] uppercase">
                          {pillar.number}.{String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-[13px] font-medium tracking-[0.03em] text-foreground uppercase md:text-sm">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-base leading-[1.6] text-muted-foreground md:col-span-8">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <Link
            href="/services/digital-marketing"
            className="link-underline text-[13px] font-medium tracking-[0.03em] uppercase"
          >
            All services
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
