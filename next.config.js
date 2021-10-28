module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};
