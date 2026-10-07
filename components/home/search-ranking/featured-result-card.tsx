import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { homeSections } from "@/constants/home/sections"
import { cn } from "@/lib/utils"

type FeaturedResultCardProps = {
  className?: string
}

export function FeaturedResultCard({ className }: FeaturedResultCardProps) {
  const { searchRanking } = homeSections

  return (
    <div className={cn("relative pt-3", className)}>
      <span className="absolute top-0 right-4 z-20 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_6px_16px_rgba(226,61,47,0.45)] md:right-6">
        #1 Result
      </span>

      <div className="relative overflow-hidden rounded-2xl p-[2.5px] shadow-[0_8px_30px_rgba(32,33,36,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        {/* Light: tighter, hotter arc so the shine reads on cream/white */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 size-[220%] -translate-x-1/2 -translate-y-1/2 animate-featured-border-spin bg-[conic-gradient(from_0deg,#e5e5e5_0%,#e5e5e5_68%,#f5c400_78%,#f59e0b_84%,#2563eb_92%,#e5e5e5_100%)] motion-reduce:animate-none motion-reduce:bg-brand-yellow dark:hidden"
          aria-hidden="true"
        />
        {/* Dark: soft travelling highlight (existing look) */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 hidden size-[220%] -translate-x-1/2 -translate-y-1/2 animate-featured-border-spin bg-[conic-gradient(from_0deg,transparent_0%,transparent_72%,#f5c400_82%,#2563eb_92%,transparent_100%)] motion-reduce:animate-none motion-reduce:bg-brand-yellow dark:block"
          aria-hidden="true"
        />

        <div className="relative z-10 rounded-[13px] bg-white p-5 md:p-7 dark:bg-card">
          <div className="flex items-center gap-3">
            <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/8 bg-[#f1f3f4]">
              <Image
                src="/favicon/icon-light.png"
                alt=""
                width={20}
                height={20}
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
      </div>
    </div>
  )
}
