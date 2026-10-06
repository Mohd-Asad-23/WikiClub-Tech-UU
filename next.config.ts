import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/WikiClub-Tech-UU",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      "i.ibb.co",
      "picsum.photos",
      "api.qrserver.com"
    ],
  },
};

export default nextConfig;