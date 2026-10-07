import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

function gearPath(cx: number, cy: number, teeth: number, rIn: number, rOut: number, seed = 0) {
  const step = 360 / teeth
  const rad = (d: number) => (d * Math.PI) / 180
  const pt = (deg: number, r: number, i: number) => {
    const rr = r * (1 + Math.sin(i * 2.7 + seed) * 0.016)
    return `${(cx + rr * Math.cos(rad(deg))).toFixed(1)} ${(cy + rr * Math.sin(rad(deg))).toFixed(1)}`
  }
  let d = ""
  for (let t = 0; t < teeth; t++) {
    const a = t * step - 90
    const corners: Array<[number, number]> = [
      [a - step * 0.28, rIn],
      [a - step * 0.15, rOut],
      [a + step * 0.15, rOut],
      [a + step * 0.28, rIn],
    ]
    corners.forEach(([deg, r], j) => {
      d += `${d === "" ? "M" : "L"}${pt(deg, r, t * 4 + j)} `
    })
  }
  return `${d}Z`
}

const BIG = gearPath(88, 92, 8, 48, 62, 0)
const SMALL = gearPath(160, 150, 6, 20, 27, 1.3)

const BIG_HOLE =
  "M88 74 C98 73 107 82 106 92 C105 102 97 110 88 110 C78 109 70 101 70 92 C71 82 79 75 88 74 Z"
const SMALL_HOLE =
  "M160 142 C165 142 168 146 168 150 C168 155 164 158 160 158 C155 158 152 154 152 150 C152 146 155 143 160 142 Z"

export function GearMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills (holes cut out) */}
      <path d={`${BIG} ${BIG_HOLE}`} fillRule="evenodd" {...fillProps} />
      <path d={`${SMALL} ${SMALL_HOLE}`} fillRule="evenodd" {...fillProps} fillOpacity={0.26} />

      {/* big gear */}
      <path d={BIG} {...drawProps} />
      <path d={BIG_HOLE} {...drawProps} />
      <path d="M52 78 C56 66 62 58 70 52" {...drawProps} />

      {/* small gear */}
      <path d={SMALL} {...drawProps} />
      <path d={SMALL_HOLE} {...drawProps} />

      {/* sparkle */}
      <path d="M160 24 C160 32 162 34 170 36 C162 38 160 40 160 48 C160 40 158 38 150 36 C158 34 160 32 160 24" {...drawProps} />
    </MotifSvg>
  )
}