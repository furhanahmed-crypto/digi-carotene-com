import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const CARROT =
  "M112 62 C132 56 150 72 146 92 C138 122 100 156 52 172 C48 173 46 170 47 166 C58 120 80 80 112 62 Z"
const DROP_A =
  "M160 124 C166 134 170 140 170 146 C170 153 165 158 160 158 C155 158 150 153 150 146 C150 140 154 134 160 124 Z"
const DROP_B =
  "M180 160 C184 166 186 170 186 174 C186 179 183 182 180 182 C177 182 174 179 174 174 C174 170 176 166 180 160 Z"

export function CarrotSprigMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={CARROT} {...fillProps} fillOpacity={0.18} />
      <path d={DROP_A} {...fillProps} fillOpacity={0.28} />
      <path d={DROP_B} {...fillProps} fillOpacity={0.28} />

      {/* carrot body + ridges */}
      <path d={CARROT} {...drawProps} />
      <path d="M100 92 C106 94 110 98 114 102" {...drawProps} />
      <path d="M86 116 C92 118 96 122 100 126" {...drawProps} />
      <path d="M72 140 C77 142 80 145 84 148" {...drawProps} />

      {/* leaves */}
      <path d="M124 62 C112 54 100 40 96 22 C112 28 126 42 132 60" {...drawProps} />
      <path d="M134 58 C130 42 132 24 140 8 C148 24 148 42 142 58" {...drawProps} />
      <path d="M138 56 C137 42 138 28 140 14" {...drawProps} />
      <path d="M142 62 C152 50 166 40 184 38 C180 54 166 64 146 68" {...drawProps} />

      {/* pigment drops */}
      <path d={DROP_A} {...drawProps} />
      <path d={DROP_B} {...drawProps} />
    </MotifSvg>
  )
}