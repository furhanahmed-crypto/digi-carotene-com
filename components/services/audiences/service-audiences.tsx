import { HandshakeMotif } from "@/components/decor/motifs"
import { Reveal } from "@/components/motion/reveal"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

type ServiceAudiencesProps = {
  items: string[]
}

/** Audience grid — same card language as homepage Who We Work With. */
export function ServiceAudiences({ items }: ServiceAudiencesProps) {
  return (
    <SectionLayout tone="white" decor={pageWhiteDecor}>
      <Reveal>
        <SectionMark
          data-reveal="eyebrow"
          adornment={<HandshakeMotif />}
        >
          Fit
        </SectionMark>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal="heading"
            className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
          >
            Particularly effective for.
          </h2>
          <p
            data-reveal="text"
            className="max-w-md text-sm text-muted-foreground md:text-base"
          >
            Where this capability tends to move the needle fastest.
          </p>
        </div>

        <div
          data-reveal-group
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <article
              key={item}
              data-reveal="card"
              className="h-full rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur-[1px] dark:bg-secondary"
            >
              <span className="font-display text-2xl font-medium text-brand-yellow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-lg font-medium leading-snug md:text-xl">
                {item}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
