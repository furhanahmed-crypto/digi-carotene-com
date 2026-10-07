import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const OUTER =
  "M92 44 C127 43 156 72 156 108 C156 143 127 172 92 172 C57 172 28 143 28 108 C28 72 57 45 92 44 Z"
const MID =
  "M92 66 C115 65 134 85 134 108 C134 131 115 150 92 150 C69 150 50 131 50 108 C50 85 69 67 92 66 Z"
const INNER =
  "M92 88 C103 87 112 97 112 108 C112 119 103 128 92 128 C81 128 72 119 72 108 C72 97 81 89 92 88 Z"

export function TargetArrowMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={OUTER} {...fillProps} fillOpacity={0.08} />
      <path d={MID} {...fillProps} fillOpacity={0.14} />
      <path d={INNER} {...fillProps} fillOpacity={0.3} />

      {/* rings */}
      <path d={OUTER} {...drawProps} />
      <path d={MID} {...drawProps} />
      <path d={INNER} {...drawProps} />

      {/* arrow shaft */}
      <path d="M94 106 C120 80 146 54 170 30" strokeWidth={6} {...drawProps} />

      {/* fletching */}
      <path d="M166 34 C168 26 170 20 174 14" {...drawProps} />
      <path d="M166 34 C174 32 180 30 187 27" {...drawProps} />
      <path d="M156 44 C158 38 160 34 163 29" {...drawProps} />
      <path d="M156 44 C162 42 166 41 171 38" {...drawProps} />

      {/* sparkle */}
      <path d="M30 34 C30 42 32 44 40 46 C32 48 30 50 30 58 C30 50 28 48 20 46 C28 44 30 42 30 34" {...drawProps} />
    </MotifSvg>
  )
}