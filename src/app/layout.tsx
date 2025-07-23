import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrii Volkov - Artist Portfolio",
  description: "Portfolio of paintings and tattoo artworks by Andrii Volkov",
  keywords: ["artist", "paintings", "tattoo", "portfolio", "art"],
  authors: [{ name: "Andrii Volkov" }],
  openGraph: {
    title: "Andrii Volkov - Artist Portfolio",
    description: "Portfolio of paintings and tattoo artworks by Andrii Volkov",
    type: "website",
    url: "https://andriivolkov.com",
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
        {children}
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      </body>
    </html>
  );
}
