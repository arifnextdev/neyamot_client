import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
