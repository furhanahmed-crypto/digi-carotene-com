"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

type CarouselControlsProps = {
  slideCount: number
  selectedIndex: number
  onPrev: () => void
  onNext: () => void
  onDotClick: (index: number) => void
}

export function CarouselControls({
  slideCount,
  selectedIndex,
  onPrev,
  onNext,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            onClick={() => onDotClick(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              selectedIndex === index
                ? "bg-carotene w-6"
                : "bg-line w-2 hover:bg-muted-foreground/40"
            )}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous case study"
          onClick={onPrev}
          className="flex size-10 items-center justify-center border border-line bg-background transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next case study"
          onClick={onNext}
          className="flex size-10 items-center justify-center border border-line bg-background transition-colors hover:bg-secondary"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
