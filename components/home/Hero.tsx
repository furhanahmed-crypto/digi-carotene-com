import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const { hero } = homeContent

  return (
    <section className="bg-background pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <Container className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <p className="text-[13px] font-medium tracking-[0.03em] text-ink-muted uppercase md:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-[40px] leading-[1.05] font-medium tracking-[-0.01em] md:text-[72px]">
            {hero.headlineBefore}
            <span className="underline decoration-carotene decoration-2 underline-offset-[0.12em] md:decoration-[3px]">
              {hero.headlineAccent}
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-[1.6] text-muted-foreground md:text-lg">
            {hero.body}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              render={<Link href={hero.primaryCta.href} />}
              size="lg"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              nativeButton={false}
              render={<Link href={hero.secondaryCta.href} />}
              variant="outline"
              size="lg"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <aside className="relative border border-line bg-secondary p-6 lg:col-span-4 lg:p-8">
          <span
            className="absolute top-0 left-0 h-full w-1 bg-carotene"
            aria-hidden="true"
          />
          <SectionMark>The name</SectionMark>
          <p className="mt-5 font-display text-[26px] leading-[1.2] font-medium">
            Carotene is a pigment.
          </p>
          <p className="mt-4 text-base leading-[1.6] text-muted-foreground">
            Warm, concentrated, used with intent — not as decoration. That is
            also how the work should feel.
          </p>
          <div className="mt-8 h-1.5 w-16 bg-carotene" aria-hidden="true" />
        </aside>
      </Container>
    </section>
  )
}
