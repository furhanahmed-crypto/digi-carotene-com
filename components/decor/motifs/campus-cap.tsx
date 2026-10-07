import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BOARD =
  "M100 44 C130 56 160 68 184 80 C160 92 130 104 100 116 C70 104 40 92 16 80 C40 68 70 56 100 44 Z"
const TASSEL =
  "M172 127 C176 126 181 126 185 127 C186 137 186 147 187 157 C181 159 176 159 170 157 C171 147 172 137 172 127 Z"

export function CampusCapMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BOARD} {...fillProps} />
      <path d={TASSEL} {...fillProps} fillOpacity={0.26} />

      {/* cap base under the board */}
      <path d="M54 98 C53 112 55 124 57 134 C73 150 127 150 143 134 C145 124 147 112 146 98" {...drawProps} />

      {/* board */}
      <path d={BOARD} {...drawProps} />

      {/* button, cord, tassel */}
      <path d="M100 78 C103 78 105 80 105 82 C105 85 103 87 100 87 C97 87 95 85 95 82 C95 79 97 78 100 78" {...drawProps} />
      <path d="M105 82 C130 86 156 86 176 90 C177 104 176 116 178 127" {...drawProps} />
      <path d={TASSEL} {...drawProps} />

      {/* sparkle */}
      <path d="M30 40 C30 46 32 48 38 49 C32 50 30 52 30 58 C30 52 28 50 22 49 C28 48 30 46 30 40" {...drawProps} />
    </MotifSvg>
  )
}