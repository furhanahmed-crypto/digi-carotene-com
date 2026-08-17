"use client"

import * as React from "react"

const HEADER_OFFSET = 112

type PillarRef = { id: string }

export function useActivePillar<T extends PillarRef>(
  pillars: readonly T[],
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>
) {
  const [activeId, setActiveId] = React.useState(pillars[0].id)

  React.useEffect(() => {
    const nodes = pillars
      .map((pillar) => sectionRefs.current[pillar.id])
      .filter((node): node is HTMLElement => Boolean(node))

    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )
        const next = visible[0]?.target.getAttribute("data-pillar-id")
        if (next && pillars.some((pillar) => pillar.id === next)) {
          setActiveId(next)
        }
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -45% 0px`,
        threshold: [0.15, 0.35, 0.6],
      }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [pillars, sectionRefs])

  return { activeId, setActiveId, headerOffset: HEADER_OFFSET }
}
