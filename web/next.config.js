/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['aitools-1255475898.cos.ap-beijing.myqcloud.com'],
  },
  webpack: (config, { isServer }) => {
    // 只在客户端构建时应用这些优化
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 24000000, // 24MB，确保在 Cloudflare 的 25MB 限制之下
          cacheGroups: {
            default: false,
            vendors: false,
            // 将工具数据分离到单独的chunk
            toolsData: {
              name: 'tools-data',
              test: /[\\/]data[\\/]tools\.json$/,
              chunks: 'all',
              priority: 10,
              enforce: true,
            },
            // 将组件分离到单独的chunk
            components: {
              name: 'components',
              test: /[\\/]components[\\/]/,
              chunks: 'all',
              priority: 5,
              enforce: true,
            },
            // 将大型依赖分离到单独的chunk
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 1,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
}

module.exports = nextConfig 