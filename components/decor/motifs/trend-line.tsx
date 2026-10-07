import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const LINE =
  "M44 150 C60 132 72 140 88 118 C102 98 112 108 126 84 C140 62 152 54 168 38"

export function TrendLineMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fill: area under the line */}
      <path d={`${LINE} L168 168 L44 168 Z`} {...fillProps} fillOpacity={0.16} />

      {/* axes */}
      <path d="M30 24 C29 70 31 130 30 172 C70 173 130 171 178 172" {...drawProps} />

      {/* faint ticks */}
      <path d="M24 70 C28 69 32 71 36 70" {...drawProps} />
      <path d="M24 110 C28 109 32 111 36 110" {...drawProps} />

      {/* trend line */}
      <path d={LINE} strokeWidth={6} {...drawProps} />

      {/* data points */}
      <path d="M44 150 l.01 0" strokeWidth={10} {...drawProps} />
      <path d="M88 118 l.01 0" strokeWidth={10} {...drawProps} />
      <path d="M126 84 l.01 0" strokeWidth={10} {...drawProps} />

      {/* arrow head */}
      <path d="M148 34 C157 33 164 33 170 34 C170 42 170 50 169 58" {...drawProps} />

      {/* sparkle */}
      <path d="M62 44 C62 52 64 54 72 56 C64 58 62 60 62 68 C62 60 60 58 52 56 C60 54 62 52 62 44" {...drawProps} />
    </MotifSvg>
  )
}