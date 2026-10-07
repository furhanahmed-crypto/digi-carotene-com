const placeholders = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
  "Client 07",
  "Client 08",
] as const

function MarqueeRow() {
  const loop = [...placeholders, ...placeholders]

  return (
    <div className="flex overflow-hidden">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center gap-6 px-6 animate-marquee [animation-duration:22s]"
          aria-hidden={copy === 1}
        >
          {loop.map((label, i) => (
            <div
              key={`${label}-${copy}-${i}`}
              className="flex h-16 w-[184px] shrink-0 items-center justify-center border border-ink/15 bg-white/70 px-6"
            >
              <span className="text-[12px] font-medium tracking-[0.12em] text-ink/70 uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ClientsMarquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-brand-yellow py-7 dark:bg-secondary"
      aria-label="Client logos to confirm"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-yellow to-transparent md:w-28 dark:from-secondary" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-yellow to-transparent md:w-28 dark:from-secondary" />

      <MarqueeRow />
    </section>
  )
}
