export const APP_METADATA = {
  title: "re:membr",
  description: "A minimal vocabulary & task card app for language learners",
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
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Hind&family=Open+Sans&family=Noto+Sans&family=Noto+Sans+Mono&family=Noto+Sans+JP&family=Noto+Serif+JP&display=swap",
    key: "google-fonts",
  },
];
