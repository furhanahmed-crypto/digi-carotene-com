"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"

import { reelsDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"
import type { ReelItem } from "@/types/home"

type ReelCardProps = {
  item: ReelItem
  isUnmuted: boolean
  onToggleMute: (id: string) => void
}

function ReelCard({ item, isUnmuted, onToggleMute }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  // Sync muted state and ensure playback when unmuted
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isUnmuted) {
      video.muted = false
      video.volume = 1
      void video.play().catch(() => {})
    } else {
      video.muted = true
    }
  }, [isUnmuted])

  // Motion preference handling
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleMotion = () => {
      if (media.matches) {
        video.pause()
        setIsPlaying(false)
      } else {
        void video.play().catch(() => {})
        setIsPlaying(true)
      }
    }

    handleMotion()
    media.addEventListener("change", handleMotion)
    return () => media.removeEventListener("change", handleMotion)
  }, [])

  const handleCardClick = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video.play().catch(() => {})
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      data-reveal="card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleCardClick()
        }
      }}
      aria-label={`${isPlaying ? "Pause" : "Play"} ${item.label} reel`}
      className="group relative flex aspect-reel w-[68vw] shrink-0 snap-start cursor-pointer select-none flex-col justify-between overflow-hidden rounded-2xl border border-border bg-secondary shadow-xs transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-yellow min-[360px]:w-[62vw] sm:w-[42vw] md:w-[28vw] lg:w-full lg:shrink"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={item.videoSrc}
        poster={item.posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${item.label} reel`}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Top action bar */}
      <div className="relative z-10 flex items-center justify-between p-2.5 min-[360px]:p-3">
        <span className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-xs">
          Reel
        </span>

        {/* Mute / Unmute Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onToggleMute(item.id)
          }}
          aria-label={isUnmuted ? `Mute ${item.label} reel` : `Unmute ${item.label} reel`}
          aria-pressed={isUnmuted}
          className={cn(
            "flex size-8 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-yellow min-[360px]:size-9",
            isUnmuted
              ? "bg-brand-yellow text-ink shadow-md shadow-brand-yellow/30 scale-105"
              : "bg-black/60 text-white backdrop-blur-xs hover:bg-black/80 hover:scale-105"
          )}
        >
          {isUnmuted ? (
            <Volume2 className="size-4 animate-pulse" />
          ) : (
            <VolumeX className="size-4" />
          )}
        </button>
      </div>

      {/* Center Paused Indicator */}
      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition">
          <div className="flex size-12 items-center justify-center rounded-full bg-black/70 text-white shadow-lg">
            <Play className="size-5 fill-white translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Bottom info banner */}
      <div className="pointer-events-none relative z-10 bg-linear-to-t from-black/85 via-black/45 to-transparent p-3 pt-8 text-white min-[360px]:p-4">
        <p className="text-[11px] font-medium text-white/80 min-[360px]:text-xs">
          {item.handle}
        </p>
        <p className="mt-0.5 text-xs font-semibold text-white min-[360px]:text-sm">
          {item.label}
        </p>
      </div>
    </div>
  )
}

export function CreativeReels() {
  const { reels } = homeSections
  const [unmutedReelId, setUnmutedReelId] = useState<string | null>(null)

  const handleToggleMute = (id: string) => {
    setUnmutedReelId((current) => (current === id ? null : id))
  }

  return (
    <SectionLayout tone="white" decor={reelsDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{reels.eyebrow}</SectionMark>
        <div className="mt-6 flex min-w-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            data-reveal="heading"
            className="max-w-2xl font-display text-[26px] leading-display font-medium tracking-display min-[360px]:text-[30px] sm:text-[32px] md:text-[44px]"
          >
            {reels.headline}
          </h2>
          <p
            data-reveal="text"
            className="max-w-md text-sm text-muted-foreground md:text-base"
          >
            {reels.body}
          </p>
        </div>

        <div
          data-reveal-group
          className="mt-8 flex gap-3 overflow-x-auto overscroll-x-contain pb-3 pt-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[360px]:gap-4 sm:mt-10 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0"
        >
          {reels.items.map((item) => (
            <ReelCard
              key={item.id}
              item={item}
              isUnmuted={unmutedReelId === item.id}
              onToggleMute={handleToggleMute}
            />
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
