import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source:"/contact-buhr.html",
        destination:"/contact-us",
        permanent: true,
      },
      {
        source:"/about-buhr",
        destination:"/about-us",
        permanent: true,
      },
      {
        source:"/gallery.html",
        destination:"/gallery",
        permanent: true,
      },
      {
        source:"/new-construction.html",
        destination:"/services",
        permanent: true,
      },
      {
        source:"/remodeling.html",
        destination:"/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
