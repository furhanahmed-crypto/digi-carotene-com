"use client"

import {
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react"

import { gsap, useGSAP } from "@/lib/gsap"
import {
  buildRevealTimeline,
  revealImmediately,
} from "@/lib/motion/build-reveal-timeline"
import { cn } from "@/lib/utils"

type RevealProps<T extends ElementType = "div"> = {
  children: ReactNode
  className?: string
  as?: T
  /** scroll = ScrollTrigger once; load = hero/above-fold after fonts.ready */
  mode?: "scroll" | "load"
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">

const LOAD_DELAY = 0.2

export function Reveal<T extends ElementType = "div">({
  children,
  className,
  as,
  mode = "scroll",
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType
  const rootRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: reduce)", () => {
        revealImmediately(root)
      })

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let timeline: gsap.core.Timeline | null = null
        let cancelled = false

        const play = () => {
          if (cancelled || !rootRef.current) return
          timeline?.scrollTrigger?.kill()
          timeline?.kill()

          if (mode === "scroll") {
            timeline = buildRevealTimeline(rootRef.current, {
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top 80%",
                once: true,
                toggleActions: "play none none none",
              },
            })
          } else {
            timeline = buildRevealTimeline(rootRef.current)
            timeline.delay(LOAD_DELAY).play(0)
          }
        }

        if (mode === "load") {
          void document.fonts.ready.then(() => {
            if (!cancelled) play()
          })
        } else {
          play()
        }

        return () => {
          cancelled = true
          timeline?.scrollTrigger?.kill()
          timeline?.kill()
        }
      })

      return () => {
        mm.revert()
      }
    },
    { scope: rootRef, dependencies: [mode] }
  )

  return (
    <Tag
      ref={rootRef as never}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
