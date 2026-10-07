import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const OUTER =
  "M100 24 C142 23 177 58 176 100 C175 142 142 177 100 176 C58 175 23 142 24 100 C25 58 58 25 100 24 Z"
const MID =
  "M100 50 C128 49 151 72 150 100 C149 128 128 151 100 150 C72 149 49 128 50 100 C51 72 72 51 100 50 Z"
const INNER =
  "M100 76 C113 75 125 87 124 100 C123 113 113 125 100 124 C87 123 75 113 76 100 C77 87 87 77 100 76 Z"
const SWEEP = "M100 100 L126 28.6 C147 36.3 163.7 52.8 171.4 74 Z"

const BLIP_A =
  "M62 59 C66 58 69 61 69 64 C69 68 66 70 62 70 C58 70 55 67 56 63 C56 60 59 59 62 59 Z"
const BLIP_B =
  "M140 121 C145 120 149 124 148 128 C148 133 143 135 139 134 C135 132 133 128 135 124 C136 122 138 121 140 121 Z"
const BLIP_C =
  "M78 133 C82 132 85 135 85 138 C85 142 82 144 78 144 C74 144 71 141 72 137 C72 135 75 133 78 133 Z"

export function RadarSweepMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={OUTER} {...fillProps} fillOpacity={0.08} />
      <path d={SWEEP} {...fillProps} fillOpacity={0.3} />
      <path d={BLIP_A} {...fillProps} fillOpacity={0.34} />
      <path d={BLIP_B} {...fillProps} fillOpacity={0.34} />
      <path d={BLIP_C} {...fillProps} fillOpacity={0.34} />

      {/* rings */}
      <path d={OUTER} {...drawProps} />
      <path d={MID} {...drawProps} />
      <path d={INNER} {...drawProps} />

      {/* crosshair */}
      <path d="M100 26 C101 70 99 130 100 174" {...drawProps} />
      <path d="M26 100 C70 99 130 101 174 100" {...drawProps} />

      {/* sweep wedge */}
      <path d={SWEEP} {...drawProps} />

      {/* blips */}
      <path d={BLIP_A} {...drawProps} />
      <path d={BLIP_B} {...drawProps} />
      <path d={BLIP_C} {...drawProps} />

      {/* sparkle */}
      <path d="M24 22 C24 28 26 30 32 32 C26 34 24 36 24 42 C24 36 22 34 16 32 C22 30 24 28 24 22" {...drawProps} />
    </MotifSvg>
  )
}