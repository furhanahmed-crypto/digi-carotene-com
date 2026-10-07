"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

/** Diagonal wave groups (0-based) top-left → bottom-right by row+col. */
const WAVE_GROUPS = [[0], [1, 3], [2, 4, 6], [5, 7], [8]] as const

const SESSION_DURATION = 0.5
/** Pause after the 9th image settles, before restarting from image 1. */
const PAUSE_BETWEEN_SESSIONS = 3
const PEAK_SCALE = 1.1

type HeroMosaicProps = {
  images: readonly string[]
}

export function HeroMosaic({ images }: HeroMosaicProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const grid = gridRef.current
      if (!grid) return

      const cells = gsap.utils.toArray<HTMLElement>(
        grid.querySelectorAll("[data-mosaic-cell]")
      )
      if (cells.length < 9) return

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (reducedMotion) return

      gsap.set(cells, { scale: 1, transformOrigin: "center center" })

      const step = SESSION_DURATION / WAVE_GROUPS.length
      const up = step * 0.42
      const down = step * 0.58

      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: PAUSE_BETWEEN_SESSIONS,
      })

      WAVE_GROUPS.forEach((group, waveIndex) => {
        const targets = group.map((index) => cells[index]).filter(Boolean)
        const start = waveIndex * step

        timeline
          .to(
            targets,
            {
              scale: PEAK_SCALE,
              duration: up,
              ease: "power2.out",
              overwrite: "auto",
            },
            start
          )
          .to(
            targets,
            {
              scale: 1,
              duration: down,
              ease: "bounce.out",
              overwrite: "auto",
            },
            start + up
          )
      })

      // Kill the infinite timeline on unmount (useGSAP also reverts context).
      return () => {
        timeline.kill()
        gsap.set(cells, { clearProps: "transform" })
      }
    },
    { scope: gridRef }
  )

  return (
    <div ref={gridRef} className="grid grid-cols-3 gap-2.5 md:gap-3">
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          data-mosaic-cell
          className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm will-change-transform"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 30vw, 140px"
            className="object-cover"
            priority={index < 3}
          />
        </div>
      ))}
    </div>
  )
}
