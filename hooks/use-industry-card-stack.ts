"use client"

import * as React from "react"

import { gsap, ScrollTrigger } from "@/lib/gsap"

const CARD_OFFSET_Y = 25
const SCALE_STEP = 0.05
const PEEL_ROTATION = 45
const CARD_ANCHOR_Y = -42

export function useIndustryCardStack(
  sectionRef: React.RefObject<HTMLElement | null>,
  cardRefs: React.MutableRefObject<(HTMLElement | null)[]>
) {
  React.useLayoutEffect(() => {
    const section = sectionRef.current
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[]

    if (!section || cards.length === 0) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      section.style.height = "auto"
      section.style.minHeight = "auto"
      section.style.perspective = "none"

      cards.forEach((card, index) => {
        gsap.set(card, {
          position: "relative",
          top: "auto",
          left: "auto",
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotationX: 0,
          opacity: 1,
          margin: index < cards.length - 1 ? "0 auto 1.5rem" : "0 auto",
        })
      })
      return
    }

    const totalCards = cards.length
    const segmentSize = 1 / totalCards

    cards.forEach((card, index) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: CARD_ANCHOR_Y + index * CARD_OFFSET_Y,
        scale: 1 - index * SCALE_STEP,
        rotationX: 0,
        opacity: 1,
      })
    })

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * totalCards * 1.05}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress
        const activeIndex = Math.min(
          Math.floor(progress / segmentSize),
          totalCards - 1
        )
        const segmentProgress =
          (progress - activeIndex * segmentSize) / segmentSize

        cards.forEach((card, index) => {
          if (index < activeIndex) {
            gsap.set(card, {
              yPercent: -220,
              rotationX: PEEL_ROTATION,
              opacity: 0,
            })
            return
          }

          const isLastCard = activeIndex === totalCards - 1

          if (index === activeIndex) {
            if (isLastCard) {
              gsap.set(card, {
                yPercent: CARD_ANCHOR_Y,
                rotationX: 0,
                scale: 1,
                opacity: 1,
              })
              return
            }

            gsap.set(card, {
              yPercent: gsap.utils.interpolate(
                CARD_ANCHOR_Y,
                -220,
                segmentProgress
              ),
              rotationX: gsap.utils.interpolate(
                0,
                PEEL_ROTATION,
                segmentProgress
              ),
              scale: 1,
              opacity: 1,
            })
            return
          }

          const behindIndex = index - activeIndex
          gsap.set(card, {
            yPercent:
              (behindIndex - segmentProgress) * CARD_OFFSET_Y + CARD_ANCHOR_Y,
            scale: 1 - (behindIndex - segmentProgress) * SCALE_STEP,
            rotationX: 0,
            opacity: 1,
          })
        })
      },
    })

    const refresh = () => ScrollTrigger.refresh()
    requestAnimationFrame(refresh)

    return () => {
      trigger.kill()
      cards.forEach((card) => gsap.set(card, { clearProps: "all" }))
      section.style.height = ""
      section.style.minHeight = ""
      section.style.perspective = ""
    }
  }, [sectionRef, cardRefs])
}
