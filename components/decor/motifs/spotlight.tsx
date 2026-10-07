import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const LAMP =
  "M72 22 C86 20 114 20 128 22 C132 34 132 44 128 54 C114 56 86 56 72 54 C68 44 68 34 72 22 Z"
const STAGE =
  "M28 160 C28 150 60 144 100 144 C140 144 172 150 172 160 C172 172 140 178 100 178 C60 178 28 172 28 160 Z"

export function SpotlightMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d="M74 58 L28 160 C60 174 140 174 172 160 L126 58 Z" {...fillProps} fillOpacity={0.16} />
      <path d={LAMP} {...fillProps} fillOpacity={0.28} />
      <path d={STAGE} {...fillProps} fillOpacity={0.24} />

      {/* mount */}
      <path d="M100 22 C100 16 100 12 100 8" {...drawProps} />
      <path d="M84 8 C92 7 108 7 116 8" {...drawProps} />

      {/* lamp */}
      <path d={LAMP} {...drawProps} />
      <path d="M82 38 C92 37 108 39 118 38" {...drawProps} />

      {/* beam edges */}
      <path d="M74 58 C60 90 44 128 28 160" {...drawProps} />
      <path d="M126 58 C140 90 156 128 172 160" {...drawProps} />

      {/* stage */}
      <path d={STAGE} {...drawProps} />

      {/* star in the beam */}
      <path d="M100 98 C100 108 102 110 112 112 C102 114 100 116 100 126 C100 116 98 114 88 112 C98 110 100 108 100 98" {...drawProps} />

      {/* side sparkles */}
      <path d="M32 60 C32 66 34 68 40 70 C34 72 32 74 32 80 C32 74 30 72 24 70 C30 68 32 66 32 60" {...drawProps} />
      <path d="M170 96 C170 102 171 106 170 112" {...drawProps} />
      <path d="M163 104 C167 103 173 105 177 104" {...drawProps} />
    </MotifSvg>
  )
}