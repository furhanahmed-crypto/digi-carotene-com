import type { NextConfig } from "next"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Parent dirs also have bun.lock — pin Turbopack to this app.
  turbopack: {
    root,
  },
}

export default nextConfig
