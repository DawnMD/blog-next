module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'dev-to-uploads.s3.amazonaws.com',
      'i.scdn.co',
      'media.graphcms.com',
      'media.graphassets.com',
    ],
  },

  webpack(config, { dev, isServer }) {
    // ${previousConfig...}

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
