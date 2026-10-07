import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const DIAL =
  "M26 142 C25 100 58 66 100 66 C142 66 175 100 174 142"
const HUB =
  "M100 133 C105 133 109 137 109 142 C109 147 105 151 100 151 C95 151 91 147 91 142 C91 137 95 133 100 133 Z"

export function GaugeMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={`${DIAL} Z`} {...fillProps} fillOpacity={0.12} />
      <path d={HUB} {...fillProps} fillOpacity={0.32} />

      {/* dial + inner arc + base */}
      <path d={DIAL} {...drawProps} />
      <path d="M46 142 C46 112 70 86 100 86 C130 86 154 112 154 142" {...drawProps} />
      <path d="M18 144 C58 146 142 143 182 145" {...drawProps} />

      {/* ticks */}
      <path d="M45 122 L36 119" {...drawProps} />
      <path d="M59 101 L52 94" {...drawProps} />
      <path d="M78 88 L74.5 79" {...drawProps} />
      <path d="M100 84 L100 74" {...drawProps} />
      <path d="M122 88 L125.5 79" {...drawProps} />
      <path d="M141 101 L148 94" {...drawProps} />
      <path d="M154.5 122 L164 119" {...drawProps} />

      {/* needle + hub */}
      <path d="M100 142 C108 132 120 118 131 105" {...drawProps} />
      <path d={HUB} {...drawProps} />

      {/* readout lines */}
      <path d="M70 168 C84 167 98 169 112 168" {...drawProps} />
      <path d="M82 180 C90 179 98 181 106 180" {...drawProps} />

      {/* sparkle */}
      <path d="M168 40 C168 48 170 50 178 52 C170 54 168 56 168 64 C168 56 166 54 158 52 C166 50 168 48 168 40" {...drawProps} />
    </MotifSvg>
  )
}