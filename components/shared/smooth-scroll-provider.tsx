"use client"

import * as React from "react"
import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"

import { GsapLenisSync } from "@/components/shared/gsap-lenis-sync"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      <GsapLenisSync />
      {children}
    </ReactLenis>
  )
}
