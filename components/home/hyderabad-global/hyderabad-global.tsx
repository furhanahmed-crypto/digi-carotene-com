import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { differentiatorsDecor } from "@/components/home/section-decors"
import { Reveal } from "@/components/motion/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"

export function HyderabadGlobal() {
  const { hyderabadGlobal } = homeSections

  return (
    <SectionLayout tone="white" decor={differentiatorsDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">
          {hyderabadGlobal.eyebrow}
        </SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl min-w-0 font-display text-[26px] leading-display font-medium tracking-display break-words min-[360px]:text-[30px] sm:text-[32px] md:text-[44px]"
        >
          {hyderabadGlobal.headline}
        </h2>
        <p
          data-reveal="text"
          className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {hyderabadGlobal.body}
        </p>
        <div data-reveal-group className="mt-8 grid gap-3 sm:grid-cols-2">
          {hyderabadGlobal.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-reveal="card"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-sm transition-colors hover:border-brand-yellow/45"
            >
              <span className="font-display text-lg font-medium">{link.label}</span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
