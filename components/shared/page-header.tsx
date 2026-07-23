"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { PageHeaderVisual } from "./page-header-visual"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  accentColor?: string
  accentBorderColor?: string
}

const getColorFromAccent = (accent: string) => {
  if (accent.includes("orange")) return "#ff5000"
  if (accent.includes("emerald")) return "#10b981"
  if (accent.includes("purple")) return "#a855f7"
  if (accent.includes("blue")) return "#3b82f6"
  if (accent.includes("pink")) return "#ec4899"
  if (accent.includes("cyan")) return "#06b6d4"
  if (accent.includes("indigo")) return "#6366f1"
  if (accent.includes("red")) return "#ef4444"
  if (accent.includes("yellow")) return "#eab308"
  return "#ff5000"
}

export function PageHeader({
  title,
  description,
  breadcrumbs = [],
  accentColor = "from-primary/10",
}: PageHeaderProps) {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const hexColor = getColorFromAccent(accentColor)

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-b border-border/50 bg-background pt-24 pb-8 md:pt-28 md:pb-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_60%)]" />
      <div
        className={cn(
          "absolute top-0 left-1/2 -z-10 h-40 w-72 -translate-x-1/2 rounded-full bg-gradient-to-b opacity-35 blur-3xl transition-transform duration-700 ease-out",
          accentColor
        )}
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 24}px), ${mousePos.y * 16}px)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 md:grid-cols-12 md:gap-8">
        <div className="space-y-3 md:col-span-7 lg:col-span-8">
          {breadcrumbs.length > 0 && (
            <nav
              className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <Home className="size-3.5" />
              </Link>

              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1
                return (
                  <React.Fragment key={item.label}>
                    <ChevronRight className="size-3 shrink-0 text-muted-foreground/50" />
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="truncate font-medium text-foreground/80">
                        {item.label}
                      </span>
                    )}
                  </React.Fragment>
                )
              })}
            </nav>
          )}

          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-primary">
              <Sparkles className="size-3" /> Omnichannel Strategy Spec
            </div>

            <h1 className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text font-lustria text-2xl leading-tight tracking-tight text-transparent sm:text-3xl md:text-4xl">
              {title}
            </h1>

            {description && (
              <p className="max-w-xl font-sans text-sm font-light leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="relative hidden justify-end md:col-span-5 md:flex lg:col-span-4">
          <PageHeaderVisual color={hexColor} mousePos={mousePos} />
        </div>
      </div>
    </section>
  )
}
