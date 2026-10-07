import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

export function ScanLinesMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills: scan band */}
      <path
        d="M30 92 C70 91 130 93 170 92 L170 108 C130 109 70 107 30 108 Z"
        {...fillProps}
        fillOpacity={0.26}
      />

      {/* viewfinder corners */}
      <path d="M30 62 C30 44 38 34 56 34" {...drawProps} />
      <path d="M144 34 C162 34 170 44 170 62" {...drawProps} />
      <path d="M30 138 C30 156 38 166 56 166" {...drawProps} />
      <path d="M144 166 C162 166 170 156 170 138" {...drawProps} />

      {/* content lines above the beam */}
      <path d="M52 62 C80 61 120 63 148 62" {...drawProps} />
      <path d="M52 78 C70 77 100 79 118 78" {...drawProps} />

      {/* scan beam */}
      <path d="M20 100 C60 98 140 102 180 100" strokeWidth={7} {...drawProps} />

      {/* content lines below the beam */}
      <path d="M52 122 C80 121 120 123 148 122" {...drawProps} />
      <path d="M52 138 C70 137 100 139 126 138" {...drawProps} />

      {/* sparkle */}
      <path d="M178 20 C178 26 180 28 186 30 C180 32 178 34 178 40 C178 34 176 32 170 30 C176 28 178 26 178 20" {...drawProps} />
    </MotifSvg>
  )
}