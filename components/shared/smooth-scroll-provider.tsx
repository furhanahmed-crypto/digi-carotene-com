"use client"

import * as React from "react"
import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.8,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
