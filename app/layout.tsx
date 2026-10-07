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
    default: "Data-Led Digital Marketing Agency, Hyderabad & Bangalore",
    template: "%s | Digi Carotene",
  },
  description:
    "Data-led digital marketing agency with 7+ years and 300+ clients. SEO, AEO, performance ads, social, web and offline activations in Hyderabad and Bangalore.",
  applicationName: "Digi Carotene",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digicarotene.com",
    siteName: "Digi Carotene",
    title: "Data-Led Digital Marketing Agency, Hyderabad & Bangalore",
    description:
      "Found. Chosen. Measured. Digi Carotene helps brands get found on Google, recommended by AI, and chosen in the real world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data-Led Digital Marketing Agency, Hyderabad & Bangalore",
    description:
      "Found. Chosen. Measured. SEO, AEO, ads, social, web and offline activations — reported in leads and revenue.",
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
    themeColor: isDark ? "#0F0F10" : "#FAFAF8",
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
