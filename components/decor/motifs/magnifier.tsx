import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const LENS =
  "M84 32 C113 31 137 55 136 84 C135 113 112 136 84 136 C55 135 32 112 32 84 C33 55 56 33 84 32 Z"
const HANDLE =
  "M120 124 C134 134 146 146 158 160 C164 167 163 173 158 176 C152 180 146 178 141 172 C130 158 118 146 108 132"

export function MagnifierMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={LENS} {...fillProps} fillOpacity={0.1} />
      <path d={`${HANDLE} Z`} {...fillProps} fillOpacity={0.3} />

      {/* lens + glare */}
      <path d={LENS} {...drawProps} />
      <path d="M58 70 C62 58 72 50 84 48" {...drawProps} />

      {/* handle */}
      <path d={HANDLE} {...drawProps} />

      {/* ranking bars inside the lens */}
      <path d="M64 108 C64 102 65 96 64 92" {...drawProps} />
      <path d="M84 108 C84 98 85 82 84 74" {...drawProps} />
      <path d="M104 108 C104 100 105 90 104 84" {...drawProps} />
      <path d="M54 110 C70 111 98 109 114 110" {...drawProps} />

      {/* sparkle */}
      <path d="M170 34 C170 42 172 44 180 46 C172 48 170 50 170 58 C170 50 168 48 160 46 C168 44 170 42 170 34" {...drawProps} />
    </MotifSvg>
  )
}