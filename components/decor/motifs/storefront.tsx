import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const AWNING = "M46 30 C80 28 120 28 154 30 L172 62 L28 62 Z"
const DOOR =
  "M104 176 C104 156 104 142 104 130 C112 126 126 126 134 130 C134 142 134 158 134 176 Z"
const WINDOW =
  "M54 104 C70 103 84 104 92 104 C93 120 91 134 92 150 C80 151 66 149 54 150 C55 134 53 118 54 104 Z"

export function StorefrontMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={AWNING} {...fillProps} fillOpacity={0.24} />
      <path d={DOOR} {...fillProps} fillOpacity={0.24} />
      <path d={WINDOW} {...fillProps} fillOpacity={0.2} />

      {/* awning + stripes + scalloped edge */}
      <path d={AWNING} {...drawProps} />
      <path d="M73 29 C70 40 67 52 64 62" {...drawProps} />
      <path d="M100 29 L100 62" {...drawProps} />
      <path d="M127 29 C130 40 133 52 136 62" {...drawProps} />
      <path
        d="M28 62 C28 80 64 80 64 62 C64 80 100 80 100 62 C100 80 136 80 136 62 C136 80 172 80 172 62"
        {...drawProps}
      />

      {/* walls + ground */}
      <path d="M40 78 C40 110 41 150 40 176" {...drawProps} />
      <path d="M160 78 C160 110 159 150 160 176" {...drawProps} />
      <path d="M22 178 C70 180 130 177 178 178" {...drawProps} />

      {/* door + knob */}
      <path d={DOOR} {...drawProps} />
      <path d="M126 154 l.01 0" strokeWidth={7} {...drawProps} />

      {/* window + shine */}
      <path d={WINDOW} {...drawProps} />
      <path d="M62 114 C66 112 70 112 74 112" {...drawProps} />

      {/* sparkle */}
      <path d="M176 24 C176 30 178 32 184 34 C178 36 176 38 176 44 C176 38 174 36 168 34 C174 32 176 30 176 24" {...drawProps} />
    </MotifSvg>
  )
}