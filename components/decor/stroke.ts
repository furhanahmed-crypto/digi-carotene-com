import type { SVGProps } from "react"

/** Shared line-art stroke — single weight across all motifs. */
export const decorStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
} satisfies SVGProps<SVGElement>

export type MotifProps = {
  className?: string
}
