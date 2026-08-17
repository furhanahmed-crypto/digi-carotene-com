import { cn } from "@/lib/utils"

type CapabilityNavPillar = {
  id: string
  number: string
  title: string
}

type CapabilityNavProps = {
  pillars: readonly CapabilityNavPillar[]
  activeId: string
  onSelect: (id: string) => void
}

export function CapabilityNav({
  pillars,
  activeId,
  onSelect,
}: CapabilityNavProps) {
  return (
    <nav
      aria-label="Service pillars"
      className="border-border bg-background/90 sticky top-[80px] z-20 -mx-5 mb-8 border-y px-5 backdrop-blur-md md:-mx-8 md:px-8 lg:top-[85px] lg:col-span-4 lg:mx-0 lg:mb-0 lg:border-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none xl:col-span-3"
    >
      <div className="flex gap-2 overflow-x-auto py-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:py-0">
        {pillars.map((pillar, index) => {
          const isActive = activeId === pillar.id
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => onSelect(pillar.id)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative shrink-0 border border-transparent px-4 py-3 text-left text-[12px] font-medium tracking-[0.08em] uppercase transition-colors lg:w-full lg:border-border lg:bg-secondary lg:px-5 lg:py-4 lg:text-[13px] lg:tracking-[0.12em]",
                isActive
                  ? "border-carotene/30 bg-secondary text-foreground lg:border-border lg:bg-muted"
                  : "text-muted-foreground hover:text-foreground lg:hover:bg-muted/60"
              )}
            >
              <span
                className={cn(
                  "bg-carotene absolute top-1.5 bottom-1.5 left-0 w-1 transition-opacity lg:top-0 lg:bottom-0",
                  isActive ? "opacity-100" : "opacity-0"
                )}
                aria-hidden="true"
              />
              <span className="block">
                {index + 1} · {pillar.title}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
