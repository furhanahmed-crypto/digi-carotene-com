import { BlogTable } from "@/components/blog/blog-table"
import type { ScenarioResults } from "@/types/growth-scenario"

type ScenarioResultsTableProps = {
  title: string
  results: ScenarioResults
}

const DROPPED_HEADERS = new Set(["benchmark basis", "basis"])

function withoutBenchmarkColumn(results: ScenarioResults): ScenarioResults {
  const dropIndexes = results.headers
    .map((header, index) =>
      DROPPED_HEADERS.has(header.trim().toLowerCase()) ? index : -1
    )
    .filter((index) => index >= 0)

  if (dropIndexes.length === 0) return results

  return {
    headers: results.headers.filter((_, index) => !dropIndexes.includes(index)),
    rows: results.rows.map((row) =>
      row.filter((_, index) => !dropIndexes.includes(index))
    ),
  }
}

export function ScenarioResultsTable({
  title,
  results,
}: ScenarioResultsTableProps) {
  const table = withoutBenchmarkColumn(results)

  return (
    <section id="results" className="scroll-mt-28 pt-10">
      <h2 className="font-display text-[26px] leading-heading font-medium tracking-display md:text-[32px]">
        {title}
      </h2>
      <BlogTable headers={table.headers} rows={table.rows} caption={title} />
    </section>
  )
}
