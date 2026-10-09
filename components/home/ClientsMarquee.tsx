import { clientLogos } from "@/constants/home/clients"
import { ClientLogo } from "@/components/home/clients/client-logo"
import { marqueeDecor } from "@/components/home/section-decors"
import { SectionLayout } from "@/components/shared/section-layout"

function MarqueeRow() {
  const loop = [...clientLogos, ...clientLogos]

  return (
    <div className="flex overflow-hidden py-1">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center gap-3 px-3 animate-marquee [animation-duration:40s] md:gap-4 md:px-4"
          aria-hidden={copy === 1}
        >
          {loop.map((logo, i) => (
            <div
              key={`${logo.id}-${copy}-${i}`}
              className="flex h-20 w-[12rem] shrink-0 items-center justify-center rounded-xl border border-ink/15 bg-white/95 px-2.5 sm:h-[5.25rem] sm:w-[13.5rem] sm:px-3"
            >
              <ClientLogo logo={logo} size="marquee" />
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
      aria-label="Client logos"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-yellow to-transparent md:w-28 dark:from-secondary" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-yellow to-transparent md:w-28 dark:from-secondary" />
      <MarqueeRow />
    </SectionLayout>
  )
}
