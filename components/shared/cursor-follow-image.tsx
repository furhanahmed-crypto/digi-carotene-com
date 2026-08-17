"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

type CursorFollowImageProps = {
  src: string
  visible: boolean
  x: number
  y: number
}

export function CursorFollowImage({
  src,
  visible,
  x,
  y,
}: CursorFollowImageProps) {
  if (!src) return null

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-40 hidden aspect-video w-72 overflow-hidden border border-line bg-secondary shadow-xl transition-[opacity,transform] duration-200 ease-out motion-reduce:hidden md:block",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{
        transform: `translate3d(${x + 24}px, ${y - 90}px, 0) rotate(-6deg) scale(${visible ? 1 : 0.92})`,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="288px"
        className="object-cover"
      />
      <span className="bg-carotene absolute top-0 left-0 h-full w-1" />
    </div>
  )
}
