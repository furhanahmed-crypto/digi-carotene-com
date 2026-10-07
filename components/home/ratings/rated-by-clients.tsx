import Link from "next/link"
import { Star } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function RatedByClients() {
  const { ratings } = homeSections

  return (
    <section className="border-b border-border bg-background py-14 md:py-20">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              {ratings.eyebrow}
            </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]">
              {ratings.headline}
            </h2>
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              {ratings.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ratings.cards.map((card) => (
            <Reveal key={card.id}>
              <Link
                href={card.href}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-foreground/20"
              >
                <div className="flex items-center gap-2 text-brand-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium tracking-[0.06em] text-muted-foreground uppercase">
                  {card.platform}
                </p>
                <p className="mt-2 font-display text-3xl font-medium">
                  {card.score}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.detail}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
