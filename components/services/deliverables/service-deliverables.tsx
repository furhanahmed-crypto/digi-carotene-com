import { BarChartMotif } from "@/components/decor/motifs"
import { Reveal } from "@/components/motion/reveal"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"
import type { ServicePanelTone } from "@/types/home"

const tones: ServicePanelTone[] = [
  "yellow",
  "green",
  "blue",
  "purple",
  "red",
]

const toneClass: Record<ServicePanelTone, string> = {
  yellow: "bg-brand-yellow text-ink",
  green: "bg-brand-green text-white",
  blue: "bg-brand-blue text-white",
  purple: "bg-brand-purple text-white",
  red: "bg-brand-red text-white",
}

type ServiceDeliverablesProps = {
  items: string[]
}

/** Multi-color capability cards — same language as homepage service panels. */
export function ServiceDeliverables({ items }: ServiceDeliverablesProps) {
  const cols =
    items.length <= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : items.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 xl:grid-cols-3"

  return (
    <SectionLayout tone="white" decor={pageWhiteDecor}>
      <Reveal>
        <SectionMark
          data-reveal="eyebrow"
          adornment={<BarChartMotif />}
        >
          Deliverables
        </SectionMark>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal="heading"
            className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
          >
            What we put in motion.
          </h2>
          <p
            data-reveal="text"
            className="max-w-md text-sm text-muted-foreground md:text-base"
          >
            Concrete workstreams — not a vague retainer promise.
          </p>
        </div>

        <div data-reveal-group className={cn("mt-10 grid gap-4", cols)}>
          {items.map((item, index) => {
            const tone = tones[index % tones.length]
            return (
              <article
                key={item}
                data-reveal="card"
                className={cn(
                  "flex min-h-44 flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1",
                  toneClass[tone]
                )}
              >
                <span className="font-display text-3xl font-medium opacity-80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl leading-tight font-medium md:text-2xl">
                  {item}
                </h3>
              </article>
            )
          })}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
