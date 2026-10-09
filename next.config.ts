import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/growth-scenarios",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
