const path = require('path');
const { readdirSync } = require('fs');

const pictures = readdirSync(
  path.join(process.cwd(), 'public/assets/img/pictures/'),
)
  .filter((picture) => picture !== '.DS_Store')
  .reverse();

module.exports = {
  env: {
    pictures: JSON.stringify(pictures),
  },
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
