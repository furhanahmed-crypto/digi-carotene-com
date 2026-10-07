import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BAG =
  "M46 68 C70 67 130 67 154 68 C158 100 160 140 162 168 C162 174 158 178 152 178 L48 178 C42 178 38 174 38 168 C40 140 43 100 46 68 Z"
const STAR =
  "M100 108 C104 118 106 122 116 123 C108 130 106 134 109 144 C102 139 100 138 91 144 C94 134 92 130 84 123 C94 122 96 118 100 108 Z"

export function MallBagMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BAG} {...fillProps} />
      <path d={STAR} {...fillProps} fillOpacity={0.32} />

      {/* handles */}
      <path d="M74 68 C72 46 78 30 100 30 C122 30 128 46 126 68" {...drawProps} />

      {/* bag */}
      <path d={BAG} {...drawProps} />

      {/* fold line + handle holes */}
      <path d="M44 90 C80 94 120 94 156 90" {...drawProps} />
      <path d="M78 80 l.01 0" strokeWidth={8} {...drawProps} />
      <path d="M122 80 l.01 0" strokeWidth={8} {...drawProps} />

      {/* star */}
      <path d={STAR} {...drawProps} />

      {/* sparkles + plus */}
      <path d="M30 40 C30 48 32 50 40 52 C32 54 30 56 30 64 C30 56 28 54 20 52 C28 50 30 48 30 40" {...drawProps} />
      <path d="M170 56 C170 62 171 66 170 72" {...drawProps} />
      <path d="M163 64 C167 63 173 65 177 64" {...drawProps} />
    </MotifSvg>
  )
}