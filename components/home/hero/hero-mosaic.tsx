"use client"

import { useRef } from "react"
import Image from "next/image"

import { gsap, useGSAP } from "@/lib/gsap"

const COLS = 3

const PULSE = 0.55
const STAGGER = 0.09
const PAUSE_BETWEEN_SESSIONS = 3
const PEAK_SCALE_DESKTOP = 1.08
const PEAK_SCALE_MOBILE = 1.03

type HeroMosaicProps = {
  images: readonly string[]
  /** Delay before the wave starts (after hero reveal choreography). */
  startDelay?: number
}

export function HeroMosaic({ images, startDelay = 0 }: HeroMosaicProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const grid = gridRef.current
      if (!grid) return

      const cells = gsap.utils.toArray<HTMLElement>("[data-mosaic-cell]", grid)
      if (cells.length < 9) return

      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isDesktop } = context.conditions as {
            isDesktop: boolean
          }
          const peak = isDesktop ? PEAK_SCALE_DESKTOP : PEAK_SCALE_MOBILE

          gsap.set(cells, { scale: 1, force3D: true })

          const tl = gsap.timeline({
            delay: startDelay,
            repeat: -1,
            repeatDelay: PAUSE_BETWEEN_SESSIONS,
            defaults: { overwrite: false },
          })

          cells.forEach((cell, i) => {
            const diagonal = Math.floor(i / COLS) + (i % COLS)
            const start = diagonal * STAGGER

            tl.to(
              cell,
              {
                scale: peak,
                duration: PULSE * 0.4,
                ease: "sine.out",
                onStart: () => {
                  gsap.set(cell, { zIndex: 1 })
                },
              },
              start
            ).to(
              cell,
              {
                scale: 1,
                duration: PULSE * 0.6,
                ease: "back.out(2.2)",
                onComplete: () => {
                  gsap.set(cell, { zIndex: 0 })
                },
              },
              start + PULSE * 0.4
            )
          })

          return () => {
            tl.kill()
          }
        }
      )

      return () => mm.revert()
    },
    { scope: gridRef, dependencies: [startDelay] }
  )

  return (
    <div
      ref={gridRef}
      className="grid w-full max-w-full grid-cols-3 gap-1.5 overflow-hidden min-[360px]:gap-2 md:gap-3"
    >
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          data-mosaic-cell
          className="group relative aspect-square min-w-0 overflow-hidden rounded-xl border border-border bg-secondary shadow-sm will-change-transform min-[360px]:rounded-2xl"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 30vw, 140px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 md:group-hover:scale-110"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  )
}
