"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ParallaxSectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
}

export function ParallaxSection({
  children,
  className,
  id,
}: ParallaxSectionProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const layerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const section = sectionRef.current
    const layer = layerRef.current
    if (!section || !layer) return

    const onScroll = () => {
      const offset = -section.getBoundingClientRect().top * 0.12
      layer.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        ref={layerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 will-change-transform"
      >
        <div className="absolute -inset-[20%] bg-[radial-gradient(circle_at_30%_20%,rgba(226,87,31,0.08),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(226,87,31,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(225,217,200,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(225,217,200,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(58,52,44,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(58,52,44,0.35)_1px,transparent_1px)]" />
      </div>
      {children}
    </section>
  )
}
