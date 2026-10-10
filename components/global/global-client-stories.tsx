import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  globalClientStories,
  globalMarketsStrip,
} from "@/constants/global/client-stories"

export function GlobalClientStories() {
  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {globalMarketsStrip.map((market) => (
          <li
            key={market}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-semibold tracking-loose text-foreground uppercase"
          >
            {market}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {globalClientStories.map((story) => (
          <article
            key={story.id}
            data-reveal="card"
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span aria-hidden>{story.flag}</span>
              <span>{story.location}</span>
            </div>
            <p className="mt-2 text-xs font-semibold tracking-loose text-muted-foreground uppercase">
              {story.industry}
            </p>
            <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
              {story.name}
            </h3>
            <p className="mt-2 font-medium text-foreground">{story.headline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Challenge — </span>
              {story.challenge}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">What we did — </span>
              {story.whatWeDid}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {story.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-foreground/40"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            {story.result ? (
              <p className="mt-4 text-sm font-medium text-foreground">
                {story.result}
              </p>
            ) : null}
            <a
              href={story.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-foreground underline-offset-2 hover:underline"
            >
              Visit their site
              <ArrowUpRight className="size-3.5" aria-hidden />
              <span className="sr-only"> ({story.siteLabel})</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
