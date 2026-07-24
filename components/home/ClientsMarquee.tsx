"use client"

import * as React from "react"

const brands: { name: string; node: React.ReactNode }[] = [
  {
    name: "Google",
    node: (
      <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    node: (
      <div className="flex flex-col items-center leading-none">
        <span className="text-2xl font-bold tracking-tight">amazon</span>
        <svg viewBox="0 0 64 16" className="mt-1 h-4 w-20" aria-hidden>
          <path
            d="M4 6c10 10 36 12 56 2"
            fill="none"
            stroke="#FF9900"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Apple",
    node: (
      <svg viewBox="0 0 24 24" className="h-11 w-11" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "Flipkart",
    node: (
      <div className="flex items-center gap-2.5">
        {/* Official Flipkart bag mark (Simple Icons path / brand yellow) */}
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 shrink-0"
          fill="#FFE11B"
          aria-hidden
        >
          <path d="M3.833 1.333a.993.993 0 0 0-.333.061V1c0-.551.449-1 1-1h14.667c.551 0 1 .449 1 1v.333H3.833zm17.334 2.334H2.833c-.551 0-1 .449-1 1V23c0 .551.449 1 1 1h7.3l1.098-5.645h-2.24c-.051 0-5.158-.241-5.158-.241l4.639-.327-.078-.366-1.978-.285 1.882-.158-.124-.449-3.075-.467s3.341-.373 3.392-.373h3.232l.247-1.331c.289-1.616.945-2.807 1.973-3.693 1.033-.892 2.344-1.332 3.937-1.332.643 0 1.053.151 1.231.463.118.186.201.516.279.859.074.352.14.671.095.903-.057.345-.461.465-1.197.465h-.253c-1.327 0-2.134.763-2.405 2.31l-.243 1.355h1.54c.574 0 .781.402.622 1.306-.17.941-.539 1.36-1.111 1.36H14.9L13.804 24h7.362c.551 0 1-.449 1-1V4.667a1 1 0 0 0-.999-1zM20.5 2.333A.334.334 0 0 0 20.167 2H3.833a.334.334 0 0 0-.333.333V3h17v-.667z" />
        </svg>
        <span className="text-xl font-bold italic tracking-tight text-[#047BD5]">
          Flipkart
        </span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    node: (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 23 23" className="size-8" aria-hidden>
          <path fill="#f35325" d="M1 1h10v10H1z" />
          <path fill="#81bc06" d="M12 1h10v10H12z" />
          <path fill="#05a6f0" d="M1 12h10v10H1z" />
          <path fill="#ffba08" d="M12 12h10v10H12z" />
        </svg>
        <span className="text-lg font-semibold tracking-tight">Microsoft</span>
      </div>
    ),
  },
  {
    name: "Meta",
    node: <span className="text-2xl font-semibold tracking-tight">meta</span>,
  },
  {
    name: "Netflix",
    node: (
      <span className="text-xl font-bold tracking-[0.14em] text-[#E50914]">
        NETFLIX
      </span>
    ),
  },
  {
    name: "Spotify",
    node: (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" className="size-8" fill="#1DB954" aria-hidden>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <span className="text-lg font-semibold tracking-tight">Spotify</span>
      </div>
    ),
  },
  {
    name: "Shopify",
    node: (
      <span className="text-xl font-semibold tracking-tight text-[#95BF47]">
        Shopify
      </span>
    ),
  },
  {
    name: "Samsung",
    node: (
      <span className="text-lg font-bold uppercase tracking-[0.18em]">
        Samsung
      </span>
    ),
  },
]

function MarqueeRow() {
  const loop = [...brands, ...brands]

  return (
    <div className="flex overflow-hidden">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="flex shrink-0 items-center gap-16 px-8 animate-marquee"
          aria-hidden={copy === 1}
        >
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${copy}-${i}`}
              className="flex h-20 min-w-[160px] items-center justify-center text-foreground/75 opacity-80 transition-all duration-300 hover:opacity-100"
              title={brand.name}
            >
              {brand.node}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ClientsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-muted/10 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-28" />

      <MarqueeRow />
    </section>
  )
}
