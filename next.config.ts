import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/neet-pg-question-bank",
        destination: "/neet-ug/biology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
