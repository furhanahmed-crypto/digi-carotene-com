import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { BlogCta } from "@/types/blog"

type BlogCtaBoxProps = {
  cta: BlogCta
}

export function BlogCtaBox({ cta }: BlogCtaBoxProps) {
  return (
    <aside className="mt-12 rounded-2xl border border-ink/10 bg-brand-yellow p-6 text-ink md:p-8">
      <p className="text-[12px] font-medium tracking-[0.1em] uppercase">
        Next step
      </p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed md:text-[17px]">
        {cta.body}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          nativeButton={false}
          render={<Link href={cta.primaryHref} />}
          size="lg"
          className="bg-ink text-paper hover:bg-ink/90"
        >
          {cta.primaryLabel}
          <ArrowRight className="size-4" />
        </Button>
        <Button
          nativeButton={false}
          render={<Link href={cta.secondaryHref} />}
          size="lg"
          variant="outline"
          className="border-ink/20 bg-white/70 text-ink hover:bg-white"
        >
          {cta.secondaryLabel}
        </Button>
      </div>
    </aside>
  )
}
