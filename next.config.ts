import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.politzek.org',
        port: '',
      },
    ],
  },
};

export default nextConfig;
