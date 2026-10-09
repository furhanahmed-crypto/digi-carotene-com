"use client"

import { ArrowRight } from "lucide-react"

import { useEnquiry } from "@/components/enquiry/enquiry-provider"
import { Button } from "@/components/ui/button"
import { matchEnquiryService } from "@/lib/enquiry"
import { cn } from "@/lib/utils"

type OpenEnquiryButtonProps = {
  serviceName?: string
  label?: string
  className?: string
  size?: "default" | "sm" | "lg"
}

export function OpenEnquiryButton({
  serviceName,
  label = "Start a conversation",
  className,
  size = "lg",
}: OpenEnquiryButtonProps) {
  const { openEnquiry } = useEnquiry()

  return (
    <Button
      type="button"
      size={size}
      className={cn(className)}
      onClick={() =>
        openEnquiry({ service: matchEnquiryService(serviceName) })
      }
    >
      {label}
      <ArrowRight className="size-4" />
    </Button>
  )
}
