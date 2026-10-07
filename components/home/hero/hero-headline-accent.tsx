"use client"

import { useRef } from "react"

import { useCyclingTypewriter } from "@/hooks/use-cycling-typewriter"

type HeroHeadlineAccentProps = {
  accents: readonly string[]
}

export function HeroHeadlineAccent({ accents }: HeroHeadlineAccentProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const longest = accents.reduce(
    (best, item) => (item.length > best.length ? item : best),
    accents[0] ?? ""
  )

  useCyclingTypewriter(textRef, { items: accents, holdSeconds: 3 })

  return (
    <span className="relative mt-1 block w-fit max-w-full">
      {/* Reserve width/height of the longest accent so the underline stays one clean line */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>
      <span
        ref={textRef}
        className="absolute inset-0 whitespace-nowrap underline decoration-brand-yellow decoration-[0.12em] underline-offset-[0.14em]"
      />
    </span>
  )
}
