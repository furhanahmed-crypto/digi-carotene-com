import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { Container } from "@/components/shared/container"
import { cn } from "@/lib/utils"

export type SectionTone = "white" | "cream" | "yellow"

type SectionLayoutProps = {
  children: ReactNode
  tone?: SectionTone
  id?: string
  className?: string
  containerClassName?: string
  /** Default content padding. Compact for strips; hero for nav-offset first viewport. */
  size?: "default" | "compact" | "hero"
  /** Wrap children in the shared Container. */
  contained?: boolean
  bordered?: boolean
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "id" | "className">

const toneSurface: Record<SectionTone, string> = {
  white: "bg-background text-foreground",
  cream: "bg-[#f3efe6] text-foreground dark:bg-secondary",
  yellow:
    "bg-brand-yellow text-ink dark:bg-secondary dark:text-foreground",
}

function SectionAtmosphere({ tone }: { tone: SectionTone }) {
  if (tone === "yellow") {
    return (
      <>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,239,230,0.2),transparent_46%),radial-gradient(circle_at_bottom_left,rgba(243,239,230,0.16),transparent_42%),radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_46%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_42%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-[18%] right-[12%] h-56 w-56 rounded-full bg-[#f3efe6]/12 blur-3xl dark:bg-white/5"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[10%] left-[8%] h-64 w-64 rounded-full bg-[#f3efe6]/10 blur-3xl dark:bg-white/4"
          aria-hidden="true"
        />
      </>
    )
  }

  if (tone === "cream") {
    return (
      <>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.28),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(245,196,0,0.16),transparent_38%),radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(245,196,0,0.08),transparent_38%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(15,23,42,0.12) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-[40%] rounded-full bg-brand-yellow/30 blur-3xl dark:bg-brand-yellow/10"
          aria-hidden="true"
        />
      </>
    )
  }

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,196,0,0.08),transparent_36%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,196,0,0.04),transparent_36%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.1) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[30%] left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-brand-yellow/12 blur-3xl dark:bg-brand-yellow/6"
        aria-hidden="true"
      />
    </>
  )
}

export function SectionLayout({
  children,
  tone = "white",
  id,
  className,
  containerClassName,
  size = "default",
  contained = true,
  bordered = true,
  ...sectionProps
}: SectionLayoutProps) {
  const content = contained ? (
    <Container className={cn("relative", containerClassName)}>
      {children}
    </Container>
  ) : (
    <div className={cn("relative", containerClassName)}>{children}</div>
  )

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        toneSurface[tone],
        bordered && "border-b border-border",
        size === "default" && "py-16 md:py-24",
        size === "compact" && "py-7",
        size === "hero" && "pt-28 pb-16 md:pt-36 md:pb-20",
        className
      )}
      {...sectionProps}
    >
      <SectionAtmosphere tone={tone} />
      {content}
    </section>
  )
}
