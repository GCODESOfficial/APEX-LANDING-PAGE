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

export const metadata: Metadata = {
  title:
    "Apex, the next generation of decentralized prediction markets powered by Zero Knowledge Proofs.",
  description:
    "Apex is the next generation of decentralized prediction markets powered by Zero Knowledge Proofs. Trade unseen, protect your alpha, and earn double yield with AI-driven oracles and DeFi-powered liquidity.",
  keywords: [
    "Apex",
    "Prediction Market",
    "ZK-SNARKs",
    "Private Trading",
    "MEV Protection",
    "DeFi",
    "AI Oracle",
    "Yield Vault Contract",
    "APX Token",
    "Blockchain Privacy",
  ],
  authors: [{ name: "Apex Protocol" }],
  creator: "Apex Protocol",
  publisher: "Apex Protocol",
  metadataBase: new URL("https://apexpl.xyz"),
  openGraph: {
    title:
      "Apex, the next generation of decentralized prediction markets powered by Zero Knowledge Proofs.",
    description:
      "Apex is the next generation of decentralized prediction markets powered by Zero Knowledge Proofs. Trade unseen, protect your alpha, and earn double yield with AI-driven oracles and DeFi-powered liquidity.",
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
    title:
      "Apex, the next generation of decentralized prediction markets powered by Zero Knowledge Proofs.",
    description:
      "Apex is the next generation of decentralized prediction markets powered by Zero Knowledge Proofs. Trade unseen, protect your alpha, and earn double yield with AI-driven oracles and DeFi-powered liquidity.",
    creator: "@apexpl_xyz",
    images: ["https://apexpl.xyz/images/Metadata.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
