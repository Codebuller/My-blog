/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
      }, 
    ]
}
}

module.exports = nextConfig
