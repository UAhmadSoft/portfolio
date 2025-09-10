import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '',
  assetPrefix: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'typeorm.io',
      },
    ],
  },
};

export default nextConfig;
