"use client"

import * as React from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import {
  googleMapsProfileHref,
  googleWriteReviewHref,
} from "@/constants/site/testimonials"
import {
  hyderabadStaticReviews,
  type StaticGoogleReview,
} from "@/constants/site/static-reviews"
import { cn } from "@/lib/utils"

function GoogleGMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 text-brand-yellow"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn("size-4", i < rating ? "fill-current" : "opacity-25")}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: StaticGoogleReview }) {
  const initial = review.name.trim().charAt(0).toUpperCase() || "?"

  return (
    <article className="flex h-full min-h-[17rem] flex-col rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground"
        >
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium tracking-tight text-foreground">
            {review.name}
          </p>
          <p className="text-xs text-muted-foreground">{review.relativeTime}</p>
        </div>
        <GoogleGMark />
        <span className="sr-only">Google review</span>
      </div>

      <div className="mt-4">
        <StarRow rating={review.rating} />
      </div>

      <p className="mt-4 flex-1 overflow-y-auto text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {review.body}
      </p>
    </article>
  )
}

type StaticReviewsProps = {
  title: string
  eyebrow?: string
  body?: string
  className?: string
  reviews?: readonly StaticGoogleReview[]
}

/** Static Google-style review carousel — Digi Carotene themed. */
export function StaticReviews({
  title,
  eyebrow = "Google reviews",
  body = "What clients say about working with Digi Carotene in Hyderabad.",
  className,
  reviews = hyderabadStaticReviews,
}: StaticReviewsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
  })

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className={cn(className)}>
      <Reveal>
        <SectionMark data-reveal="eyebrow">Reviews</SectionMark>
        <SectionHeading
          eyebrowProps={{ "data-reveal": "eyebrow" }}
          titleProps={{ "data-reveal": "heading" }}
          bodyProps={{ "data-reveal": "text" }}
          className="mt-6"
          eyebrow={eyebrow}
          title={title}
          body={body}
        />

        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y items-stretch">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-0 shrink-0 basis-full px-0 sm:basis-1/2 sm:px-2 lg:basis-1/3"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => emblaApi?.scrollPrev()}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => emblaApi?.scrollNext()}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  aria-current={selectedIndex === index ? "true" : undefined}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    selectedIndex === index
                      ? "w-6 bg-brand-yellow"
                      : "w-2 bg-border hover:bg-muted-foreground/40"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          data-reveal="cta"
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href={googleMapsProfileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium tracking-soft uppercase"
          >
            See all reviews on Google
            <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            href={googleWriteReviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium tracking-soft uppercase"
          >
            Review us on Google
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
