import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const RING =
  "M100 28 C140 27 173 60 172 100 C171 141 140 173 100 172 C60 171 28 140 28 100 C28 60 60 29 100 28 Z"

export function CompassMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={RING} {...fillProps} fillOpacity={0.1} />
      <path d="M138 62 C128 80 120 98 113 113 C100 106 94 98 87 87 C106 80 122 70 138 62 Z" {...fillProps} fillOpacity={0.3} />

      {/* outer ring */}
      <path d={RING} {...drawProps} />

      {/* N + cardinal ticks */}
      <path d="M93 20 C92 14 93 10 93 6 C98 12 103 16 107 20 C107 14 106 10 107 6" {...drawProps} />
      <path d="M100 36 C100 42 101 46 100 50" {...drawProps} />
      <path d="M100 150 C100 155 101 159 100 164" {...drawProps} />
      <path d="M36 100 C42 101 46 99 50 100" {...drawProps} />
      <path d="M150 100 C155 99 159 101 164 100" {...drawProps} />

      {/* needle */}
      <path d="M138 62 C128 80 120 98 113 113 C100 106 94 98 87 87 C106 80 122 70 138 62 Z" {...drawProps} />
      <path d="M62 138 C72 120 80 102 87 87" {...drawProps} />
      <path d="M62 138 C80 134 98 124 113 113" {...drawProps} />

      {/* pivot */}
      <path d="M100 96 C103 96 105 98 105 101 C105 104 103 106 100 106 C97 106 95 104 95 101 C95 98 97 96 100 96" {...drawProps} />
    </MotifSvg>
  )
}