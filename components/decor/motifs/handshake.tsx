import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const CLASP =
  "M40 84 C58 78 76 70 96 72 C110 73 122 80 132 84 L160 84 C160 100 160 114 160 128 L140 128 C128 138 116 146 104 148 C92 150 82 144 74 136 C62 134 50 130 40 126 C41 112 39 98 40 84 Z"
const CUFF_L =
  "M10 80 C20 79 30 79 40 80 C41 96 41 110 40 126 C30 127 20 127 10 126 C11 110 9 96 10 80 Z"
const CUFF_R =
  "M160 80 C170 79 180 79 190 80 C191 96 191 110 190 126 C180 127 170 127 160 126 C161 110 159 96 160 80 Z"

export function HandshakeMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={CLASP} {...fillProps} />
      <path d={CUFF_L} {...fillProps} fillOpacity={0.28} />
      <path d={CUFF_R} {...fillProps} fillOpacity={0.28} />

      {/* cuffs + clasp */}
      <path d={CUFF_L} {...drawProps} />
      <path d={CUFF_R} {...drawProps} />
      <path d={CLASP} {...drawProps} />

      {/* seam between the two hands */}
      <path d="M60 100 C74 96 86 92 98 98 C108 103 118 100 130 96" {...drawProps} />

      {/* thumb */}
      <path d="M96 72 C100 84 108 90 118 94 C124 96 128 92 126 88" {...drawProps} />

      {/* fingers */}
      <path d="M76 112 C84 120 92 126 100 130" {...drawProps} />
      <path d="M88 104 C96 112 104 118 112 122" {...drawProps} />
      <path d="M100 98 C108 104 114 110 122 114" {...drawProps} />

      {/* "deal" rays */}
      <path d="M100 42 C100 48 101 52 100 58" {...drawProps} />
      <path d="M76 48 C79 52 81 56 84 60" {...drawProps} />
      <path d="M124 48 C121 52 119 56 116 60" {...drawProps} />
    </MotifSvg>
  )
}