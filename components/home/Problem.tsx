import { homeContent } from "@/lib/home-content"
import { Container } from "@/components/shared/container"
import { ImagePlaceholder } from "@/components/shared/image-placeholder"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { SectionMark } from "@/components/shared/section-mark"
import { getPlaceholderImage } from "@/lib/placeholder-images"

export function Problem() {
  const { problem } = homeContent

  return (
    <section className="border-t border-border bg-background py-[72px] lg:py-[140px]">
      <Container>
        <Reveal className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={problem.eyebrow}
              title={problem.headline}
              eyebrowProps={{ "data-reveal": "eyebrow" }}
              titleProps={{ "data-reveal": "heading" }}
            />
            <ImagePlaceholder
              data-reveal="image"
              label="Discovery visual"
              src={getPlaceholderImage(0)}
              className="mt-10 aspect-video w-full lg:mt-12"
            />
          </div>

          <div className="lg:col-span-7">
            <p
              data-reveal="text"
              className="text-lg leading-[1.6] text-muted-foreground md:text-xl"
            >
              {problem.body}
            </p>
            <p
              data-reveal="text"
              className="mt-6 text-base leading-[1.6] text-muted-foreground md:text-lg"
            >
              {problem.closer}
            </p>
            <div
              data-reveal="card"
              className="mt-8 border border-border bg-secondary p-6"
            >
              <SectionMark>{problem.mark}</SectionMark>
              <p className="mt-5 text-base leading-[1.6] text-muted-foreground">
                {problem.markBody}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
