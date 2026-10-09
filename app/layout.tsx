import type { Metadata, Viewport } from "next"
import { cookies } from "next/headers"
import { Geist_Mono, Inter, Fraunces } from "next/font/google"
import Script from "next/script"

import "./globals.css"
import { Header } from "@/components/home/Header"
import { Footer } from "@/components/shared/Footer"
import { BackToTop } from "@/components/shared/back-to-top"
import { FloatingContactActions } from "@/components/shared/floating-contact-actions"
import { EnquiryProvider } from "@/components/enquiry/enquiry-provider"
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
    default: "Digital Marketing Agency in Hyderabad | Digi Carotene",
    template: "%s | Digi Carotene",
  },
  description:
    "SEO, AI search (GEO/AEO), ads, social media, websites and BTL activations for 300+ brands in Hyderabad and worldwide. Get a free audit.",
  applicationName: "Digi Carotene",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digicarotene.com",
    siteName: "Digi Carotene",
    title: "Digital Marketing Agency in Hyderabad | Digi Carotene",
    description:
      "SEO, AI search (GEO/AEO), ads, social media, websites and BTL activations for 300+ brands in Hyderabad and worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Hyderabad | Digi Carotene",
    description:
      "Performance and growth marketing for Hyderabad and global brands — reported in leads and revenue.",
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
      data-scroll-behavior="smooth"
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
        <Script
          id="motion-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-motion","on")}}catch(e){}})();`,
          }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;visibility:visible!important}`}</style>
        </noscript>
        <ThemeProvider
          defaultTheme="light"
          initialTheme={themeClass === "dark" ? "dark" : "light"}
        >
          <SmoothScrollProvider>
            <EnquiryProvider>
              <Header />
              {children}
              <Footer />
              <BackToTop />
              <FloatingContactActions />
            </EnquiryProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
