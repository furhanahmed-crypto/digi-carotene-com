"use client"

import * as React from "react"
import Link from "next/link"
import { useLenis } from "lenis/react"

import { homeContent } from "@/lib/home-content"
import { useActivePillar } from "@/hooks/use-active-pillar"
import { useCursorFollow } from "@/hooks/use-cursor-follow"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

import { CapabilityNav } from "./capabilities/capability-nav"
import { CapabilityPillar } from "./capabilities/capability-pillar"
import { CursorFollowImage } from "@/components/shared/cursor-follow-image"

type PillarId = (typeof homeContent.capabilities.pillars)[number]["id"]

export function Capabilities() {
  const { capabilities } = homeContent
  const pillars = capabilities.pillars
  const lenis = useLenis()
  const sectionRefs = React.useRef<Record<string, HTMLElement | null>>({})
  const cursor = useCursorFollow()
  const { activeId, setActiveId, headerOffset } = useActivePillar(
    pillars,
    sectionRefs
  )

  const scrollToPillar = (id: string) => {
    const target = sectionRefs.current[id]
    if (!target) return
    setActiveId(id as PillarId)

    if (lenis) {
      lenis.scrollTo(target, { offset: -headerOffset, duration: 1 })
      return
    }

    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <section
      id="services"
      className="border-t border-border py-[72px] lg:py-[140px]"
    >
      <CursorFollowImage
        src={cursor.state.src}
        visible={cursor.state.visible}
        x={cursor.state.x}
        y={cursor.state.y}
      />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={capabilities.eyebrow}
            title={capabilities.headline}
            body={capabilities.body}
            eyebrowProps={{ "data-reveal": "eyebrow" }}
            titleProps={{ "data-reveal": "heading" }}
            bodyProps={{ "data-reveal": "text" }}
          />
        </Reveal>

        <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          <CapabilityNav
            pillars={pillars}
            activeId={activeId}
            onSelect={scrollToPillar}
          />

          <div className="space-y-16 lg:col-span-8 lg:space-y-24 xl:col-span-9">
            {pillars.map((pillar) => (
              <CapabilityPillar
                key={pillar.id}
                id={pillar.id}
                title={pillar.title}
                summary={pillar.summary}
                image={pillar.image}
                items={pillar.items}
                knowMoreLabel={capabilities.knowMore.label}
                onEnter={cursor.show}
                onMove={cursor.move}
                onLeave={cursor.hide}
                articleRef={(node) => {
                  sectionRefs.current[pillar.id] = node
                }}
              />
            ))}
          </div>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <Link
            href="/services/digital-marketing"
            data-reveal="cta"
            className="link-underline text-[13px] font-medium tracking-[0.03em] uppercase"
          >
            All services
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
