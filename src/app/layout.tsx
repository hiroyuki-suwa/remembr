import "./globals.css";
import type { Metadata } from "next";
import { APP_METADATA, EXTERNAL_LINKS } from "@/constants";
import { AppShell } from "@/app/components/templates/AppShell";

export const metadata: Metadata = {
  title: APP_METADATA.title,
  description: APP_METADATA.description,
  openGraph: APP_METADATA.openGraph,
  twitter: APP_METADATA.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = EXTERNAL_LINKS.map((link) => (
    <link key={link.key} rel={link.rel} href={link.href} />
  ));

  return (
    <html lang="ja">
      <head>{links}</head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
