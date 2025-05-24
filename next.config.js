/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-wedding-invitation',
  assetPrefix: '/my-wedding-invitation/',
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
console.log("🚀 NEXT CONFIG OUTPUT:", nextConfig);

