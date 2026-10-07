import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const SHEET =
  "M26 38 C25 32 30 28 36 28 C70 29 110 27 148 28 C154 28 158 32 158 38 C159 80 157 130 158 166 C158 172 154 174 148 174 L44 174 C32 174 26 168 26 160 C27 120 25 76 26 38 Z"
const SIDE =
  "M158 56 C168 55 176 56 182 57 C186 58 188 62 188 68 C189 100 187 140 188 160 C188 168 182 174 174 174 L158 174 Z"
const PHOTO =
  "M40 72 C56 71 70 72 84 72 C85 84 83 96 84 108 C70 109 56 107 40 108 C41 96 39 84 40 72 Z"

export function NewspaperMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={SHEET} {...fillProps} fillOpacity={0.1} />
      <path d={SIDE} {...fillProps} fillOpacity={0.2} />
      <path d={PHOTO} {...fillProps} fillOpacity={0.28} />

      {/* sheets */}
      <path d={SHEET} {...drawProps} />
      <path d={SIDE} {...drawProps} />

      {/* headline (heavier stroke) */}
      <path d="M40 46 C62 45 92 47 118 46" strokeWidth={8} {...drawProps} />

      {/* photo */}
      <path d={PHOTO} {...drawProps} />
      <path d="M44 102 C52 92 60 88 66 94 C70 98 74 98 80 92" {...drawProps} />

      {/* text beside photo */}
      <path d="M96 74 C106 73 116 75 144 74" {...drawProps} />
      <path d="M96 88 C108 87 120 89 144 88" {...drawProps} />
      <path d="M96 102 C106 101 118 103 144 102" {...drawProps} />

      {/* text below */}
      <path d="M40 124 C70 123 110 125 144 124" {...drawProps} />
      <path d="M40 138 C64 137 100 139 144 138" {...drawProps} />
      <path d="M40 152 C60 151 84 153 104 152" {...drawProps} />

      {/* side page lines */}
      <path d="M168 72 C171 71 175 73 178 72" {...drawProps} />
      <path d="M168 88 C171 87 175 89 178 88" {...drawProps} />
      <path d="M168 104 C171 103 175 105 178 104" {...drawProps} />
      <path d="M168 120 C171 119 175 121 178 120" {...drawProps} />
    </MotifSvg>
  )
}