import nextMDX from "@next/mdx";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const withMDX = nextMDX();
const withBundleAnalyzer = NextBundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com"
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
      {
        hostname: "invidious.projectsegfau.lt"
      }
    ]
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // HACK: Webpack doesn't want to comply.
    ignoreBuildErrors: true
  },

  // HACK: Transpiles ESM-only packages to CJS because Next.js doesn't want to natively support ESM.
  transpilePackages: ["@mdx-js/loader", "@mdx-js/react", "next-mdx-remote"]
};

export default withBundleAnalyzer(withMDX(nextConfig));
