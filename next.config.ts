import type { NextConfig } from "next";

const basePath =
  process.env.DEPLOY_ENV === "PROD"
    ? "/nextjstest"
    : process.env.DEPLOY_ENV === "TEST"
    ? "/nextjstest-test"
    : "";

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
