/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
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
  },
  
}

module.exports = nextConfig
