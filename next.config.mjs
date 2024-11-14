/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import { hostname } from "os";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "example.com" },
      { hostname: "picsum.photos" },
      { hostname: "via.placeholder.com" },
      { hostname: "randomuser.me" },
      { hostname: "vectorlogo.zone" },
      { hostname: "cdn.worldvectorlogo.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
