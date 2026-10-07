import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const PIN =
  "M100 22 C132 22 154 46 154 76 C154 112 118 140 100 168 C82 140 46 112 46 76 C46 46 68 22 100 22 Z"
const EYE =
  "M100 56 C113 55 122 64 122 76 C122 88 113 97 100 97 C87 97 78 88 78 76 C78 64 87 56 100 56 Z"
const GROUND =
  "M52 178 C70 170 130 170 148 178 C130 186 70 186 52 178 Z"

export function MapPinMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={PIN} {...fillProps} />
      <path d={EYE} {...fillProps} fillOpacity={0.3} />
      <path d={GROUND} {...fillProps} fillOpacity={0.24} />

      {/* pin */}
      <path d={PIN} {...drawProps} />
      <path d={EYE} {...drawProps} />

      {/* ground + ripple */}
      <path d={GROUND} {...drawProps} />
      <path d="M30 180 C44 164 156 164 170 180 C156 196 44 196 30 180 Z" {...drawProps} />

      {/* sparkle + plus */}
      <path d="M172 30 C172 38 174 40 182 42 C174 44 172 46 172 54 C172 46 170 44 162 42 C170 40 172 38 172 30" {...drawProps} />
      <path d="M28 44 C28 50 29 54 28 60" {...drawProps} />
      <path d="M21 52 C25 51 31 53 35 52" {...drawProps} />
    </MotifSvg>
  )
}