export type RevealKind =
  | "eyebrow"
  | "heading"
  | "text"
  | "cta"
  | "card"
  | "image"

export type RevealPreset = {
  duration: number
  ease: string
  y?: number
  scale?: number
  clearTransform: boolean
}

export const REVEAL_PRESETS: Record<RevealKind, RevealPreset> = {
  eyebrow: {
    y: 16,
    duration: 0.6,
    ease: "power2.out",
    clearTransform: true,
  },
  heading: {
    y: 40,
    duration: 0.9,
    ease: "power3.out",
    clearTransform: true,
  },
  text: {
    y: 24,
    duration: 0.8,
    ease: "power2.out",
    clearTransform: true,
  },
  cta: {
    y: 16,
    duration: 0.6,
    ease: "power2.out",
    clearTransform: true,
  },
  card: {
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    clearTransform: true,
  },
  image: {
    scale: 1.08,
    duration: 1.2,
    ease: "expo.out",
    clearTransform: false,
  },
}

export function isRevealKind(value: string | null): value is RevealKind {
  return (
    value === "eyebrow" ||
    value === "heading" ||
    value === "text" ||
    value === "cta" ||
    value === "card" ||
    value === "image"
  )
}
