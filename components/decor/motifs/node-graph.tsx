import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

type Node = { x: number; y: number; r: number }

const f = (n: number) => n.toFixed(1)

/** Slightly imperfect circle. */
function blob({ x, y, r }: Node) {
  const k = r * 0.5523
  const o = (n: number) => (((x * 7 + y * 3 + n * 13) % 5) - 2) * 0.012 * r
  return (
    `M${f(x + o(1))} ${f(y - r)} ` +
    `C${f(x + k)} ${f(y - r + o(2))} ${f(x + r + o(3))} ${f(y - k)} ${f(x + r)} ${f(y + o(4))} ` +
    `C${f(x + r + o(5))} ${f(y + k)} ${f(x + k)} ${f(y + r + o(6))} ${f(x + o(7))} ${f(y + r)} ` +
    `C${f(x - k)} ${f(y + r + o(8))} ${f(x - r + o(9))} ${f(y + k)} ${f(x - r)} ${f(y + o(10))} ` +
    `C${f(x - r + o(11))} ${f(y - k)} ${f(x - k)} ${f(y - r + o(12))} ${f(x + o(1))} ${f(y - r)} Z`
  )
}

/** Slightly bowed line between the edges of two nodes. */
function edge(a: Node, b: Node) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const sx = a.x + ux * (a.r + 3)
  const sy = a.y + uy * (a.r + 3)
  const ex = b.x - ux * (b.r + 3)
  const ey = b.y - uy * (b.r + 3)
  const mx = (sx + ex) / 2 - uy * 4
  const my = (sy + ey) / 2 + ux * 4
  return `M${f(sx)} ${f(sy)} Q${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`
}

const HUB: Node = { x: 100, y: 100, r: 18 }
const A: Node = { x: 38, y: 50, r: 11 }
const B: Node = { x: 162, y: 46, r: 13 }
const D: Node = { x: 34, y: 148, r: 12 }
const E: Node = { x: 166, y: 150, r: 14 }
const F: Node = { x: 104, y: 26, r: 8 }

const SATELLITES = [A, B, D, E, F]
const EDGES: Array<[Node, Node]> = [
  [HUB, A], [HUB, B], [HUB, D], [HUB, E], [HUB, F],
  [A, F], [B, E],
]

export function NodeGraphMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={blob(HUB)} {...fillProps} fillOpacity={0.3} />
      {SATELLITES.map((n) => (
        <path key={`f${n.x}-${n.y}`} d={blob(n)} {...fillProps} fillOpacity={0.2} />
      ))}

      {/* connections */}
      {EDGES.map(([a, b]) => (
        <path key={`e${a.x}${a.y}-${b.x}${b.y}`} d={edge(a, b)} {...drawProps} />
      ))}

      {/* nodes */}
      <path d={blob(HUB)} {...drawProps} />
      <path d={blob({ x: 100, y: 100, r: 6 })} {...drawProps} />
      {SATELLITES.map((n) => (
        <path key={`n${n.x}-${n.y}`} d={blob(n)} {...drawProps} />
      ))}

      {/* sparkle */}
      <path d="M172 100 C172 108 174 110 182 112 C174 114 172 116 172 124 C172 116 170 114 162 112 C170 110 172 108 172 100" {...drawProps} />
    </MotifSvg>
  )
}