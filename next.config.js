// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
// };

// export default nextConfig;
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/my-wedding-invitation' : '',
  trailingSlash: true,
};

module.exports = nextConfig;

