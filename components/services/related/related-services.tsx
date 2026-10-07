import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { CompassMotif } from "@/components/decor/motifs"
import { Reveal } from "@/components/motion/reveal"
import { pageWhiteDecor } from "@/components/shared/page-decors"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"
import type { ServicePanelTone } from "@/types/home"
import type { RelatedService } from "@/types/services"

const tones: ServicePanelTone[] = ["yellow", "green", "blue", "purple", "red"]

const toneClass: Record<ServicePanelTone, string> = {
  yellow: "bg-brand-yellow text-ink",
  green: "bg-brand-green text-white",
  blue: "bg-brand-blue text-white",
  purple: "bg-brand-purple text-white",
  red: "bg-brand-red text-white",
}

type RelatedServicesProps = {
  items: RelatedService[]
  basePath: string
}

/** Color panels for related capabilities — homepage service-panel pattern. */
export function RelatedServices({ items, basePath }: RelatedServicesProps) {
  if (items.length === 0) return null

  return (
    <SectionLayout tone="white" decor={pageWhiteDecor}>
      <Reveal>
        <SectionMark data-reveal="eyebrow" adornment={<CompassMotif />}>
          Related
        </SectionMark>
        <h2
          data-reveal="heading"
          className="mt-6 max-w-3xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
        >
          Keep exploring.
        </h2>
        <p data-reveal="text" className="mt-4 max-w-2xl text-muted-foreground">
          Adjacent capabilities that often ship alongside this one.
        </p>

        <div
          data-reveal-group
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {items.map((item, index) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              data-reveal="card"
              className={cn(
                "group flex h-full min-h-56 flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1",
                toneClass[tones[index % tones.length]]
              )}
            >
              <div>
                <h3 className="font-display text-2xl leading-tight font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed opacity-90">
                  {item.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium tracking-[0.06em] uppercase">
                Explore
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </SectionLayout>
  )
}
