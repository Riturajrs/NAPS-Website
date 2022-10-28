/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "13.233.159.246",
      "localhost",
      "mdbootstrap.com",
      "bitmesra.ac.in",
    ],
  },
};

module.exports = nextConfig;
