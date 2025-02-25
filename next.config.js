/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '/',

  // Enhanced image optimization settings
  images: {
    unoptimized: true,
    domains: [
      "i.ibb.co",
      "media.licdn.com",
      "framerusercontent.com",
      "blogger.googleusercontent.com",
      "cdn-icons-png.flaticon.com",
      "image.spreadshirtmedia.com",
      "encrypted-tbn0.gstatic.com",
      "www.netgen.co.za",
      "logosandtypes.com",
      "seeklogo.com",
      "live.staticflickr.com",
      "sc.filehippo.net",
      "i.pinimg.com",
      "cdn.pixabay.com",
      "eu-images.contentstack.com",
      "codeprints.dev",
      "yt3.googleusercontent.com",
      "upload.wikimedia.org",
      "erc-jordan.org",
      "cdn.worldvectorlogo.com",
      "irc-jordan.com",
      "huggingface.co",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Static export optimization
  trailingSlash: true,
  poweredByHeader: false,
  
  // Performance optimizations
  compress: true,
  optimizeFonts: true,
  
  // Environment configuration
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
  }
}

module.exports = nextConfig

