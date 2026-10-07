import { MotifSvg, drawProps, fillProps, type MotifProps } from "./motif-base"

const BAR =
  "M34 92 C34 80 42 74 54 74 L146 74 C158 74 166 80 166 92 C167 104 160 112 148 112 L52 112 C40 112 33 104 34 92 Z"

export function SearchRippleMotif(props: MotifProps) {
  return (
    <MotifSvg {...props}>
      {/* tone fills */}
      <path d={BAR} {...fillProps} />

      {/* search bar */}
      <path d={BAR} {...drawProps} />

      {/* mini magnifier */}
      <path d="M58 84 C63 84 67 88 67 93 C67 98 63 102 58 102 C53 102 49 98 49 93 C49 88 53 84 58 84 Z" {...drawProps} />
      <path d="M65 100 C68 103 70 106 72 108" {...drawProps} />

      {/* query text */}
      <path d="M86 93 C102 92 120 94 144 93" {...drawProps} />

      {/* ripples above */}
      <path d="M70 62 C86 44 114 44 130 62" {...drawProps} />
      <path d="M52 52 C76 24 124 24 148 52" {...drawProps} />
      <path d="M36 42 C66 4 134 4 164 42" {...drawProps} />

      {/* ripples below */}
      <path d="M70 124 C86 142 114 142 130 124" {...drawProps} />
      <path d="M52 134 C76 162 124 162 148 134" {...drawProps} />
      <path d="M36 144 C66 182 134 182 164 144" {...drawProps} />

      {/* side dots */}
      <path d="M16 92 l.01 0" strokeWidth={8} {...drawProps} />
      <path d="M184 92 l.01 0" strokeWidth={8} {...drawProps} />
    </MotifSvg>
  )
}