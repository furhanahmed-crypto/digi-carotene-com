import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { audiencesDecor } from "@/components/home/section-decors"
import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function WhoWeWorkWith() {
  const { audiences } = homeSections

  return (
    <SectionLayout tone="cream" decor={audiencesDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">{audiences.eyebrow}</SectionMark>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal="heading"
            className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
          >
            {audiences.headline}
          </h2>
          <p
            data-reveal="text"
            className="max-w-md text-sm text-muted-foreground md:text-base"
          >
            {audiences.body}
          </p>
        </div>

        <div
          data-reveal-group
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {audiences.items.map((item) => {
            const className =
              "group flex h-full flex-col rounded-2xl border border-border bg-white/90 p-5 shadow-sm backdrop-blur-[1px] transition-colors hover:border-brand-yellow/45 dark:bg-card"
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium">{item.label}</h3>
                  {item.href ? (
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </>
            )

            return item.href ? (
              <Link
                key={item.id}
                href={item.href}
                data-reveal="card"
                className={className}
              >
                {inner}
              </Link>
            ) : (
              <article key={item.id} data-reveal="card" className={className}>
                {inner}
              </article>
            )
          })}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
