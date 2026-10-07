import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/shared/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function Differentiators() {
  const { differentiators } = homeSections

  return (
    <SectionLayout tone="white">
      <Reveal>
        <SectionMark>{differentiators.eyebrow}</SectionMark>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
            {differentiators.headline}
          </h2>
          <p className="max-w-md text-sm text-muted-foreground md:text-base">
            {differentiators.body}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {differentiators.cards.map((card, index) => (
          <Reveal key={card.id} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-[1px] transition-colors hover:border-brand-yellow/40">
              <span className="font-display text-3xl font-medium text-brand-yellow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionLayout>
  )
}
