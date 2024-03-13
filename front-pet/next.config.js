/** @type {import('next').NextConfig} */

module.exports = {

  experimental: {
    webpackBuildWorker: true,
  },

  webpack: (config, { isServer }) => {
    // For watching file changes
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // For handling SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};