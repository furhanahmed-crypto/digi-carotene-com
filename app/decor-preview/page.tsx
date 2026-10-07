import { DECOR_VARIANTS, type DecorVariant } from "@/components/decor"
import { DecorPreviewBoard } from "@/components/decor/decor-preview-board"
import { ModeToggle } from "@/components/shared/mode-toggle"

const SECTION_GROUPS: {
  label: string
  variants: DecorVariant[]
}[] = [
  {
    label: "Hero / discovery",
    variants: ["search-ripple", "carrot-sprig", "chat-citation"],
  },
  {
    label: "Services",
    variants: ["magnifier", "node-graph", "megaphone", "newspaper"],
  },
  {
    label: "Audiences",
    variants: [
      "map-pin",
      "storefront",
      "mall-bag",
      "campus-cap",
      "handshake",
      "rocket",
    ],
  },
  {
    label: "Campaign / yellow band",
    variants: ["camera", "spotlight", "confetti", "film-strip", "sparkles"],
  },
  {
    label: "Proof / case studies",
    variants: ["bar-chart", "trophy", "target-arrow", "trend-line"],
  },
  {
    label: "Process / why us",
    variants: [
      "dotted-path",
      "compass",
      "gauge",
      "shield-check",
      "gear",
    ],
  },
  {
    label: "FAQ / CTA",
    variants: [
      "question-mark",
      "speech-bubbles",
      "radar-sweep",
      "scan-lines",
      "score-magnifier",
    ],
  },
]

export default function DecorPreviewPage() {
  const listed = new Set(SECTION_GROUPS.flatMap((g) => g.variants))
  const orphan = DECOR_VARIANTS.filter((v) => !listed.has(v))

  return (
    <main className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <div>
            <p className="text-[12px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              Approval preview
            </p>
            <h1 className="font-display text-2xl font-medium md:text-3xl">
              Section decor motifs
            </h1>
          </div>
          <ModeToggle />
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-12 px-5 py-10 md:px-8 md:py-14">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Hand-drawn motifs via currentColor. Columns: yellow (#C99A12/70), white
          (#E6C55C/70), cream (#D9B040/65). Toggle dark mode for charcoal + soft
          gold. Live placements inherit the same tone tokens from SectionLayout.
        </p>

        {SECTION_GROUPS.map((group) => (
          <section key={group.label} className="space-y-4">
            <h2 className="font-display text-xl font-medium md:text-2xl">
              {group.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.variants.map((variant) => (
                <DecorPreviewBoard key={variant} variant={variant} />
              ))}
            </div>
          </section>
        ))}

        {orphan.length > 0 ? (
          <section className="space-y-4">
            <h2 className="font-display text-xl font-medium">Other</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {orphan.map((variant) => (
                <DecorPreviewBoard key={variant} variant={variant} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}
