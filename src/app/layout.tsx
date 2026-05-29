import type { Metadata } from "next";

import { Cairo } from "next/font/google";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {

  title: "YallSafer | Luxury Travel",

  description:
    "رحلات سياحية فاخرة إلى أجمل الوجهات العالمية مع تجارب استثنائية وخدمات VIP.",

  keywords: [
    "سفر",
    "سياحة",
    "رحلات",
    "Luxury Travel",
    "Thailand",
    "Turkey",
    "Malaysia",
    "Brazil",
  ],

  openGraph: {

    title: "YallSafer | Luxury Travel",

    description:
      "رحلات سياحية فاخرة وتجارب VIP إلى أجمل الوجهات العالمية.",

    url: "https://yallsafer.com",

    siteName: "YallSafer",

    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "YallSafer Luxury Travel",
      },
    ],

    locale: "ar_SA",

    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title: "YallSafer | Luxury Travel",

    description:
      "رحلات سياحية فاخرة وتجارب VIP حول العالم.",

    images: ["/og.jpg"],
  },

  metadataBase: new URL("https://yallsafer.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="ar" dir="rtl">

      <body className={cairo.className}>

        {children}

      </body>

    </html>
  );
}