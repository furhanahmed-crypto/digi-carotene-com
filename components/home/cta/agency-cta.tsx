import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { whatsappHref } from "@/constants/home/navigation"
import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"

export function AgencyCta() {
  const { cta } = homeSections

  return (
    <section className="border-b border-border bg-brand-yellow py-16 text-ink md:py-24 dark:bg-secondary dark:text-foreground">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium tracking-[0.12em] text-ink/60 uppercase dark:text-muted-foreground">
            {cta.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[36px] leading-[1.08] font-medium tracking-[-0.02em] md:text-[52px]">
            {cta.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink/70 md:text-lg dark:text-muted-foreground">
            {cta.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={cta.primary.href} />}
              size="lg"
              className="bg-ink text-paper hover:bg-ink/90"
            >
              {cta.primary.label}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={
                <a href={whatsappHref} target="_blank" rel="noreferrer" />
              }
              size="lg"
              variant="outline"
              className="border-ink/25 bg-white/50 text-ink hover:border-ink hover:bg-white dark:border-border dark:bg-transparent dark:text-foreground"
            >
              {cta.secondary.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
