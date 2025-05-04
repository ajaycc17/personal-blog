/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", // Only uncomment if you're doing static export
    images: {
      // loader: "akamai", // Only needed for Akamai CDN
      // path: "", // Not needed unless custom CDN
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          // port and pathname can be omitted when empty
        },
      ],
      formats: ['image/webp'], // Enable modern formats
      minimumCacheTTL: 60, // Default 60 seconds
    },
    // Modern Next.js 15 optimizations:
    experimental: {
      // optimizePackageImports: ['@heroicons/react'], // Uncomment if using specific libs
    },
    logging: {
      level: 'error', // Reduces console noise
    },
    // Production optimizations:
    productionBrowserSourceMaps: true, // Helps debugging
    compress: true, // Enabled by default
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;