"use client"

import * as React from "react"

import { homeContent } from "@/lib/home-content"
import { useIndustryCardStack } from "@/hooks/use-industry-card-stack"

import { IndustryStackCard } from "./industry-stack-card"

export function IndustryCardStack() {
  const { items } = homeContent.industries
  const sectionRef = React.useRef<HTMLElement>(null)
  const cardRefs = React.useRef<(HTMLElement | null)[]>([])

  useIndustryCardStack(sectionRef, cardRefs)

  return (
    <section
      ref={sectionRef}
      className="industry-card-stack relative -mt-2 h-svh w-full overflow-hidden bg-secondary [perspective:1000px]"
      aria-label="Industries we work with"
    >
      {items.map((item, index) => (
        <IndustryStackCard
          key={item.id}
          ref={(node) => {
            cardRefs.current[index] = node
          }}
          index={index}
          title={item.title}
          body={item.body}
          detail={item.detail}
          imageLabel={`${item.title} — image to confirm`}
          zIndex={items.length - index}
        />
      ))}
    </section>
  )
}
