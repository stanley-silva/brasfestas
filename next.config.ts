import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/categorias/varetas-e-acessorios",
        destination: "/categorias/baloes",
        permanent: true,
      },
      {
        source: "/categorias/decoracao-e-topos-de-bolo",
        destination: "/categorias/decoracao",
        permanent: true,
      },
      {
        source: "/categorias/velas",
        destination: "/categorias/velas-e-topos-de-bolo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
