import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

export function BarChartMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d="M48 168 L48 132 L68 130 L68 168 Z" {...fillProps} />
      <path d="M82 168 L82 110 L102 108 L102 168 Z" {...fillProps} />
      <path d="M116 168 L116 86 L136 84 L136 168 Z" {...fillProps} />
      <path d="M150 168 L150 58 L170 56 L170 168 Z" {...fillProps} />

      {/* axis (overshoots at both ends) */}
      <path d="M30 22 C29 70 31 120 30 170 C70 171 124 169 178 170" {...drawProps} />

      {/* bars */}
      <path d="M48 168 C47 154 49 142 48 132 C54 130 62 131 68 130 C69 142 67 155 68 168" {...drawProps} />
      <path d="M82 168 C81 148 83 124 82 110 C88 108 96 109 102 108 C103 128 101 150 102 168" {...drawProps} />
      <path d="M116 168 C115 140 117 108 116 86 C122 84 130 85 136 84 C137 110 135 142 136 168" {...drawProps} />
      <path d="M150 168 C149 130 151 90 150 58 C156 56 164 57 170 56 C171 90 169 132 170 168" {...drawProps} />

      {/* rising trend arrow */}
      <path d="M40 100 C70 90 90 74 120 60 C138 52 152 40 168 30" {...drawProps} />
      <path d="M149 31 C157 30 163 29 170 28 C169 35 168 42 166 50" {...drawProps} />
    </MotifSvg>
  )
}