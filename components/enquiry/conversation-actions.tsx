"use client"

import { ArrowRight } from "lucide-react"

import { useEnquiry } from "@/components/enquiry/enquiry-provider"
import { Button } from "@/components/ui/button"
import { whatsappHref } from "@/constants/home/navigation"
import {
  bannerCtaPrimaryClassName,
  bannerCtaRowClassName,
  bannerCtaSecondaryClassName,
} from "@/constants/ui/banner-cta"
import { cn } from "@/lib/utils"

type ConversationActionsProps = {
  serviceName?: string
  className?: string
  /** Primary button style for yellow page banners. */
  primaryClassName?: string
  whatsappClassName?: string
}

/** Banner CTAs — conversation opens enquiry modal; WhatsApp only below md. */
export function ConversationActions({
  serviceName,
  className,
  primaryClassName = bannerCtaPrimaryClassName,
  whatsappClassName = bannerCtaSecondaryClassName,
}: ConversationActionsProps) {
  const { openEnquiry } = useEnquiry()

  return (
    <div className={cn(bannerCtaRowClassName, className)}>
      <Button
        type="button"
        size="lg"
        className={primaryClassName}
        onClick={() => openEnquiry({ service: serviceName })}
      >
        Start a conversation
        <ArrowRight className="size-4" />
      </Button>
      <Button
        nativeButton={false}
        render={
          <a href={whatsappHref} target="_blank" rel="noreferrer" />
        }
        size="lg"
        variant="outline"
        className={cn("md:hidden", whatsappClassName)}
      >
        WhatsApp us
      </Button>
    </div>
  )
}
