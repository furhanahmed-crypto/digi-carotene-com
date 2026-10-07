import type { SVGProps } from "react"

export type MotifProps = SVGProps<SVGSVGElement>

/** Shared wrapper: thick, round, hand-drawn line style. Colour = currentColor. */
export function MotifSvg({ children, viewBox = "0 0 200 200", ...props }: MotifProps) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/** Outline paths: pathLength=1 lets GSAP draw every path with the same dash values (0 -> 1). */
export const drawProps = { pathLength: 1, "data-motif-path": "" } as const

/** Soft tone fill (same hue as the outline, very light). Fades in after the draw. */
export const fillProps = {
  fill: "currentColor",
  fillOpacity: 0.14,
  stroke: "none",
  "data-motif-fill": "",
} as const