/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fnbapi.stage.pvg.im',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'fnb-posy.stage.pvg.im',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '12004',
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
			{
				source: '/api/fnb-user-service/:path*',
				destination: `${process.env.NEXT_PUBLIC_API}/fnb-user-service/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
