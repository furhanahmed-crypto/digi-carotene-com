import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/motion/reveal"
import { SectionMark } from "@/components/shared/section-mark"
import { getPlaceholderImage } from "@/lib/placeholder-images"

export type BreadcrumbItem = {
  label: string
  href?: string
}

type PageHeaderProps = {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  mark?: string
  imageIndex?: number
}

export function PageHeader({
  title,
  description,
  breadcrumbs = [],
  mark,
  imageIndex = 0,
}: PageHeaderProps) {
  const sectionMark = mark ?? breadcrumbs[0]?.label ?? "Overview"

  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-20 md:pt-36 md:pb-28">
      <Image
        src={getPlaceholderImage(imageIndex)}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,196,0,0.22),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(243,239,230,0.55),transparent_40%)]" />

      <Container className="relative z-10">
        <Reveal className="max-w-4xl">
          <div className="rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur-md md:p-8">
            {breadcrumbs.length > 0 && (
              <nav
                data-reveal="eyebrow"
                className="mb-8 flex flex-wrap items-center gap-2 text-[13px] tracking-[0.03em] text-muted-foreground uppercase"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                {breadcrumbs.map((item) => (
                  <span key={item.label} className="flex items-center gap-2">
                    <span className="text-brand-yellow" aria-hidden="true">
                      /
                    </span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-foreground">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}
            <SectionMark data-reveal="eyebrow">{sectionMark}</SectionMark>
            <h1
              data-reveal="heading"
              className="mt-6 font-display text-[40px] leading-[1.05] font-medium tracking-[-0.01em] md:text-[64px] lg:text-[72px]"
            >
              {title}
            </h1>
            {description ? (
              <p
                data-reveal="text"
                className="mt-6 max-w-2xl text-base leading-[1.6] text-muted-foreground md:text-lg"
              >
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
