import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BODY =
  "M50 82 C80 70 108 56 134 42 C141 39 147 43 147 51 C148 80 148 110 147 138 C147 146 141 150 134 147 C108 134 80 122 50 112 C45 110 44 104 44 98 C44 92 45 84 50 82 Z"
const HANDLE =
  "M64 114 C66 130 68 144 70 158 C71 164 77 167 84 165 C91 163 94 158 92 152 C90 142 87 132 83 121 Z"

export function MegaphoneMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BODY} {...fillProps} />
      <path d={HANDLE} {...fillProps} fillOpacity={0.28} />

      {/* body + mouth rim + back cap */}
      <path d={BODY} {...drawProps} />
      <path d="M134 44 C128 70 128 118 134 146" {...drawProps} />
      <path d="M56 86 C60 92 60 102 56 108" {...drawProps} />

      {/* handle */}
      <path d={HANDLE} {...drawProps} />

      {/* sound waves */}
      <path d="M164 70 C172 82 172 106 164 118" {...drawProps} />
      <path d="M178 56 C192 74 192 114 178 132" {...drawProps} />

      {/* sparkle */}
      <path d="M70 18 C70 26 72 28 80 30 C72 32 70 34 70 42 C70 34 68 32 60 30 C68 28 70 26 70 18" {...drawProps} />
    </MotifSvg>
  )
}