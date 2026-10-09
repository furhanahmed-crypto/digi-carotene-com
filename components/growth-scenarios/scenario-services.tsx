import Link from "next/link"

import type { ScenarioService } from "@/types/growth-scenario"

type ScenarioServicesProps = {
  services: ScenarioService[]
}

export function ScenarioServices({ services }: ScenarioServicesProps) {
  if (services.length === 0) return null

  return (
    <section id="services-used" className="scroll-mt-28 pt-10">
      <h2 className="font-display text-[26px] leading-[1.15] font-medium tracking-[-0.02em] md:text-[32px]">
        Services used
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {services.map((service) => (
          <li key={service.href}>
            <Link
              href={service.href}
              className="inline-flex rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm transition-colors hover:border-ink/30 hover:bg-brand-yellow/25"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
