/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  },
  runtime: 'nodejs'
};
module.exports = nextConfig;
