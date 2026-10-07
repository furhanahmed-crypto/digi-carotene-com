import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BODY =
  "M100 18 C122 38 132 66 130 100 C129 118 126 130 122 140 L78 140 C74 130 71 118 70 100 C68 66 78 38 100 18 Z"
const FIN_L = "M72 100 C60 110 52 124 50 144 C60 140 70 138 78 138"
const FIN_R = "M128 100 C140 110 148 124 150 144 C140 140 130 138 122 138"
const NOZZLE = "M84 140 L116 140 C114 148 112 152 110 154 L90 154 C88 152 86 148 84 140 Z"
const WINDOW =
  "M100 64 C108 64 114 70 114 78 C114 86 108 92 100 92 C92 92 86 86 86 78 C86 70 92 64 100 64 Z"

export function RocketMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      <g transform="rotate(35 100 100)">
        {/* tone fills */}
        <path d={BODY} {...fillProps} />
        <path d={`${FIN_L} Z`} {...fillProps} fillOpacity={0.28} />
        <path d={`${FIN_R} Z`} {...fillProps} fillOpacity={0.28} />
        <path d={WINDOW} {...fillProps} fillOpacity={0.3} />
        <path d="M92 158 C88 170 94 180 100 192 C106 180 112 170 108 158 Z" {...fillProps} fillOpacity={0.3} />

        {/* body, fins, nozzle, window */}
        <path d={BODY} {...drawProps} />
        <path d={FIN_L} {...drawProps} />
        <path d={FIN_R} {...drawProps} />
        <path d={NOZZLE} {...drawProps} />
        <path d={WINDOW} {...drawProps} />

        {/* flame */}
        <path d="M92 158 C88 170 94 180 100 192 C106 180 112 170 108 158" {...drawProps} />
        <path d="M100 160 C98 168 100 174 100 180" {...drawProps} />
      </g>

      {/* sparkle + plus + dot */}
      <path d="M38 40 C38 48 40 50 48 52 C40 54 38 56 38 64 C38 56 36 54 28 52 C36 50 38 48 38 40" {...drawProps} />
      <path d="M170 150 C170 156 171 160 170 166" {...drawProps} />
      <path d="M163 158 C167 157 173 159 177 158" {...drawProps} />
      <path d="M24 120 l.01 0" strokeWidth={8} {...drawProps} />
    </MotifSvg>
  )
}