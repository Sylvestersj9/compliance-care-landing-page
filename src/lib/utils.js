import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "Compliance Care - AI-Powered OFSTED Compliance for Children's Care",
  description = "Get inspection-ready with Compliance Care's AI platform. Document analysis, mock inspections, and incident pattern recognition designed for UK children's homes. £197/month early adopter pricing.",
  image = "/openGraph.png",
  icons = "/favicon.ico",
} = {}) {
  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      siteName: "Compliance Care",
      url: "https://saas-landing-page-pied-seven.vercel.app/",
      type: "website",
      images: [{ url: image }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourhandle",
    },
    metadataBase: new URL('https://saas-landing-page-pied-seven.vercel.app/')
  };
}