import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apex – The Pinnacle of Privacy Prediction Markets",
  description:
    "Apex fuses Zero Knowledge Proofs and DeFi yield optimization to create the next era of decentralized forecasting. Trade privately, earn efficiently, and dominate the future of prediction markets.",
  keywords: [
    "Apex",
    "ApexPL",
    "Prediction Markets",
    "DeFi",
    "Zero Knowledge Proofs",
    "ZK-SNARKs",
    "Blockchain",
    "Privacy Trading",
    "Forecasting",
    "Crypto",
    "Web3",
  ],
  authors: [{ name: "Apex Protocol" }],
  creator: "Apex Protocol",
  publisher: "Apex Protocol",
  metadataBase: new URL("https://apexpl.xyz"),
  openGraph: {
    title: "Apex – The Pinnacle of Privacy Prediction Markets",
    description:
      "Trade privately, earn double, and stay invisible until settlement. Apex is the next-gen ZK-powered prediction market for DeFi traders and institutions.",
    url: "https://apexpl.xyz",
    siteName: "Apex Protocol",
    images: [
      {
        url: "https://apexpl.xyz/images/Metadata.png",
        width: 1200,
        height: 630,
        alt: "Apex Privacy Prediction Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex – The Pinnacle of Privacy Prediction Markets",
    description:
      "Apex fuses privacy, prediction, and DeFi yield into a single protocol. Predict confidentially, earn efficiently.",
    creator: "@apexpl_xyz", // update this when you have your handle
    images: ["https://apexpl.xyz/images/Metadata.png"],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
