import { ScenarioCard } from "@/components/growth-scenarios/scenario-card"
import type { GrowthScenarioIndexItem } from "@/types/growth-scenario"

type ScenarioListProps = {
  items: GrowthScenarioIndexItem[]
}

export function ScenarioList({ items }: ScenarioListProps) {
  return (
    <div
      data-reveal-group
      className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {items.map((item) => (
        <div key={item.slug} data-reveal="card" className="min-w-0">
          <ScenarioCard item={item} tone="list" />
        </div>
      ))}
    </div>
  )
}
