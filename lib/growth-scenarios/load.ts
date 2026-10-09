import { readFileSync } from "node:fs"
import { join } from "node:path"

import type {
  GrowthScenario,
  GrowthScenarioIndexItem,
} from "@/types/growth-scenario"

const dir = join(process.cwd(), "content", "growth-scenarios")

function readJson<T>(filename: string): T {
  return JSON.parse(readFileSync(join(dir, filename), "utf8")) as T
}

export function getScenarioIndex(): GrowthScenarioIndexItem[] {
  return readJson<GrowthScenarioIndexItem[]>("index.json")
}

export function getScenario(slug: string): GrowthScenario {
  return readJson<GrowthScenario>(`${slug}.json`)
}

export function getScenarioSlugs(): string[] {
  return getScenarioIndex().map((item) => item.slug)
}

export function getFeaturedScenarios(): GrowthScenarioIndexItem[] {
  return getScenarioIndex().filter((item) => item.homeFeatured).slice(0, 3)
}

export function scenarioHref(slug: string): string {
  return `/growth-scenarios/${slug}`
}
