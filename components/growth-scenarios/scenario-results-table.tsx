import { BlogTable } from "@/components/blog/blog-table"
import type { ScenarioResults } from "@/types/growth-scenario"

type ScenarioResultsTableProps = {
  title: string
  results: ScenarioResults
}

export function ScenarioResultsTable({
  title,
  results,
}: ScenarioResultsTableProps) {
  return (
    <section id="results" className="scroll-mt-28 pt-10">
      <h2 className="font-display text-[26px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[32px]">
        {title}
      </h2>
      <BlogTable headers={results.headers} rows={results.rows} caption={title} />
    </section>
  )
}
