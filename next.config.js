/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com",`${process.env.APIBASE}`,"localhost:3000","mdbootstrap.com"]
  }
}

module.exports = nextConfig
