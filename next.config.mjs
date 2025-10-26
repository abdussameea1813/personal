/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <---- CRITICAL: This generates the 'out/' folder
    basePath: '/personal', 
    assetPrefix: '/personal/',  
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: { optimizeCss: true },
};
export default nextConfig;