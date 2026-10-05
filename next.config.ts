import type { NextConfig } from "next";

// Static export: `npm run build` writes the site to `out/`,
// which Render serves as a Static Site (see render.yaml).
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
