/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.torob.com",
      },
      {
        protocol: "https",
        hostname: "mag.tazminyadak.com",
      },
    ],
  },
};

export default nextConfig;
