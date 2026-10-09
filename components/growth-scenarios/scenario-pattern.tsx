type ScenarioPatternProps = {
  pattern: Record<string, string>
}

const labels: Record<string, string> = {
  type: "Business type",
  location: "Location",
  ticketSize: "Ticket size",
  salesCycle: "Sales cycle",
  monthlyAdBudget: "Monthly ad budget",
  seasonAdBudget: "Season ad budget",
}

export function ScenarioPattern({ pattern }: ScenarioPatternProps) {
  const entries = Object.entries(pattern)
  if (entries.length === 0) return null

  return (
    <section id="business-pattern" className="scroll-mt-28 pt-10">
      <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
        Business Pattern
      </h2>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="rounded-2xl border border-border bg-secondary/30 p-4"
          >
            <dt className="text-xs font-medium tracking-label text-muted-foreground uppercase">
              {labels[key] ?? key}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
