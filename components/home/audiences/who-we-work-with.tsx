import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/shared/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function WhoWeWorkWith() {
  const { audiences } = homeSections

  return (
    <SectionLayout tone="cream">
      <Reveal>
        <SectionMark>{audiences.eyebrow}</SectionMark>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
            {audiences.headline}
          </h2>
          <p className="max-w-md text-sm text-muted-foreground md:text-base">
            {audiences.body}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.items.map((item) => (
          <Reveal key={item.id} className="h-full">
            <article className="h-full rounded-2xl border border-border bg-white/90 p-5 shadow-sm backdrop-blur-[1px] dark:bg-card">
              <h3 className="font-display text-xl font-medium">{item.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionLayout>
  )
}
