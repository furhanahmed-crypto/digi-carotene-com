import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import {
  googleReviewsHref,
  siteTestimonials,
} from "@/constants/site/testimonials"
import { cn } from "@/lib/utils"

type GoogleReviewsProps = {
  title: string
  eyebrow?: string
  body?: string
  className?: string
}

/** Text quotes from digicarotene.com Client Stories + link to Google. */
export function GoogleReviews({
  title,
  eyebrow = "Google reviews",
  body = "Public reviews from people who worked with Digi Carotene — also shown on digicarotene.com.",
  className,
}: GoogleReviewsProps) {
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

        <div
          data-reveal-group
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {siteTestimonials.map((item) => (
            <article
              key={item.id}
              data-reveal="card"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div
                className="flex gap-0.5 text-brand-yellow"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: item.rating }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                “{item.quote}”
              </p>
              <p className="mt-6 font-medium tracking-tight">{item.name}</p>
              <p className="mt-1 text-[12px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Google review
              </p>
            </article>
          ))}
        </div>

        <div data-reveal="cta" className="mt-8">
          <Link
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[0.04em] uppercase"
          >
            See reviews on Google
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
