/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['aws3.image.com', 's3-ap-southeast-1.amazonaws.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pvpapi.klikoo.co.id',
				port: '',
				pathname: '/**',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/api/fnb-product-service/:path*',
				destination: `${process.env.NEXT_PUBLIC_API}/fnb-product-service/:path*`,
			},
			{
				source: '/api/fnb-order-service/:path*',
				destination: `${process.env.NEXT_PUBLIC_API}/fnb-order-service/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
