"use client"

import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"
import {
  ReactGoogleReviews,
  type ReactGoogleReview,
} from "react-google-reviews"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import {
  googleMapsProfileHref,
  googleReviewsHref,
  googleWriteReviewHref,
} from "@/constants/site/testimonials"
import { cn } from "@/lib/utils"

type GoogleReviewsProps = {
  title: string
  eyebrow?: string
  body?: string
  className?: string
}

function formatRelativeDate(iso: string | null): string {
  if (!iso) return ""
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return ""
  const days = Math.max(0, Math.round((Date.now() - then) / 86_400_000))
  if (days < 14) return days <= 1 ? "1 day ago" : `${days} days ago`
  const months = Math.round(days / 30)
  if (months < 12) {
    return months <= 1 ? "1 month ago" : `${months} months ago`
  }
  const years = Math.round(months / 12)
  return years <= 1 ? "1 year ago" : `${years} years ago`
}

function StarRow({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const iconClass = size === "lg" ? "size-5" : "size-4"
  const rounded = Math.round(rating)
  return (
    <div
      className="flex gap-0.5 text-brand-yellow"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(iconClass, i < rounded ? "fill-current" : "opacity-25")}
        />
      ))}
    </div>
  )
}

function ReviewsFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground",
        className
      )}
    >
      <p>
        Live Google reviews load once{" "}
        <code className="text-foreground">NEXT_PUBLIC_FEATURABLE_WIDGET_ID</code>{" "}
        is set. Until then, read and leave reviews on Google.
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <Link
          href={googleReviewsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium tracking-soft uppercase text-foreground"
        >
          See reviews on Google
          <ArrowUpRight className="size-3.5" />
        </Link>
        <Link
          href={googleWriteReviewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium tracking-soft uppercase text-foreground"
        >
          Review us on Google
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  )
}

function ThemedReviews({ reviews }: { reviews: ReactGoogleReview[] }) {
  const withText = reviews.filter((r) => r.comment?.trim())
  const avg =
    withText.length > 0
      ? withText.reduce((sum, r) => sum + r.starRating, 0) / withText.length
      : 0

  if (withText.length === 0) {
    return <ReviewsFallback />
  }

  return (
    <div className="mt-10 space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="font-display text-xl font-medium tracking-tight">
            Digi Carotene
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="font-display text-2xl font-medium tabular-nums">
              {avg.toFixed(1)}
            </span>
            <StarRow rating={avg} size="lg" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Based on {withText.length} Google{" "}
            {withText.length === 1 ? "review" : "reviews"}
          </p>
        </div>
        <Link
          href={googleWriteReviewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow px-5 text-sm font-medium text-ink transition-colors hover:bg-brand-yellow/90"
        >
          Review us on Google
        </Link>
      </div>

      <div data-reveal-group className="grid gap-4 md:grid-cols-3">
        {withText.map((review) => {
          const key =
            review.reviewId ??
            `${review.reviewer.displayName}-${review.createTime}`
          const relative = formatRelativeDate(review.createTime)

          return (
            <article
              key={key}
              data-reveal="card"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-start gap-3">
                {review.reviewer.profilePhotoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element -- Google avatar URLs vary by account
                  <img
                    src={review.reviewer.profilePhotoUrl}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 shrink-0 rounded-full bg-secondary object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-muted-foreground"
                  >
                    {review.reviewer.displayName.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium tracking-tight">
                    {review.reviewer.displayName}
                  </p>
                  {relative ? (
                    <p className="text-xs text-muted-foreground">{relative}</p>
                  ) : null}
                </div>
              </div>
              <div className="mt-4">
                <StarRow rating={review.starRating} />
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                “{review.comment.trim()}”
              </p>
              <p className="mt-6 text-xs font-medium tracking-mark text-muted-foreground uppercase">
                Google review
              </p>
            </article>
          )
        })}
      </div>

      <div data-reveal="cta">
        <Link
          href={googleMapsProfileHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium tracking-soft uppercase"
        >
          See all reviews on Google
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  )
}

/** Live Google reviews via Featurable — Digi Carotene themed cards. */
export function GoogleReviews({
  title,
  eyebrow = "Google reviews",
  body = "Live reviews from Google Business Profile — updated automatically.",
  className,
}: GoogleReviewsProps) {
  const widgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID?.trim()

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

        {!widgetId ? (
          <div className="mt-10">
            <ReviewsFallback />
          </div>
        ) : (
          <ReactGoogleReviews
            layout="custom"
            featurableId={widgetId}
            hideEmptyReviews
            structuredData
            brandName="Digi Carotene"
            loadingMessage={
              <p className="mt-10 text-sm text-muted-foreground">
                Loading Google reviews…
              </p>
            }
            errorMessage={
              <div className="mt-10">
                <ReviewsFallback />
              </div>
            }
            renderer={(reviews) => <ThemedReviews reviews={reviews} />}
          />
        )}
      </Reveal>
    </div>
  )
}
