import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import { getPlaceholderImage } from "@/lib/placeholder-images"

export function Problem() {
  const { problem } = homeContent

  return (
    <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow={problem.eyebrow}
              title={problem.headline}
            />
            <ImagePlaceholder
              label="Discovery visual"
              src={getPlaceholderImage(0)}
              className="mt-10 aspect-video w-full lg:mt-12"
            />
          </Reveal>

          <Reveal delayMs={40} className="lg:col-span-7">
            <p className="text-lg leading-[1.6] text-muted-foreground md:text-xl">
              {problem.body}
            </p>
            <p className="mt-6 text-base leading-[1.6] text-muted-foreground md:text-lg">
              {problem.closer}
            </p>
            <div className="mt-8 border border-border bg-secondary p-6">
              <SectionMark>{problem.mark}</SectionMark>
              <p className="mt-5 text-base leading-[1.6] text-muted-foreground">
                {problem.markBody}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
