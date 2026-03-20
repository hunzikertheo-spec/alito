import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://alito.ch";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Alito — Développeur web freelance à Chavornay, Suisse",
  description:
    "Sites web professionnels pour PME et indépendants de Suisse romande. Livré en 48h, sans les prix d'agence. Basé à Chavornay, VD.",
  keywords: [
    "développeur web suisse",
    "site web PME",
    "freelance vaud",
    "chavornay",
    "site vitrine suisse romande",
    "création site web",
    "développeur freelance lausanne",
    "site web yverdon",
  ],
  authors: [{ name: "Théo Hunziker", url: BASE_URL }],
  creator: "Théo Hunziker",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: BASE_URL,
    siteName: "Alito",
    title: "Alito — Développeur web freelance à Chavornay, Suisse",
    description:
      "Sites web professionnels pour PME et indépendants de Suisse romande. Livré en 48h, sans les prix d'agence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alito — Développeur web freelance à Chavornay, Suisse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alito — Développeur web freelance à Chavornay, Suisse",
    description:
      "Sites web professionnels pour PME et indépendants de Suisse romande. Livré en 48h, sans les prix d'agence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Alito",
      url: BASE_URL,
      email: "alito.theo@gmail.com",
      description:
        "Développeur web freelance spécialisé dans la création de sites vitrines modernes pour les PME et indépendants de Suisse romande.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chavornay",
        addressLocality: "Chavornay",
        addressRegion: "Vaud",
        postalCode: "1373",
        addressCountry: "CH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 46.7092,
        longitude: 6.5706,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Suisse romande",
      },
      priceRange: "CHF 650–2800",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services web",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Site Vitrine Essentiel",
              description: "Site one-page responsive avec SEO de base",
            },
            price: "900",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Site Vitrine Standard",
              description: "Jusqu'à 5 pages, animations, SEO avancé",
            },
            price: "1600",
            priceCurrency: "CHF",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Site Vitrine Pro",
              description: "Pages illimitées, CMS, multilingue",
            },
            price: "2800",
            priceCurrency: "CHF",
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Théo Hunziker",
      jobTitle: "Développeur web freelance",
      url: BASE_URL,
      email: "alito.theo@gmail.com",
      worksFor: { "@id": `${BASE_URL}/#business` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chavornay",
        addressRegion: "Vaud",
        addressCountry: "CH",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SEO",
        "Web Performance",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Alito",
      inLanguage: "fr-CH",
      publisher: { "@id": `${BASE_URL}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[Satoshi,sans-serif]">
        {children}
      </body>
    </html>
  );
}
