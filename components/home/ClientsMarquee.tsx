import { clientLogos } from "@/constants/home/clients"
import { ClientLogo } from "@/components/home/clients/client-logo"
import { SectionLayout } from "@/components/shared/section-layout"

function MarqueeRow() {
  return (
    <div className="group flex overflow-hidden py-3 select-none sm:py-4">
      {/* One real set for a11y/SEO; one aria-hidden duplicate for seamless CSS loop. */}
      <div className="flex shrink-0 items-center gap-8 px-4 animate-marquee [animation-duration:36s] group-hover:[animation-play-state:paused] sm:gap-10 md:gap-14 md:px-7">
        {clientLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
            title={logo.name}
          >
            <ClientLogo logo={logo} size="marquee" />
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-8 px-4 animate-marquee [animation-duration:36s] group-hover:[animation-play-state:paused] sm:gap-10 md:gap-14 md:px-7"
      >
        {clientLogos.map((logo) => (
          <div
            key={`dup-${logo.id}`}
            className="flex shrink-0 items-center justify-center"
          >
            <ClientLogo logo={logo} size="marquee" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientsMarquee() {
  return (
    <SectionLayout
      tone="white"
      size="compact"
      contained={false}
      bordered
      className="border-y border-border/60"
      aria-label="Client logos"
    >
      <div className="relative z-10 mx-auto mb-3 max-w-7xl px-4 text-center sm:mb-4">
        <p className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase min-[360px]:text-xs">
          <span className="mr-2 inline-block size-1.5 rounded-full bg-brand-yellow align-middle" />
          Trusted by 300+ ambitious brands across Hyderabad & beyond
        </p>
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
        <MarqueeRow />
      </div>
    </SectionLayout>
  )
}
