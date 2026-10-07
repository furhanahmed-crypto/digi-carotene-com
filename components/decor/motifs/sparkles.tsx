import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const f = (n: number) => n.toFixed(1)

/** Four-point star with concave sides. */
function star(cx: number, cy: number, r: number) {
  const k = r * 0.28
  return (
    `M${f(cx)} ${f(cy - r)} C${f(cx)} ${f(cy - k)} ${f(cx + k)} ${f(cy)} ${f(cx + r)} ${f(cy)} ` +
    `C${f(cx + k)} ${f(cy)} ${f(cx)} ${f(cy + k)} ${f(cx)} ${f(cy + r)} ` +
    `C${f(cx)} ${f(cy + k)} ${f(cx - k)} ${f(cy)} ${f(cx - r)} ${f(cy)} ` +
    `C${f(cx - k)} ${f(cy)} ${f(cx)} ${f(cy - k)} ${f(cx)} ${f(cy - r)} Z`
  )
}

const STARS: Array<[number, number, number, number]> = [
  [92, 104, 58, 0.26],
  [160, 48, 30, 0.22],
  [152, 156, 22, 0.22],
  [36, 44, 15, 0.2],
  [40, 164, 11, 0.2],
]

export function SparklesMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      {STARS.map(([x, y, r, o]) => (
        <path key={`f${x}-${y}`} d={star(x, y, r)} {...fillProps} fillOpacity={o} />
      ))}

      {/* stars */}
      {STARS.map(([x, y, r]) => (
        <path key={`s${x}-${y}`} d={star(x, y, r)} {...drawProps} />
      ))}

      {/* dots + plus */}
      <path d="M178 106 l.01 0" strokeWidth={8} {...drawProps} />
      <path d="M70 22 l.01 0" strokeWidth={8} {...drawProps} />
      <path d="M176 180 C176 186 177 190 176 196" {...drawProps} />
      <path d="M169 188 C173 187 179 189 183 188" {...drawProps} />
    </MotifSvg>
  )
}