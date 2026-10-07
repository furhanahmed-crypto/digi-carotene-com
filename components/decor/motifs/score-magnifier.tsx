import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const LENS =
  "M88 34 C118 33 142 58 142 88 C142 118 118 142 88 142 C58 142 34 118 34 88 C34 58 58 35 88 34 Z"
const HANDLE =
  "M127 127 C142 142 154 154 166 166 C172 172 171 178 166 181 C160 184 154 182 150 177 C138 164 126 152 114 140 Z"
const RING =
  "M88 62 C102.4 62 114 73.6 114 88 C114 102.4 102.4 114 88 114 C73.6 114 62 102.4 62 88 C62 73.6 73.6 62 88 62 Z"

export function ScoreMagnifierMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={LENS} {...fillProps} fillOpacity={0.1} />
      <path d={HANDLE} {...fillProps} fillOpacity={0.3} />

      {/* lens + glare */}
      <path d={LENS} {...drawProps} />
      <path d="M52 70 C56 58 64 50 76 46" {...drawProps} />

      {/* handle */}
      <path d={HANDLE} {...drawProps} />

      {/* score ring: faint track + heavy progress arc */}
      <path d={RING} strokeOpacity={0.3} {...drawProps} />
      <path
        d="M88 62 C102.4 62 114 73.6 114 88 C114 102.4 102.4 114 88 114 C73.6 114 62 102.4 62 88"
        strokeWidth={7}
        {...drawProps}
      />

      {/* check in the middle */}
      <path d="M77 89 C81 93 84 97 87 101 C93 93 98 87 104 79" {...drawProps} />

      {/* sparkle + plus */}
      <path d="M170 34 C170 42 172 44 180 46 C172 48 170 50 170 58 C170 50 168 48 160 46 C168 44 170 42 170 34" {...drawProps} />
      <path d="M34 168 C34 174 35 178 34 184" {...drawProps} />
      <path d="M27 176 C31 175 37 177 41 176" {...drawProps} />
    </MotifSvg>
  )
}