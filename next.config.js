/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/my-wedding-invitation' : '',
  assetPrefix: isProd ? '/my-wedding-invitation/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
console.log("🚀 NEXT CONFIG OUTPUT:", nextConfig);

