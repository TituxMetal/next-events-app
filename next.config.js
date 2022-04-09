/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  }
  // devIndicators: {
  //   buildActivity: true,
  //   buildActivityPosition: 'bottom-right'
  // }
}

module.exports = nextConfig
