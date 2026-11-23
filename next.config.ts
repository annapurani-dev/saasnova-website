import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/storefront-saasnova",
        destination: "/solutions/storefront",
        permanent: true,
      },
      // Resources legacy URL redirects
      {
        source: "/blog",
        destination: "/resources?view=blog",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/resources?view=blog",
        permanent: true,
      },
      {
        source: "/show",
        destination: "/resources?view=show",
        permanent: true,
      },
      {
        source: "/show.html",
        destination: "/resources?view=show",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "/resources?view=case-studies",
        permanent: true,
      },
      {
        source: "/case-study.html",
        destination: "/resources?view=case-studies",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/resources?view=case-studies",
        permanent: true,
      },
      {
        source: "/webinars",
        destination: "/resources?view=webinars",
        permanent: true,
      },
      {
        source: "/webinars.html",
        destination: "/resources?view=webinars",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/resources?view=events",
        permanent: true,
      },
      {
        source: "/events.html",
        destination: "/resources?view=events",
        permanent: true,
      },
      {
        source: "/news-press",
        destination: "/resources?view=news",
        permanent: true,
      },
      {
        source: "/news-press.html",
        destination: "/resources?view=news",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/resources?view=newsletter",
        permanent: true,
      },
      {
        source: "/newsletter.html",
        destination: "/resources?view=newsletter",
        permanent: true,
      },
      // Individual detail URLs to in-page views
      {
        source: "/blog-aws-prm-deadline",
        destination: "/resources?view=blog&article=blog-aws-prm-deadline",
        permanent: true,
      },
      {
        source: "/blog-aws-alignment",
        destination: "/resources?view=blog&article=blog-aws-alignment",
        permanent: true,
      },
      {
        source: "/blog-cloud-marketplace-listing-silent-fix",
        destination: "/resources?view=blog&article=blog-cloud-marketplace-listing-silent-fix",
        permanent: true,
      },
      {
        source: "/saasnova-hydrolix-blog-stop-buying-software-like-2015",
        destination: "/resources?view=blog&article=saasnova-hydrolix-blog-stop-buying-software-like-2015",
        permanent: true,
      },
      {
        source: "/case-study-arcticwolf",
        destination: "/resources?view=case-studies&case=arcticwolf",
        permanent: true,
      },
      {
        source: "/case-study-dataminr",
        destination: "/resources?view=case-studies&case=dataminr",
        permanent: true,
      },
      {
        source: "/networking-dinner.html",
        destination: "/resources?view=events",
        permanent: true,
      },
      {
        source: "/saasnova-feenix-pr-aws-marketplace-storefront",
        destination: "/resources?view=news",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
