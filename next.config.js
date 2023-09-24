/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {domains: ['images.unsplash.com','media.istockphoto.com','www.kenneth-system.net']}
};  
module.exports = nextConfig


