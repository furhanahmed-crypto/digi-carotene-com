"use client"

import Link from "next/link"

import { homeContent } from "@/lib/home-content"
import { useCursorFollow } from "@/hooks/use-cursor-follow"
import { CursorFollowImage } from "@/components/shared/cursor-follow-image"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"

export function WhyUsList() {
  const { whyUs } = homeContent
  const cursor = useCursorFollow()

  return (
    <>
      <CursorFollowImage
        src={cursor.state.src}
        visible={cursor.state.visible}
        x={cursor.state.x}
        y={cursor.state.y}
      />

      <ul className="mt-14 border-t border-line">
        {whyUs.points.map((point, index) => (
          <Reveal key={point.title} delayMs={index * 40}>
            <li
              className="grid gap-5 border-b border-line py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:gap-8 md:py-10"
              onMouseEnter={(event) => cursor.show(point.image, event)}
              onMouseMove={cursor.move}
              onMouseLeave={cursor.hide}
            >
              <div className="border-carotene md:col-span-4 md:border-l-2 md:pl-6">
                <p className="text-[12px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-[21px] leading-[1.2] font-medium md:text-[26px]">
                  {point.title}
                </h3>
              </div>
              <div className="flex flex-col gap-5 md:col-span-8">
                <p className="text-base leading-[1.6] text-muted-foreground md:text-lg">
                  {point.body}
                </p>
                <Button
                  nativeButton={false}
                  render={<Link href={whyUs.knowMore.href} />}
                  size="sm"
                  className="w-fit"
                >
                  {whyUs.knowMore.label}
                </Button>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </>
  )
}
