"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

import { CaseStudyCard } from "./case-study-card"
import { CarouselControls } from "./carousel-controls"

type CaseStudy = {
  id: string
  label: string
  meta: string
  summary: string
}

type CaseStudiesCarouselProps = {
  items: readonly CaseStudy[]
}

export function CaseStudiesCarousel({ items }: CaseStudiesCarouselProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
  })

  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative mt-14">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y items-stretch">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex min-w-full shrink-0 basis-full px-0 md:min-w-0 md:basis-1/3 md:px-2"
            >
              <CaseStudyCard
                index={index}
                meta={item.meta}
                label={item.label}
                summary={item.summary}
              />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls
        slideCount={items.length}
        selectedIndex={selectedIndex}
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        onDotClick={(index) => emblaApi?.scrollTo(index)}
      />
    </div>
  )
}
