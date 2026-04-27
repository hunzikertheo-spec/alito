import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
}

export default nextConfig
