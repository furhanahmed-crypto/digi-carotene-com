import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const DOTS: Array<[number, number]> = [
  [34, 162], [48, 166], [62, 164], [74, 156], [80, 144], [78, 132],
  [70, 122], [60, 114], [56, 102], [62, 90], [74, 84], [88, 86],
  [100, 88], [112, 84], [124, 80], [136, 78], [148, 76],
]

const PIN =
  "M162 24 C173 24 181 32 181 42 C181 54 170 64 162 74 C154 64 143 54 143 42 C143 32 151 24 162 24 Z"
const START =
  "M28 154 C34 154 38 158 38 164 C38 170 33 174 27 173 C21 172 18 167 19 161 C20 157 24 154 28 154 Z"

export function DottedPathMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={PIN} {...fillProps} fillOpacity={0.24} />
      <path d={START} {...fillProps} fillOpacity={0.24} />

      {/* route dots */}
      {DOTS.map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x} ${y} l.01 0`} strokeWidth={8} {...drawProps} />
      ))}

      {/* start ring */}
      <path d={START} {...drawProps} />

      {/* destination pin */}
      <path d={PIN} {...drawProps} />
      <path d="M162 34 C166 34 170 37 170 41 C170 46 166 49 162 49 C158 49 154 46 154 41 C154 37 158 34 162 34" {...drawProps} />

      {/* treasure-map X */}
      <path d="M146 141 C152 147 160 154 166 160" {...drawProps} />
      <path d="M166 140 C160 147 152 154 146 160" {...drawProps} />
    </MotifSvg>
  )
}