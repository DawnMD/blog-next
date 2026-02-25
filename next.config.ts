import type { NextConfig } from "next";

const config: NextConfig = {
  // Next.js 16: opt-in cache + Partial Prerendering (PPR)
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
