import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better React practices
  reactStrictMode: true,
  // Optimize images
  images: {
    domains: [], // Add your image domains here if needed
    remotePatterns: [], // For Next.js 13+ image optimization
  },
};

export default nextConfig;