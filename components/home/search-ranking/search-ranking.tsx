import Image from "next/image"
import Link from "next/link"
import { Mic, Search, Star } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"

export function SearchRanking() {
  const { searchRanking } = homeSections

  return (
    <section className="relative z-20 -mt-28 border-b border-border bg-[#f3efe6] pb-14 pt-2 md:-mt-36 md:pb-20 md:pt-4 dark:bg-secondary">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.1) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-[720px]">
          <div className="rounded-full border border-black/10 bg-white px-4 py-2.5 shadow-[0_1px_6px_rgba(32,33,36,0.18)] dark:border-border dark:bg-card">
            <div className="flex items-center gap-3">
              <Search
                className="size-5 shrink-0 text-[#9aa0a6]"
                aria-hidden="true"
              />
              <p className="min-w-0 flex-1 truncate text-[15px] text-[#202124] md:text-base dark:text-foreground">
                {searchRanking.query}
              </p>
              <span className="hidden h-6 w-px bg-black/10 sm:block dark:bg-border" />
              <Mic
                className="hidden size-5 shrink-0 text-[#4285f4] sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="relative mt-6 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_12px_40px_rgba(32,33,36,0.14)] md:mt-8 md:p-7 dark:border-border dark:bg-card">
            <span className="absolute -top-3 right-4 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_6px_16px_rgba(226,61,47,0.45)] md:right-6">
              #1 Result
            </span>

            <div className="flex items-center gap-3">
              <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/8 bg-white shadow-sm">
                <Image
                  src="/favicon/icon-light.png"
                  alt=""
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#202124] dark:text-foreground">
                  {searchRanking.siteName}
                </p>
                <p className="truncate text-[12px] text-[#4d5156] dark:text-muted-foreground">
                  {searchRanking.urlPath}
                </p>
              </div>
            </div>

            <h2 className="mt-3 font-sans text-[20px] leading-snug font-normal text-[#1a0dab] md:text-[22px] dark:text-[#8ab4f8]">
              <Link
                href="/"
                className="transition-colors hover:underline hover:underline-offset-2"
              >
                {searchRanking.title}
              </Link>
            </h2>

            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#fbbc04]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[13px] text-[#4d5156] dark:text-muted-foreground">
                {searchRanking.ratingLine}
              </p>
            </div>

            <p className="mt-3 text-[14px] leading-relaxed text-[#4d5156] md:text-[15px] dark:text-muted-foreground">
              {searchRanking.snippet}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {searchRanking.tags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="rounded-full border border-black/10 bg-[#f1f3f4] px-3.5 py-1.5 text-[12px] font-medium text-[#3c4043] transition-colors hover:border-black/20 hover:bg-[#e8eaed] dark:border-border dark:bg-secondary dark:text-foreground dark:hover:bg-muted"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
