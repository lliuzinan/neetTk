import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/neet-pg-question-bank",
        destination: "/neet-ug/biology",
        permanent: true,
      },
      {
        source: "/medicine/endocrinology",
        destination: "/neet-ug/biology/endocrine-system-and-hormones",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
