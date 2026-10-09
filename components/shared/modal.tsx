"use client"

import * as React from "react"
import type { ReactNode } from "react"
import type { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { useLenis } from "lenis/react"

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
 *
 * Scroll contract (sitewide):
 * - Locks document + Lenis while open so the page never scrolls under the dialog
 * - Flex column shell; body is the only scroll region (`overscroll-contain`)
 * - `data-lenis-prevent` on the body so wheel stays inside the dialog
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
  const lenis = useLenis()

  React.useEffect(() => {
    if (!open) return

    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    const prevBodyPaddingRight = body.style.paddingRight
    const scrollbarGap = window.innerWidth - html.clientWidth

    html.style.overflow = "hidden"
    body.style.overflow = "hidden"
    if (scrollbarGap > 0) {
      body.style.paddingRight = `${scrollbarGap}px`
    }

    lenis?.stop()

    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
      body.style.paddingRight = prevBodyPaddingRight
      lenis?.start()
    }
  }, [open, lenis])

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={modal}>
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(
          "flex max-h-[min(90vh,720px)] flex-col overflow-hidden",
          className,
          contentClassName
        )}
      >
        <DialogHeader className="shrink-0">
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        <div
          data-slot="modal-body"
          data-lenis-prevent
          data-lenis-prevent-touch
          className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
        >
          {children}
        </div>
        {footer ? (
          <DialogFooter className="shrink-0">{footer}</DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
