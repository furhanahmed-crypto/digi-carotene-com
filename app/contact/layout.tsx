import type { Metadata } from "next"
import type { ReactNode } from "react"

import { metadataFor } from "@/lib/seo/page-meta"

export const metadata: Metadata = metadataFor("/contact")

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
