const config = {
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
