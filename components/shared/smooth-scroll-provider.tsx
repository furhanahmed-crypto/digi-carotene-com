"use client"

import * as React from "react"
import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"

import { GsapLenisSync } from "@/components/shared/gsap-lenis-sync"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [viewportWidth, setViewportWidth] = React.useState(1280)

  React.useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth)
    }

    updateViewportWidth()
    window.addEventListener("resize", updateViewportWidth)

    return () => {
      window.removeEventListener("resize", updateViewportWidth)
    }
  }, [])

  const lenisOptions = React.useMemo(() => {
    const isMobile = viewportWidth < 768
    const isTablet = viewportWidth >= 768 && viewportWidth < 1024

    return {
      lerp: isMobile ? 0.12 : isTablet ? 0.1 : 0.08,
      duration: isMobile ? 0.95 : isTablet ? 1.05 : 1.2,
      smoothWheel: true,
      // Off on touch: lets horizontal carousels (reels) own the gesture axis.
      // Vertical page scroll still works via native touch + Lenis wheel smoothing on desktop.
      syncTouch: !isMobile,
      touchMultiplier: isMobile ? 1.2 : isTablet ? 1.25 : 1,
      // Lets Next.js App Router scroll-to-top win; without this Lenis keeps the prior scroll.
      stopInertiaOnNavigate: true,
    }
  }, [viewportWidth])

  return (
    <ReactLenis
      root
      autoRaf={false}
      options={lenisOptions}
    >
      <GsapLenisSync />
      {children}
    </ReactLenis>
  )
}
