const title = "re:membr";
const description = "A minimal vocabulary & task card app for language learners";

export const APP_METADATA = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://remembr.vercel.app",
    siteName: title,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${title} logo`,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SUWA_Hiroyuki", // 任意
    title,
    description,
    images: ["/logo.png"],
  },
  author: "SUWA Hiroyuki",
  year: new Date().getFullYear(),
};

interface ExternalLink {
  rel: string;
  href: string;
  key: string;
}

export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    rel: "manifest",
    href: "/manifest.json",
    key: "manifest",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
    key: "apple-touch-icon",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Hind&family=Open+Sans&family=Noto+Sans&family=Noto+Sans+Mono&family=Noto+Sans+JP&family=Noto+Serif+JP&display=swap",
    key: "google-fonts",
  },
];
