import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Fix for Three.js in Next.js
    // Only alias modules that are truly not needed in browser and won't break Next.js
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        // Don't alias 'path' - Next.js needs it internally
        crypto: false,
      };
    }

    // Ensure externals array exists
    config.externals = config.externals || [];
    
    return config;
  },
  // Turbopack configuration (Next.js 15+)
  // Only alias modules that won't break Next.js internals
  turbopack: {
    resolveAlias: {
      // Only alias fs and crypto - path is needed by Next.js
      fs: './src/lib/empty-module.ts',
      crypto: './src/lib/empty-module.ts',
    },
  },
  // Enable strict mode for better React practices
  reactStrictMode: true,
  // Optimize images
  images: {
    domains: [], // Add your image domains here if needed
    remotePatterns: [], // For Next.js 13+ image optimization
  },
};

export default nextConfig;