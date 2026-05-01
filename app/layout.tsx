import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bethpage CITGO & Convenience Store",
  description: "Your local CITGO gas station and convenience store in Bethpage, NY. Premium fuel, cold beverages, snacks, and auto supplies. Operated by Gogo Fuel.",
  keywords: [
    "Gas station Bethpage", 
    "Convenience store Long Island", 
    "CITGO near me", 
    "Gogo Fuel", 
    "Diesel fuel Bethpage", 
    "Late night snacks", 
    "Air and water station"
  ],
  openGraph: {
    title: "Bethpage CITGO & Convenience",
    description: "Premium fuel and convenience in Bethpage, NY.",
    url: "https://your-future-domain.com", 
    siteName: "Gogo Fuel",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/dark-pump.ico",
        href: "/dark-pump.ico",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/light-pump.ico",
        href: "/light-pump.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
