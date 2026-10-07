"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const COLS = 3
const DIAGONALS = 5 // (rows - 1) + (cols - 1) + 1

const PULSE = 0.55 // one cell's full up + settle
const STAGGER = 0.09 // delay between diagonals -> they overlap
const PAUSE_BETWEEN_SESSIONS = 3
const PEAK_SCALE = 1.1

type HeroMosaicProps = { images: readonly string[] }

export function HeroMosaic({ images }: HeroMosaicProps) {
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
          repeat: -1,
          repeatDelay: PAUSE_BETWEEN_SESSIONS,
          defaults: { overwrite: false },
        })

        cells.forEach((cell, i) => {
          const diagonal = Math.floor(i / COLS) + (i % COLS) // 0..4
          const start = diagonal * STAGGER

          tl.to(
            cell,
            {
              scale: PEAK_SCALE,
              duration: PULSE * 0.4,
              ease: "sine.out",
              // lift the active cell above its neighbours so edges don't clip
              onStart: () => { gsap.set(cell, { zIndex: 1 }) },
            },
            start
          ).to(
            cell,
            {
              scale: 1,
              duration: PULSE * 0.6,
              ease: "back.out(2.2)", // soft overshoot below 1, then settle
              onComplete: () => { gsap.set(cell, { zIndex: 0 }) },
            },
            start + PULSE * 0.4
          )
        })

        return () => tl.kill()
      })

      return () => mm.revert()
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