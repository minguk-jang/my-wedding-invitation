/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-wedding-invitation',
  assetPrefix: '/my-wedding-invitation/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
console.log("🚀 NEXT CONFIG OUTPUT:", nextConfig);

