import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Orbitron, Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const sairaSemiCondensed = Saira_Semi_Condensed({
  variable: "--font-saira-semi-condensed",
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
        <header className="flex justify-around items-center w-screen">
          <Link href="/">
            <Image
            src="/logo.png"
            alt="Logo de Laser no Sekai"
            width={140}
            height={140}
            className="mx-auto my-4"
          />
            </Link>


          <Input className="w-2/5" type="search" placeholder="Buscar producto"></Input>

          <Link
            href="/carrito"
            className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200"
          >
            <ShoppingCart className="text-black"/>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
