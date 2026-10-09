"use client"

import type { ReactNode } from "react"
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  contentClassName?: string
  showCloseButton?: boolean
  /**
   * Prefer `trap-focus` when the modal hosts a portaled Select/Menu —
   * full `true` scroll-lock blocks wheel on those popups.
   */
  modal?: DialogPrimitive.Root.Props["modal"]
}

/**
 * Reusable modal shell over shadcn/Base UI Dialog.
 * Use for enquiry forms and other project dialogs.
 */
export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
  contentClassName,
  showCloseButton = true,
  modal = "trap-focus",
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={modal}>
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(className, contentClassName)}
      >
        <DialogHeader className="shrink-0">
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        <div className="min-w-0">{children}</div>
        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  )
}
