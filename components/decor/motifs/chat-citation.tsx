import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BUBBLE_A =
  "M30 36 C29 29 34 24 41 24 C70 25 100 23 128 24 C135 24 139 29 138 36 C139 54 137 72 138 84 C138 91 134 95 127 94 L72 94 L47 118 L49 94 L41 95 C34 95 30 91 30 84 C31 68 29 52 30 36 Z"
const BUBBLE_B =
  "M108 120 C107 113 112 108 119 108 C138 109 154 107 170 108 C177 108 181 113 180 120 C181 130 179 140 180 150 C180 157 176 161 169 160 L160 160 L163 181 L139 160 L119 161 C112 161 108 157 108 150 C109 140 107 130 108 120 Z"

export function ChatCitationMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BUBBLE_A} {...fillProps} />
      <path d={BUBBLE_B} {...fillProps} fillOpacity={0.22} />

      {/* question bubble */}
      <path d={BUBBLE_A} {...drawProps} />
      <path d="M60 46 C52 49 48 57 50 64 C52 69 59 69 61 64 C63 60 60 56 56 57" {...drawProps} />
      <path d="M84 46 C76 49 72 57 74 64 C76 69 83 69 85 64 C87 60 84 56 80 57" {...drawProps} />
      <path d="M100 52 C108 51 114 52 122 51" {...drawProps} />
      <path d="M100 64 C106 63 112 65 120 64" {...drawProps} />
      <path d="M50 82 C72 81 96 83 118 81" {...drawProps} />

      {/* answer bubble with [1] citation */}
      <path d={BUBBLE_B} {...drawProps} />
      <path d="M130 122 L124 122 L124 148 L130 148" {...drawProps} />
      <path d="M158 122 L164 122 L164 148 L158 148" {...drawProps} />
      <path d="M137 131 C140 129 144 126 146 123 C146 131 145 139 146 147" {...drawProps} />
      <path d="M140 147 C144 148 148 147 152 147" {...drawProps} />

      {/* "cited" arrow */}
      <path d="M142 76 C156 80 160 92 156 102" {...drawProps} />
      <path d="M149 97 C152 101 154 103 156 106 C159 102 161 100 164 98" {...drawProps} />

      {/* sparkle */}
      <path d="M166 32 C166 42 168 46 178 48 C168 50 166 54 166 64 C166 54 164 50 154 48 C164 46 166 42 166 32" {...drawProps} />
    </MotifSvg>
  )
}