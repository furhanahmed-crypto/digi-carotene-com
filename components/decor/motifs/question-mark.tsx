import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const HOOK =
  "M62 70 C60 40 84 24 106 26 C132 28 148 46 146 70 C144 92 126 98 114 112 C108 119 106 126 106 138"
const DOT =
  "M106 156 C112 155 117 160 116 166 C115 172 109 175 104 173 C98 171 96 165 98 161 C99 158 102 156 106 156 Z"

export function QuestionMarkMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone: soft wide band behind the stroke */}
      <path d={HOOK} {...fillProps} fill="none" stroke="currentColor" strokeOpacity={0.14} strokeWidth={24} />
      <path d={DOT} {...fillProps} fillOpacity={0.3} />

      {/* the question mark */}
      <path d={HOOK} strokeWidth={7} {...drawProps} />
      <path d={DOT} {...drawProps} />

      {/* sparkle */}
      <path d="M30 48 C30 56 32 58 40 60 C32 62 30 64 30 72 C30 64 28 62 20 60 C28 58 30 56 30 48" {...drawProps} />

      {/* plus */}
      <path d="M172 110 C172 116 173 120 172 126" {...drawProps} />
      <path d="M165 118 C169 117 175 119 179 118" {...drawProps} />

      {/* small circle */}
      <path d="M40 144 C44 144 46 147 46 150 C46 154 43 156 40 156 C36 156 34 153 34 150 C34 147 36 144 40 144 Z" {...drawProps} />
    </MotifSvg>
  )
}