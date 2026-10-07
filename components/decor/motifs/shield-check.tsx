import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const SHIELD =
  "M100 22 C122 32 146 38 166 38 C168 70 164 104 150 130 C140 150 120 164 100 176 C80 164 60 150 50 130 C36 104 32 70 34 38 C54 38 78 32 100 22 Z"

export function ShieldCheckMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={SHIELD} {...fillProps} />

      {/* shield + inner highlight */}
      <path d={SHIELD} {...drawProps} />
      <path d="M100 42 C84 50 66 54 52 55 C51 80 55 104 65 122" {...drawProps} />

      {/* check */}
      <path d="M68 98 C78 106 88 114 94 126 C106 106 120 88 136 72" strokeWidth={8} {...drawProps} />

      {/* sparkles */}
      <path d="M176 126 C176 134 178 136 186 138 C178 140 176 142 176 150 C176 142 174 140 166 138 C174 136 176 134 176 126" {...drawProps} />
      <path d="M24 130 C24 136 25 140 24 146" {...drawProps} />
      <path d="M17 138 C21 137 27 139 31 138" {...drawProps} />
    </MotifSvg>
  )
}