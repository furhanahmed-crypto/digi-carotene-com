"use client"

import { useEffect, type RefObject } from "react"
import { gsap } from "@/lib/gsap"

type UseCyclingTypewriterOptions = {
  items: readonly string[]
  holdSeconds?: number
  enabled?: boolean
}

export function useCyclingTypewriter(
  elementRef: RefObject<HTMLElement | null>,
  { items, holdSeconds = 3, enabled = true }: UseCyclingTypewriterOptions
) {
  const itemsKey = items.join("\u0001")

  useEffect(() => {
    const el = elementRef.current
    const list = itemsKey.length > 0 ? itemsKey.split("\u0001") : []
    if (!el || !enabled || list.length === 0) return

    let cancelled = false
    let index = 0
    let timeline: gsap.core.Timeline | null = null

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reducedMotion) {
      el.textContent = list[0]
      const intervalId = window.setInterval(() => {
        index = (index + 1) % list.length
        el.textContent = list[index]
      }, holdSeconds * 1000)
      return () => window.clearInterval(intervalId)
    }

    const play = () => {
      if (cancelled) return

      const text = list[index]
      const state = { n: 0 }
      timeline?.kill()
      el.textContent = ""

      timeline = gsap.timeline({
        onComplete: () => {
          if (cancelled) return
          index = (index + 1) % list.length
          play()
        },
      })

      timeline.to(state, {
        n: text.length,
        duration: Math.max(0.85, text.length * 0.04),
        ease: "none",
        onUpdate: () => {
          if (!cancelled) {
            el.textContent = text.slice(0, Math.round(state.n))
          }
        },
      })

      timeline.to({}, { duration: holdSeconds })

      timeline.to(state, {
        n: 0,
        duration: Math.min(0.4, Math.max(0.2, text.length * 0.018)),
        ease: "none",
        onUpdate: () => {
          if (!cancelled) {
            el.textContent = text.slice(0, Math.round(state.n))
          }
        },
      })
    }

    play()

    return () => {
      cancelled = true
      timeline?.kill()
      timeline = null
    }
  }, [elementRef, enabled, holdSeconds, itemsKey])
}
