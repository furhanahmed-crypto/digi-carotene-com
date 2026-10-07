"use client"

import { useRef } from "react"
import Image from "next/image"

import { gsap, useGSAP } from "@/lib/gsap"

const COLS = 3

const PULSE = 0.55
const STAGGER = 0.09
const PAUSE_BETWEEN_SESSIONS = 3
const PEAK_SCALE = 1.1

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

      mm.add("(prefers-reduced-motion: no-preference)", () => {
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
              scale: PEAK_SCALE,
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
      })

      return () => mm.revert()
    },
    { scope: gridRef, dependencies: [startDelay] }
  )

  return (
    <div ref={gridRef} className="grid grid-cols-3 gap-2.5 md:gap-3">
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          data-mosaic-cell
          className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm will-change-transform"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 30vw, 140px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  )
}
