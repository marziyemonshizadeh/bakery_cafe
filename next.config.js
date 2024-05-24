/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
