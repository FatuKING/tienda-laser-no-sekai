import type { Metadata } from "next";

import { Orbitron, Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const sairaSemiCondensed = Saira_Semi_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Laser no Sekai",
  description: "Ofrecemos cuadros, llaveros, separadores, cajas y más, todo hecho en madera de alta calidad, con diseños exclusivos inspirados en tus series favoritas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${sairaSemiCondensed.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
