import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"

export function AgencyCta() {
  const { cta } = homeSections

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {cta.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[36px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[52px]">
            {cta.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {cta.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={cta.primary.href} />}
              size="lg"
              className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
            >
              {cta.primary.label}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={cta.secondary.href} />}
              size="lg"
              variant="outline"
            >
              {cta.secondary.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
