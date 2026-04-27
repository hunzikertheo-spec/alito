import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
}

export default nextConfig
