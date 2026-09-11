import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/neet-ug/biology/:topicSlug/q/:questionId",
        destination: "/neet-ug/biology/:topicSlug",
        permanent: true,
      },
      {
        source: "/neet-ug/biology/practice/:topicSlug",
        destination: "/neet-ug/biology/:topicSlug",
        permanent: true,
      },
      {
        source: "/neet-ug/biology/practice",
        destination: "/neet-ug/biology",
        permanent: true,
      },
      {
        source: "/neet-ug/biology/notes/:topicSlug",
        destination: "/neet-ug/biology/:topicSlug",
        permanent: true,
      },
      {
        source: "/neet-ug/biology/:legacy(ncert-class-11-mcqs|ncert-class-12-mcqs|chapter-wise-mcqs|mcqs-with-answers)",
        destination: "/neet-ug/biology",
        permanent: true,
      },
      {
        source: "/neet-ug/biology/free-mcq-pdf",
        destination: "/neet-biology-pdf",
        permanent: true,
      },
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
