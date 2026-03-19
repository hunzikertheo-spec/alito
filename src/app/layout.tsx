import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alito — Théo Hunziker · Développeur Web Freelance",
  description:
    "Développeur web freelance basé à Chavornay, Suisse. Création de sites vitrines modernes, rapides et optimisés SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-[Satoshi,sans-serif]">
        {children}
      </body>
    </html>
  );
}
