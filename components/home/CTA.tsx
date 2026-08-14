import Link from "next/link"

import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import { Button } from "@/components/ui/button"

export function CTA() {
  const { cta } = homeContent

  return (
    <section className="border-t border-border bg-secondary py-[72px] lg:py-[140px]">
      <Container>
        <SectionMark>{cta.eyebrow}</SectionMark>
        <SectionHeading
          className="mt-6"
          eyebrow="GEO & AEO scan"
          title={cta.headline}
          body={cta.body}
        />
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            nativeButton={false}
            render={<Link href={cta.primary.href} />}
            size="lg"
          >
            {cta.primary.label}
          </Button>
          <Button
            nativeButton={false}
            render={<Link href={cta.secondary.href} />}
            variant="outline"
            size="lg"
          >
            {cta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
