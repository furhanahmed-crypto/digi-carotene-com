import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer" | "nav"
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-3.5 min-[360px]:px-5 md:px-8 lg:px-12 xl:px-24",
        className
      )}
    >
      {children}
    </Tag>
  )
}
