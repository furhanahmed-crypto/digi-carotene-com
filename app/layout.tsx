import type { Metadata } from "next"
import { Geist_Mono, Inter, Lustria } from "next/font/google"

import "./globals.css"
import { Header } from "@/components/home/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const lustria = Lustria({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lustria",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://digicarotene.com"),
  title: {
    default: "Digi Carotene | Digital Marketing Agency",
    template: "%s | Digi Carotene",
  },
  description:
    "Digi Carotene is a digital marketing agency specializing in SEO, AEO, and GEO — plus digital, offline, and PR services that grow brands with clarity and performance.",
  applicationName: "Digi Carotene",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digicarotene.com",
    siteName: "Digi Carotene",
    title: "Digi Carotene | Digital Marketing Agency",
    description:
      "SEO, AEO, and GEO specialists. Digital, offline, and PR marketing that helps brands get found and chosen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digi Carotene | Digital Marketing Agency",
    description:
      "SEO, AEO, and GEO specialists. Digital, offline, and PR marketing that helps brands get found and chosen.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        inter.variable,
        lustria.variable,
        fontMono.variable
      )}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
