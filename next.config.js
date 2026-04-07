/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true, // 🔥 add this
  },
};

module.exports = nextConfig;

module.exports = nextConfig;
