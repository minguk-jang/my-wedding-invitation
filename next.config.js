// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   output: "export",
// //   reactStrictMode: true,
// // };

// // export default nextConfig;
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   output: 'export',
//   basePath: isProd ? '/my-wedding-invitation' : '',
//   trailingSlash: true,
// };

// module.exports = nextConfig;

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/my-wedding-invitation' : '',
  assetPrefix: isProd ? '/my-wedding-invitation/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
console.log("🚀 NEXT CONFIG OUTPUT:", nextConfig);

