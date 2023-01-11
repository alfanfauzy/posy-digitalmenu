/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['posy-fnb-ds'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com', 's3-ap-southeast-1.amazonaws.com'],
  },
  // experimental: {
  //   optimizeCss: true,
  // },
}

module.exports = withTM(nextConfig)
