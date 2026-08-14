import Link from "next/link"

import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function Capabilities() {
  const { capabilities } = homeContent

  return (
    <section id="services" className="py-[72px] lg:py-[140px]">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-medium tracking-[0.03em] text-muted-foreground uppercase md:text-sm">
            {capabilities.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[30px] leading-[1.1] font-medium md:text-[44px]">
            {capabilities.headline}
          </h2>
          <p className="mt-5 text-base leading-[1.6] text-muted-foreground md:text-lg">
            {capabilities.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {capabilities.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.id}
              delayMs={index * 40}
              className="bg-background p-6 md:p-8 lg:p-10"
            >
              <article id={pillar.id}>
                <p className="font-display text-lg text-muted-foreground">
                  {pillar.number}
                </p>
                <h3 className="font-display mt-4 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-[1.6] text-muted-foreground">
                  {pillar.summary}
                </p>
                <ul className="mt-6 space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] font-medium tracking-[0.03em] text-foreground uppercase md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/services/digital-marketing"
            className="link-underline text-[13px] font-medium tracking-[0.03em] uppercase"
          >
            All services
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
