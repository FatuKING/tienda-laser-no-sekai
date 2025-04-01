import type { Metadata } from "next";
import Link from "next/link";

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

        <nav className="flex justify-center w-screen">
          <ul className="flex justify-around items-center w-2/3 h-12">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/productos">Tienda</Link>
            </li>
            <li>
              <Link href="/productos">Promociónes</Link>
            </li>
            <li>
              <Link href="/ayuda">Ayuda</Link>
            </li>
          </ul>
        </nav>

        {children}

        <Footer />
      </body>
    </html>
  );
}
