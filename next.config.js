/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.ibb.co'], 
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;