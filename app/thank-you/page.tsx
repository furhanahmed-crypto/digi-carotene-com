import type { Metadata } from "next"
import { Suspense } from "react"

import { ThankYouContent } from "@/components/thank-you/thank-you-content"

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for getting in touch. A Digi Carotene strategist will reply within one working day.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-svh items-center justify-center text-sm text-muted-foreground">
          Loading…
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
