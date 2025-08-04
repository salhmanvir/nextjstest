import type { NextConfig } from "next";

const basePath =
  // process.env.DEPLOY_ENV === "PROD" ? "/nextjstest" : "";

  process.env.NODE_ENV === "production" ? "/nextjstest" : "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: "export", // Enables static export
  basePath,
  assetPrefix: basePath + "/",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath, // expose it to client
  },
};

export default nextConfig;
