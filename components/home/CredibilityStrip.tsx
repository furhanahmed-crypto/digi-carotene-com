"use client"

import * as React from "react"

export function CredibilityStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-muted/10 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">
              We partner with growing brands, premium hospitality ventures, healthcare institutions, and local businesses in Hyderabad and beyond to build unified marketing systems.
            </p>
          </div>
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2 bg-background/50 font-mono text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              <span>[[Client logos — to confirm]]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
