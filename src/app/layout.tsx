import "./globals.css";

import type {
  Metadata,
} from "next";

export const metadata: Metadata = {

  title:
    "YallSafer | رحلات سياحية فاخرة",

  description:
    "رحلات فاخرة إلى شرق آسيا بتجربة سياحية استثنائية وخدمات VIP.",

  keywords: [

    "سياحة",
    "ماليزيا",
    "تايلند",
    "رحلات",
    "سفر",
    "شرق آسيا",
    "Luxury Travel",

  ],

  openGraph: {

    title:
      "YallSafer",

    description:
      "رحلات فاخرة وتجارب سياحية استثنائية.",

    images: [

      {
        url:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },

    ],

    type: "website",

  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "YallSafer",

    description:
      "رحلات فاخرة إلى شرق آسيا",

    images: [

      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    ],

  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="ar">

      <body>

        {children}

      </body>

    </html>

  );
}