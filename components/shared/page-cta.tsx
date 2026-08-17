import Link from "next/link"

import { Button } from "@/components/ui/button"

type PageCtaProps = {
  title: string
  label: string
  href: string
}

export function PageCta({ title, label, href }: PageCtaProps) {
  return (
    <div className="border-t border-line pt-12">
      <h3 className="font-display text-[26px] leading-[1.2] font-medium md:text-[32px]">
        {title}
      </h3>
      <div className="mt-6">
        <Button nativeButton={false} render={<Link href={href} />} size="lg">
          {label}
        </Button>
      </div>
    </div>
  )
}
