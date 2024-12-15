import { NextConfig } from 'next';

const basePath = '/bootcamp-project-2024'; // adjust based on your deployment path

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true, // disable image optimization for static exports
  },
};

export { basePath };
export default nextConfig;
