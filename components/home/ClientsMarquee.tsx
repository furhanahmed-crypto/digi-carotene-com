import { clientLogos } from "@/constants/home/clients"
import { marqueeDecor } from "@/components/home/section-decors"
import { SectionLayout } from "@/components/shared/section-layout"

function MarqueeRow() {
  const loop = [...clientLogos, ...clientLogos]

  return (
    <div className="flex overflow-hidden">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center gap-6 px-6 animate-marquee [animation-duration:28s]"
          aria-hidden={copy === 1}
        >
          {loop.map((logo, i) => (
            <div
              key={`${logo.id}-${copy}-${i}`}
              className="flex h-16 w-[168px] shrink-0 items-center justify-center border border-ink/15 bg-white/80 px-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- local brand SVGs */}
              <img
                src={logo.src}
                alt=""
                width={140}
                height={40}
                className="h-8 w-auto max-w-[128px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ClientsMarquee() {
  return (
    <SectionLayout
      tone="yellow"
      size="compact"
      contained={false}
      bordered
      className="border-y"
      decor={marqueeDecor}
      aria-label="Brand logo layout references — not Digi Carotene clients"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-yellow to-transparent md:w-28 dark:from-secondary" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-yellow to-transparent md:w-28 dark:from-secondary" />
      <MarqueeRow />
    </SectionLayout>
  )
}
