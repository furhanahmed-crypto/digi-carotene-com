import { gsap } from "@/lib/gsap"

import { isRevealKind, REVEAL_PRESETS, type RevealKind } from "./reveal-presets"

type SingleUnit = {
  type: "single"
  el: HTMLElement
  kind: RevealKind
}

type GroupUnit = {
  type: "group"
  els: HTMLElement[]
}

type RevealUnit = SingleUnit | GroupUnit

function collectUnits(root: HTMLElement): RevealUnit[] {
  const units: RevealUnit[] = []
  const claimed = new Set<HTMLElement>()
  const nodes = root.querySelectorAll<HTMLElement>(
    "[data-reveal-group], [data-reveal]"
  )

  nodes.forEach((node) => {
    if (node.hasAttribute("data-reveal-group")) {
      const els = Array.from(
        node.querySelectorAll<HTMLElement>("[data-reveal]")
      ).filter((el) => isRevealKind(el.getAttribute("data-reveal")))
      els.forEach((el) => claimed.add(el))
      if (els.length > 0) {
        units.push({ type: "group", els })
      }
      return
    }

    if (claimed.has(node) || node.closest("[data-reveal-group]")) return

    const kind = node.getAttribute("data-reveal")
    if (!isRevealKind(kind)) return
    units.push({ type: "single", el: node, kind })
  })

  return units
}

function cardStagger(count: number) {
  if (count <= 1) return 0
  return Math.min(0.12, 0.8 / (count - 1))
}

function fromVars(kind: RevealKind) {
  const preset = REVEAL_PRESETS[kind]
  if (kind === "image") {
    return { autoAlpha: 0, scale: preset.scale ?? 1.08 }
  }
  return { autoAlpha: 0, y: preset.y ?? 24 }
}

function toVars(kind: RevealKind) {
  const preset = REVEAL_PRESETS[kind]
  if (kind === "image") {
    return {
      autoAlpha: 1,
      scale: 1,
      duration: preset.duration,
      ease: preset.ease,
    }
  }
  return {
    autoAlpha: 1,
    y: 0,
    duration: preset.duration,
    ease: preset.ease,
    ...(preset.clearTransform ? { clearProps: "transform" as const } : {}),
  }
}

/**
 * Builds one choreographed reveal timeline for a section/group root.
 * Positions use relative offsets so elements overlap (total ~under 1.6s).
 * When `scrollTrigger` is in vars, GSAP owns playback; otherwise the timeline
 * starts paused so the caller can `play()` after fonts/delay.
 */
export function buildRevealTimeline(
  root: HTMLElement,
  vars?: gsap.TimelineVars
) {
  const hasScrollTrigger = Boolean(vars?.scrollTrigger)
  const tl = gsap.timeline({ paused: !hasScrollTrigger, ...vars })
  const units = collectUnits(root)
  const startOf: Partial<Record<RevealKind, number>> = {}
  let fallback = 0

  for (const unit of units) {
    if (unit.type === "group") {
      const start =
        startOf.text != null
          ? startOf.text + 0.15
          : startOf.heading != null
            ? startOf.heading + 0.2
            : fallback

      const kind: RevealKind = "card"
      const preset = REVEAL_PRESETS[kind]

      tl.fromTo(
        unit.els,
        fromVars(kind),
        {
          ...toVars(kind),
          stagger: cardStagger(unit.els.length),
        },
        start
      )

      fallback = Math.max(
        fallback,
        start +
          preset.duration +
          cardStagger(unit.els.length) * Math.max(0, unit.els.length - 1) * 0.35
      )
      continue
    }

    const { el, kind } = unit
    let start = fallback

    if (kind === "eyebrow") {
      start = 0
    } else if (kind === "heading" && startOf.eyebrow != null) {
      start = startOf.eyebrow + 0.1
    } else if (kind === "text" && startOf.heading != null) {
      start = startOf.heading + 0.15
    } else if (kind === "cta" && startOf.text != null) {
      start = startOf.text + 0.15
    } else if (kind === "cta" && startOf.heading != null) {
      start = startOf.heading + 0.25
    } else if (kind === "image" && startOf.heading != null) {
      start = startOf.heading + 0.1
    } else if (kind === "card" && startOf.text != null) {
      start = startOf.text + 0.15
    } else if (kind === "card" && startOf.heading != null) {
      start = startOf.heading + 0.2
    }

    startOf[kind] = start

    tl.fromTo(el, fromVars(kind), toVars(kind), start)
    fallback = Math.max(fallback, start + REVEAL_PRESETS[kind].duration * 0.3)
  }

  return tl
}

export function revealImmediately(root: HTMLElement) {
  const targets = root.querySelectorAll<HTMLElement>("[data-reveal]")
  gsap.set(targets, { autoAlpha: 1, clearProps: "transform" })
}
