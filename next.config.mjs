/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  "output": "export",
  distDir: 'dist',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.watchOptions = { poll: 1000, aggregateTimeout: 500 };
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;