import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const RECT_A =
  "M128 28 C136 30 144 33 152 37 C150 43 148 49 145 55 C137 52 129 49 122 46 C124 40 126 34 128 28 Z"
const RECT_B =
  "M148 158 C156 156 166 155 175 154 C176 161 177 168 178 175 C168 176 160 177 151 178 C150 171 149 165 148 158 Z"
const CIRCLE_A =
  "M44 106 C52 104 59 110 58 118 C57 126 49 130 42 126 C36 122 37 110 44 106 Z"
const CIRCLE_B =
  "M102 108 C107 107 111 111 110 116 C109 121 103 122 100 118 C97 114 98 109 102 108 Z"
const TRI =
  "M150 96 C158 101 166 106 174 112 C166 117 156 122 146 126 C148 116 149 106 150 96 Z"

export function ConfettiMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={RECT_A} {...fillProps} fillOpacity={0.24} />
      <path d={RECT_B} {...fillProps} fillOpacity={0.2} />
      <path d={CIRCLE_A} {...fillProps} fillOpacity={0.26} />
      <path d={CIRCLE_B} {...fillProps} fillOpacity={0.2} />
      <path d={TRI} {...fillProps} fillOpacity={0.24} />

      {/* shapes */}
      <path d={RECT_A} {...drawProps} />
      <path d={RECT_B} {...drawProps} />
      <path d={CIRCLE_A} {...drawProps} />
      <path d={CIRCLE_B} {...drawProps} />
      <path d={TRI} {...drawProps} />

      {/* streamers */}
      <path d="M26 42 C40 28 48 56 62 42 C76 28 84 56 98 42" {...drawProps} />
      <path d="M70 160 C78 148 84 172 92 160 C100 148 106 172 114 160" {...drawProps} />

      {/* plus + dot */}
      <path d="M88 64 C88 70 89 74 88 80" {...drawProps} />
      <path d="M81 72 C85 71 91 73 95 72" {...drawProps} />
      <path d="M30 150 C32 150 34 152 34 154 C34 157 32 158 30 158 C28 158 26 156 26 154 C26 152 28 150 30 150" {...drawProps} />

      {/* sparkle */}
      <path d="M176 62 C176 70 178 72 186 74 C178 76 176 78 176 86 C176 78 174 76 166 74 C174 72 176 70 176 62" {...drawProps} />
    </MotifSvg>
  )
}