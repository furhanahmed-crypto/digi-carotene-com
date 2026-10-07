import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BODY =
  "M26 74 C25 66 31 61 40 61 L62 61 C66 53 70 47 79 47 L121 47 C130 47 134 53 138 61 L160 61 C169 61 175 66 174 74 L175 142 C175 151 169 157 160 157 L40 157 C31 157 25 151 26 142 C27 120 26 96 26 74 Z"

export function CameraMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BODY} {...fillProps} />
      <path
        d="M100 87 C111 86 120 95 120 106 C120 117 111 126 100 126 C89 126 80 117 80 106 C80 95 89 87 100 87 Z"
        {...fillProps}
        fillOpacity={0.26}
      />

      {/* body */}
      <path d={BODY} {...drawProps} />

      {/* lens outer + inner + highlight */}
      <path d="M100 70 C120 69 136 85 136 106 C136 127 120 142 100 142 C80 142 64 127 64 106 C64 86 80 70 101 70" {...drawProps} />
      <path d="M100 87 C111 86 120 95 120 106 C120 117 111 126 100 126 C89 126 80 117 80 106 C80 95 89 87 100 87" {...drawProps} />
      <path d="M92 98 C95 94 99 93 103 93" {...drawProps} />

      {/* shutter button + viewfinder */}
      <path d="M146 77 C150 76 154 77 158 77" {...drawProps} />
      <path d="M42 76 C46 75 50 76 54 76" {...drawProps} />

      {/* flash rays */}
      <path d="M152 36 C154 31 156 28 158 25" {...drawProps} />
      <path d="M166 44 C170 41 174 39 178 38" {...drawProps} />
    </MotifSvg>
  )
}