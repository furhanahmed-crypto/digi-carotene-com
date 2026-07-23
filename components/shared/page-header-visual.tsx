"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

interface PageHeaderVisualProps {
  color: string
  mousePos: { x: number; y: number }
}

export function PageHeaderVisual({ color, mousePos }: PageHeaderVisualProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = !mounted || resolvedTheme !== "light"
  const screenshotSrc = isDark ? "/banner-img-dark.png" : "/banner-img-light.png"

  return (
    <div
      className="relative w-full max-w-[300px] select-none"
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${mousePos.y * -6}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {/* Ambient glow behind the window */}
      <div
        className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-45 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${color}55 0%, transparent 70%)`,
          transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
        }}
      />

      {/* Mac-style browser / laptop window */}
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl border shadow-2xl transition-all duration-500",
          "border-border/80 bg-card/90 backdrop-blur-sm",
          "ring-1 ring-foreground/5",
          "hover:shadow-[0_0_40px_-8px] hover:border-primary/30"
        )}
        style={
          {
            "--tw-shadow-color": `${color}40`,
          } as React.CSSProperties
        }
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-2.5 py-1.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#ff5f57] shadow-sm ring-1 ring-black/10" />
            <span className="size-2 rounded-full bg-[#febc2e] shadow-sm ring-1 ring-black/10" />
            <span className="size-2 rounded-full bg-[#28c840] shadow-sm ring-1 ring-black/10" />
          </div>
          <div className="mx-auto flex h-4 max-w-[140px] flex-1 items-center justify-center rounded-md border border-border/50 bg-background/60 px-2">
            <span className="truncate text-[8px] font-mono text-muted-foreground tracking-wide">
              digicarotene.com
            </span>
          </div>
          <div className="w-[36px]" aria-hidden />
        </div>

        {/* Screenshot viewport */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/20">
          <Image
            src={screenshotSrc}
            alt="Digi Carotene preview"
            fill
            sizes="(max-width: 768px) 0px, 300px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority={false}
          />

          {/* Soft top highlight / glass sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />

          {/* Accent edge glow on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              boxShadow: `inset 0 0 0 1px ${color}40`,
            }}
          />
        </div>

        {/* Thin laptop base lip */}
        <div className="h-1.5 w-full bg-gradient-to-b from-border/40 to-transparent" />
      </div>

      {/* Subtle floating base reflection */}
      <div
        className="mx-auto mt-1 h-2 w-[70%] rounded-full blur-md opacity-40"
        style={{ background: color }}
      />
    </div>
  )
}
