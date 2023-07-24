/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [""],
    formats: ["image/avif", "image/webp"],
  },
  distDir: "build",
};

module.exports = nextConfig;
