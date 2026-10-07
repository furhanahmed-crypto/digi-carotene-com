"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { useCyclingTypewriter } from "@/hooks/use-cycling-typewriter"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP)

type CyclingTypeTextProps = {
  items: readonly string[]
  className?: string
  caretClassName?: string
  holdSeconds?: number
  showCaret?: boolean
}

export function CyclingTypeText({
  items,
  className,
  caretClassName,
  holdSeconds = 3,
  showCaret = false,
}: CyclingTypeTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)

  useCyclingTypewriter(textRef, { items, holdSeconds })

  useGSAP(
    () => {
      if (!showCaret || !caretRef.current) return

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (reducedMotion) return

      gsap.to(caretRef.current, {
        opacity: 0,
        duration: 0.55,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    },
    { dependencies: [showCaret] }
  )

  return (
    <span className={cn("inline-block min-w-0", className)} aria-live="polite">
      <span ref={textRef} />
      {showCaret ? (
        <span
          ref={caretRef}
          className={cn("ml-0.5 inline-block translate-y-px", caretClassName)}
          aria-hidden="true"
        >
          |
        </span>
      ) : null}
    </span>
  )
}
