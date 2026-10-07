"use client"

import { useRef, type ComponentType, type CSSProperties } from "react"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"

import {
  BarChartMotif,
  CameraMotif,
  CampusCapMotif,
  CarrotSprigMotif,
  ChatCitationMotif,
  CompassMotif,
  ConfettiMotif,
  DottedPathMotif,
  FilmStripMotif,
  GaugeMotif,
  GearMotif,
  HandshakeMotif,
  MagnifierMotif,
  MallBagMotif,
  MapPinMotif,
  MegaphoneMotif,
  NewspaperMotif,
  NodeGraphMotif,
  QuestionMarkMotif,
  RadarSweepMotif,
  RocketMotif,
  ScanLinesMotif,
  ScoreMagnifierMotif,
  SearchRippleMotif,
  ShieldCheckMotif,
  SparklesMotif,
  SpeechBubblesMotif,
  SpotlightMotif,
  StorefrontMotif,
  TargetArrowMotif,
  TrendLineMotif,
  TrophyMotif,
} from "./motifs"
import type { MotifProps } from "./stroke"

export type DecorVariant =
  | "search-ripple"
  | "carrot-sprig"
  | "chat-citation"
  | "magnifier"
  | "node-graph"
  | "megaphone"
  | "newspaper"
  | "map-pin"
  | "storefront"
  | "mall-bag"
  | "campus-cap"
  | "handshake"
  | "rocket"
  | "camera"
  | "spotlight"
  | "confetti"
  | "film-strip"
  | "sparkles"
  | "bar-chart"
  | "trophy"
  | "target-arrow"
  | "trend-line"
  | "dotted-path"
  | "compass"
  | "gauge"
  | "shield-check"
  | "gear"
  | "question-mark"
  | "speech-bubbles"
  | "radar-sweep"
  | "scan-lines"
  | "score-magnifier"

const MOTIFS: Record<DecorVariant, ComponentType<MotifProps>> = {
  "search-ripple": SearchRippleMotif,
  "carrot-sprig": CarrotSprigMotif,
  "chat-citation": ChatCitationMotif,
  magnifier: MagnifierMotif,
  "node-graph": NodeGraphMotif,
  megaphone: MegaphoneMotif,
  newspaper: NewspaperMotif,
  "map-pin": MapPinMotif,
  storefront: StorefrontMotif,
  "mall-bag": MallBagMotif,
  "campus-cap": CampusCapMotif,
  handshake: HandshakeMotif,
  rocket: RocketMotif,
  camera: CameraMotif,
  spotlight: SpotlightMotif,
  confetti: ConfettiMotif,
  "film-strip": FilmStripMotif,
  sparkles: SparklesMotif,
  "bar-chart": BarChartMotif,
  trophy: TrophyMotif,
  "target-arrow": TargetArrowMotif,
  "trend-line": TrendLineMotif,
  "dotted-path": DottedPathMotif,
  compass: CompassMotif,
  gauge: GaugeMotif,
  "shield-check": ShieldCheckMotif,
  gear: GearMotif,
  "question-mark": QuestionMarkMotif,
  "speech-bubbles": SpeechBubblesMotif,
  "radar-sweep": RadarSweepMotif,
  "scan-lines": ScanLinesMotif,
  "score-magnifier": ScoreMagnifierMotif,
}

export const DECOR_VARIANTS = Object.keys(MOTIFS) as DecorVariant[]

type FloatAxis = "y" | "x" | "xy"

type SectionDecorProps = {
  variant: DecorVariant
  className?: string
  /**
   * Overrides section tone `--decor-opacity`.
   * Prefer inheriting tone defaults (white/cream/yellow) from SectionLayout.
   */
  opacity?: number
  /** Slow idle drift after draw — pass an axis for variety across a section */
  float?: boolean | FloatAxis
  /** Peak drift distance in px (default 13) */
  floatDistance?: number
  /** Drift cycle length in seconds (default ~4–5.5 by axis) */
  floatDuration?: number
  /** Subtle scroll parallax */
  parallax?: boolean
  /** When true, draw immediately (preview / above-fold) */
  immediate?: boolean
  /** hide = desktop only (default); show = keep a faint motif on mobile */
  mobile?: "hide" | "show"
}

function floatVars(
  axis: FloatAxis,
  distance: number,
  duration: number
): gsap.TweenVars {
  const base = {
    duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  } as const

  if (axis === "x") {
    return { ...base, x: distance, rotate: distance > 0 ? 2 : -2 }
  }
  if (axis === "xy") {
    return {
      ...base,
      x: distance * 0.7,
      y: -Math.abs(distance),
      rotate: 2.5,
    }
  }
  return { ...base, y: -Math.abs(distance), rotate: 2 }
}

function prepareStrokeDraw(root: HTMLElement) {
  const nodes = root.querySelectorAll<SVGGeometryElement>(
    "path, circle, rect, line, ellipse, polyline, polygon"
  )
  const prepared: SVGGeometryElement[] = []

  nodes.forEach((node) => {
    try {
      const length = node.getTotalLength?.() ?? 0
      if (!length || !Number.isFinite(length)) return
      node.style.strokeDasharray = `${length}`
      node.style.strokeDashoffset = `${length}`
      prepared.push(node)
    } catch {
      /* some elements may not support getTotalLength */
    }
  })

  return prepared
}

export function SectionDecor({
  variant,
  className,
  opacity,
  float = false,
  floatDistance = 13,
  floatDuration,
  parallax = false,
  immediate = false,
  mobile = "hide",
}: SectionDecorProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const Motif = MOTIFS[variant]
  const floatAxis: FloatAxis | false =
    float === true ? "y" : float === false ? false : float

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const nodes = prepareStrokeDraw(root)
        nodes.forEach((node) => {
          node.style.strokeDashoffset = "0"
        })
      })

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const nodes = prepareStrokeDraw(root)
        if (nodes.length === 0) return

        const draw = gsap.timeline({ paused: true })
        draw.to(nodes, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
          stagger: 0.08,
        })

        if (floatAxis) {
          const baseDuration =
            floatDuration ??
            (floatAxis === "x" ? 4.6 : floatAxis === "xy" ? 5.4 : 4)
          // Slightly snappier + farther than authored values.
          const duration = baseDuration * (floatDuration ? 0.78 : 1)
          const distance = floatDistance * 1.15
          draw.to(
            root,
            floatVars(floatAxis, distance, duration),
            ">-0.2"
          )
        }

        if (immediate) {
          draw.play(0)
        } else {
          ScrollTrigger.create({
            trigger: root,
            start: "top 85%",
            once: true,
            onEnter: () => draw.play(0),
          })
        }

        let parallaxTween: gsap.core.Tween | undefined
        if (parallax) {
          parallaxTween = gsap.to(root, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: root.parentElement ?? root,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
        }

        return () => {
          draw.kill()
          parallaxTween?.scrollTrigger?.kill()
          parallaxTween?.kill()
        }
      })

      return () => mm.revert()
    },
    {
      dependencies: [
        variant,
        floatAxis,
        floatDistance,
        floatDuration,
        parallax,
        immediate,
      ],
      scope: rootRef,
    }
  )

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-0 text-[color:var(--decor-ink)] select-none",
        "opacity-[var(--decor-opacity,0.7)]",
        mobile === "hide" && "hidden md:block",
        className
      )}
      style={
        opacity !== undefined
          ? ({ "--decor-opacity": opacity } as CSSProperties)
          : undefined
      }
    >
      <Motif className="h-full w-full" />
    </div>
  )
}
