import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type PageCtaProps = {
  title: string
  label: string
  href: string
}

export function PageCta({ title, label, href }: PageCtaProps) {
  return (
    <div className="rounded-2xl border border-border bg-[#f3efe6] p-6 md:p-8 dark:bg-secondary">
      <h3 className="font-display text-[26px] leading-[1.2] font-medium md:text-[32px]">
        {title}
      </h3>
      <div className="mt-6">
        <Button
          nativeButton={false}
          render={<Link href={href} />}
          size="lg"
          className="bg-brand-yellow text-ink hover:bg-brand-yellow/90"
        >
          {label}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
