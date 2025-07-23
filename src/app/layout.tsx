import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Andrii Volkov - Artist",
    default: "Andrii Volkov - Contemporary Artist Portfolio"
  },
  description: "Contemporary artist Andrii Volkov transforms ordinary materials into extraordinary art. Discover original paintings and tattoo designs inspired by urban environments and alternative materials.",
  keywords: [
    "Andrii Volkov",
    "contemporary artist", 
    "paintings",
    "tattoo art",
    "mixed media",
    "Amsterdam artist",
    "street art",
    "urban art",
    "alternative materials",
    "art portfolio",
    "Aia Contemporary"
  ],
  authors: [{ name: "Andrii Volkov" }],
  creator: "Andrii Volkov",
  publisher: "Andrii Volkov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andriivolkov.com",
    title: "Andrii Volkov - Contemporary Artist Portfolio",
    description: "Contemporary artist Andrii Volkov transforms ordinary materials into extraordinary art. Discover original paintings and tattoo designs inspired by urban environments.",
    siteName: "Andrii Volkov - Artist Portfolio",
    images: [
      {
        url: "https://andriivolkov.com/images/Andrii-Volkov-Amsterdam-2019.jpeg",
        width: 1200,
        height: 630,
        alt: "Andrii Volkov - Contemporary Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrii Volkov - Contemporary Artist Portfolio",
    description: "Contemporary artist Andrii Volkov transforms ordinary materials into extraordinary art.",
    images: ["https://andriivolkov.com/images/Andrii-Volkov-Amsterdam-2019.jpeg"],
  },
  alternates: {
    canonical: "https://andriivolkov.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/images/volkov-profile.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}
      >
        <GoogleAnalytics />
        <StructuredData type="person" />
        <StructuredData type="website" />
        {children}
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      </body>
    </html>
  );
}
