import { VolumeX } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Reveal } from "@/components/shared/reveal"
import { SectionLayout } from "@/components/shared/section-layout"
import { SectionMark } from "@/components/shared/section-mark"
import { cn } from "@/lib/utils"

const reelTints = [
  "bg-brand-yellow/40",
  "bg-secondary",
  "bg-brand-yellow/25",
  "bg-secondary",
  "bg-brand-yellow/35",
]

export function CreativeReels() {
  const { reels } = homeSections

  return (
    <SectionLayout tone="white">
      <Reveal>
        <SectionMark>{reels.eyebrow}</SectionMark>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
            {reels.headline}
          </h2>
          <p className="max-w-md text-muted-foreground">{reels.body}</p>
        </div>
      </Reveal>

      <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reels.items.map((item, index) => (
          <Reveal key={item.id} className="shrink-0">
            <div
              className={cn(
                "relative flex aspect-[9/16] w-44 flex-col justify-between overflow-hidden rounded-2xl border border-border md:w-52",
                reelTints[index % reelTints.length]
              )}
            >
              <div className="flex justify-end p-3">
                <span className="rounded-full bg-black/40 p-2 text-white">
                  <VolumeX className="size-3.5" />
                </span>
              </div>
              <div className="bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-xs font-medium">{item.handle}</p>
                <p className="mt-1 text-sm opacity-90">{item.label}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionLayout>
  )
}
