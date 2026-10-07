import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BIG =
  "M36 52 C35 42 42 36 52 36 L136 36 C146 36 152 42 152 52 C153 76 151 94 152 104 C152 114 146 120 136 120 L88 120 L62 146 L64 120 L52 120 C42 120 36 114 36 104 C37 88 35 70 36 52 Z"
const SMALL =
  "M128 144 C127 138 132 134 138 134 L170 134 C176 134 181 138 180 144 C181 156 179 164 180 168 C180 174 176 177 170 177 L160 177 L166 192 L146 177 L138 177 C132 177 127 174 128 168 C129 160 127 152 128 144 Z"

export function SpeechBubblesMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BIG} {...fillProps} />
      <path d={SMALL} {...fillProps} fillOpacity={0.26} />

      {/* big bubble + typing dots */}
      <path d={BIG} {...drawProps} />
      <path d="M68 78 l.01 0" strokeWidth={9} {...drawProps} />
      <path d="M94 78 l.01 0" strokeWidth={9} {...drawProps} />
      <path d="M120 78 l.01 0" strokeWidth={9} {...drawProps} />

      {/* small bubble + star */}
      <path d={SMALL} {...drawProps} />
      <path d="M154 146 C154 152 156 153 162 155 C156 157 154 158 154 164 C154 158 152 157 146 155 C152 153 154 152 154 146" {...drawProps} />

      {/* sparkle */}
      <path d="M170 22 C170 30 172 32 180 34 C172 36 170 38 170 46 C170 38 168 36 160 34 C168 32 170 30 170 22" {...drawProps} />
    </MotifSvg>
  )
}