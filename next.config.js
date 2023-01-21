/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['aws3.image.com', 's3-ap-southeast-1.amazonaws.com'],
  },
  experimental: {
    optimizeCss: true,
  },
  transpilePackages: ['posy-fnb-ds'],
}

module.exports = nextConfig
