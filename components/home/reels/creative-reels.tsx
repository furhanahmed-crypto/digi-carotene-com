"use client"

import { useEffect, useRef } from "react"
import { VolumeX } from "lucide-react"

import { reelsDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function CreativeReels() {
  const { reels } = homeSections
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rowRef.current
    if (!root) return

    const videos = Array.from(root.querySelectorAll("video"))
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncPlayback = () => {
      videos.forEach((video) => {
        if (media.matches) {
          video.pause()
          video.removeAttribute("autoplay")
        } else {
          void video.play().catch(() => {})
        }
      })
    }

    syncPlayback()
    media.addEventListener("change", syncPlayback)
    return () => media.removeEventListener("change", syncPlayback)
  }, [])

  return (
    <SectionLayout tone="white" decor={reelsDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{reels.eyebrow}</SectionMark>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            data-reveal="heading"
            className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
          >
            {reels.headline}
          </h2>
          <p data-reveal="text" className="max-w-md text-muted-foreground">
            {reels.body}
          </p>
        </div>

        <div
          ref={rowRef}
          data-reveal-group
          className="mt-10 flex [scrollbar-width:none] gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        >
          {reels.items.map((item) => (
            <div
              key={item.id}
              data-reveal="card"
              className="relative flex aspect-[9/16] w-44 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-secondary md:w-52"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={item.videoSrc}
                poster={item.posterSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
              />
              <div className="relative z-10 flex justify-end p-3">
                <span className="rounded-full bg-black/40 p-2 text-white">
                  <VolumeX className="size-3.5" />
                </span>
              </div>
              <div className="relative z-10 mt-auto bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-xs font-medium">{item.handle}</p>
                <p className="mt-1 text-sm opacity-90">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
