"use client"

import { useRef } from "react"

import { useCyclingTypewriter } from "@/hooks/use-cycling-typewriter"

type HeroHeadlineAccentProps = {
  accents: readonly string[]
}

export function HeroHeadlineAccent({ accents }: HeroHeadlineAccentProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  useCyclingTypewriter(textRef, { items: accents, holdSeconds: 3 })

  return (
    <span className="mt-1 block min-h-[2.2em]">
      <span
        ref={textRef}
        className="underline decoration-brand-yellow decoration-[0.12em] underline-offset-[0.14em]"
      />
    </span>
  )
}
