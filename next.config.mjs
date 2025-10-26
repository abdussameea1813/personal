/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // CRITICAL: Must be the GitHub Repository Name
  basePath: '/personal', 
  // CRITICAL: Must be the GitHub Repository Name + trailing slash
  assetPrefix: '/personal/', 
  
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: { optimizeCss: true },
};
export default nextConfig;