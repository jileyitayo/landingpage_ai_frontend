// import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
      return [
          {
              source: '/api/:path*',
              destination: 'http://backend:8000/api/:path*'
          }
      ]
  }
}

module.exports = nextConfig
// export default nextConfig;