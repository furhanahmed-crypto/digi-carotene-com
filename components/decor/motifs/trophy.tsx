import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const CUP =
  "M62 36 C80 34 120 34 138 36 C140 66 138 92 126 108 C120 116 112 122 106 124 L106 140 L94 140 L94 124 C88 122 80 116 74 108 C62 92 60 66 62 36 Z"
const BASE =
  "M74 142 C92 141 108 141 126 142 C130 151 132 160 134 168 C112 169 88 169 66 168 C68 160 70 151 74 142 Z"
const PLATE =
  "M62 168 C86 167 114 167 138 168 C139 174 139 178 138 182 C114 183 86 183 62 182 C61 178 61 174 62 168 Z"

export function TrophyMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={CUP} {...fillProps} />
      <path d={BASE} {...fillProps} fillOpacity={0.26} />
      <path d={PLATE} {...fillProps} fillOpacity={0.3} />

      {/* handles */}
      <path d="M62 48 C44 48 34 54 36 68 C38 82 52 90 68 92" {...drawProps} />
      <path d="M138 48 C156 48 166 54 164 68 C162 82 148 90 132 92" {...drawProps} />

      {/* cup, base, plate */}
      <path d={CUP} {...drawProps} />
      <path d={BASE} {...drawProps} />
      <path d={PLATE} {...drawProps} />

      {/* star on the cup */}
      <path d="M100 54 C100 64 102 66 112 68 C102 70 100 72 100 82 C100 72 98 70 88 68 C98 66 100 64 100 54" {...drawProps} />

      {/* cup shine */}
      <path d="M74 50 C72 64 74 78 80 90" {...drawProps} />

      {/* rays */}
      <path d="M100 8 C100 14 101 18 100 24" {...drawProps} />
      <path d="M72 14 C75 18 77 22 80 26" {...drawProps} />
      <path d="M128 14 C125 18 123 22 120 26" {...drawProps} />
    </MotifSvg>
  )
}