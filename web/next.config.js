/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aitools-1255475898.cos.ap-beijing.myqcloud.com',
        port: '',
        pathname: '/screenshots/**',
      },
    ],
  },
}

module.exports = nextConfig 