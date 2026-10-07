import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const STRIP =
  "M14 62 C13 58 16 55 20 55 L180 54 C184 54 187 57 187 61 L188 140 C188 144 185 147 181 147 L19 148 C15 148 12 145 12 141 C13 114 13 88 14 62 Z"

const HOLE_X = [24, 46, 68, 90, 112, 134, 156]

const hole = (x: number, y: number) =>
  `M${x} ${y} C${x + 4} ${y - 1} ${x + 8} ${y} ${x + 12} ${y} C${x + 13} ${y + 3} ${x + 12} ${y + 6} ${x + 12} ${y + 8} C${x + 8} ${y + 9} ${x + 4} ${y + 8} ${x} ${y + 8} C${x - 1} ${y + 5} ${x + 1} ${y + 2} ${x} ${y} Z`

export function FilmStripMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      <g transform="rotate(-8 100 100)">
        {/* tone fills */}
        <path d={STRIP} {...fillProps} fillOpacity={0.1} />
        <path d="M24 78 C38 77 52 78 66 78 C67 93 65 108 66 124 C52 125 38 123 24 124 C25 108 23 93 24 78 Z" {...fillProps} fillOpacity={0.26} />
        <path d="M78 78 C92 77 106 78 120 78 C121 93 119 108 120 124 C106 125 92 123 78 124 C79 108 77 93 78 78 Z" {...fillProps} fillOpacity={0.26} />
        <path d="M132 78 C146 77 160 78 174 78 C175 93 173 108 174 124 C160 125 146 123 132 124 C133 108 131 93 132 78 Z" {...fillProps} fillOpacity={0.26} />

        {/* strip */}
        <path d={STRIP} {...drawProps} />

        {/* sprocket holes */}
        {HOLE_X.map((x) => (
          <path key={`t${x}`} d={hole(x, 61)} {...drawProps} />
        ))}
        {HOLE_X.map((x) => (
          <path key={`b${x}`} d={hole(x, 133)} {...drawProps} />
        ))}

        {/* frames */}
        <path d="M24 78 C38 77 52 78 66 78 C67 93 65 108 66 124 C52 125 38 123 24 124 C25 108 23 93 24 78 Z" {...drawProps} />
        <path d="M78 78 C92 77 106 78 120 78 C121 93 119 108 120 124 C106 125 92 123 78 124 C79 108 77 93 78 78 Z" {...drawProps} />
        <path d="M132 78 C146 77 160 78 174 78 C175 93 173 108 174 124 C160 125 146 123 132 124 C133 108 131 93 132 78 Z" {...drawProps} />

        {/* frame 1: sun + hill */}
        <path d="M45 88 C50 87 54 91 54 96 C54 101 50 104 45 104 C40 104 36 100 37 95 C37 91 41 88 45 88" {...drawProps} />
        <path d="M26 118 C34 110 44 108 52 112 C58 114 62 116 64 118" {...drawProps} />

        {/* frame 2: mountains */}
        <path d="M82 118 C90 104 96 96 100 90 C106 100 110 108 116 118" {...drawProps} />
        <path d="M100 118 C104 112 108 108 112 104 C115 108 117 112 118 118" {...drawProps} />

        {/* frame 3: play */}
        <path d="M146 90 C156 96 164 101 168 102 C160 108 152 113 146 116 C147 107 147 98 146 90" {...drawProps} />
      </g>
    </MotifSvg>
  )
}