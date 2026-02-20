/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/code2career_ai',
  assetPrefix: '/code2career_ai', // Removed the trailing slash
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
