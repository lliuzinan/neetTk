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
      {
        source: "/medicine/respiratory-medicine/:path*",
        destination: "/neet-ug/biology/human-respiration",
        permanent: true,
      },
      {
        source: "/medicine",
        destination: "/neet-ug/biology",
        permanent: true,
      },
      {
        source: "/medicine/:path*",
        destination: "/neet-ug/biology",
        permanent: true,
      },
      {
        source: "/daily-mcq",
        destination: "/neet-ug/biology",
        permanent: true,
      },
      {
        source: "/mock-test",
        destination: "/neet-ug/biology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
