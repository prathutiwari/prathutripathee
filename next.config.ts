import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/resume", destination: "/about", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/about/about", destination: "/about", permanent: true },
      { source: "/about/skills", destination: "/skills", permanent: true },
      { source: "/about/portfolio", destination: "/work", permanent: true },
      { source: "/about/resume", destination: "/about", permanent: true },
      { source: "/about/blog", destination: "/insights", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
