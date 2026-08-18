import type { Metadata, Viewport } from "next"
import { cookies } from "next/headers"
import { Geist_Mono, Inter, Fraunces } from "next/font/google"

import "./globals.css"
import { Header } from "@/components/home/Header"
import { Footer } from "@/components/shared/Footer"
import { BackToTop } from "@/components/shared/back-to-top"
import { FloatingContactActions } from "@/components/shared/floating-contact-actions"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
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
  icons: {
    icon: [
      {
        url: "/favicon/icon-light.png",
        type: "image/png",
        sizes: "512x512",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon/icon-dark.png",
        type: "image/png",
        sizes: "512x512",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export async function generateViewport(): Promise<Viewport> {
  const themeCookie = (await cookies()).get("theme")?.value
  const isDark = themeCookie === "dark"

  return {
    colorScheme: isDark ? "dark" : "light",
    themeColor: isDark ? "#1C1A17" : "#F7F4EE",
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeCookie = (await cookies()).get("theme")?.value
  const themeClass = themeCookie === "dark" ? "dark" : "light"

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        inter.variable,
        fraunces.variable,
        fontMono.variable,
        themeClass
      )}
      style={{ colorScheme: themeClass }}
    >
      <body>
        <ThemeProvider
          defaultTheme="light"
          initialTheme={themeClass}
        >
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
            <BackToTop />
            <FloatingContactActions />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
