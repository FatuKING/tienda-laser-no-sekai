import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header (){
    return(
        <header className="flex justify-around items-center w-screen h-24 bg-[#13002D] text-white">
          <Link href="/">
            <Image
            src="/logo.png"
            alt="Logo de Laser no Sekai"
            width={120}
            height={120}
            className="mx-auto my-4"
          />
            </Link>


          <Input className="w-2/5" type="search" placeholder="Buscar producto"></Input>

          <Link
            href="/carrito"
            className="text-2xl font-bold text-center"
          >
            <ShoppingCart size={28} color="white" strokeWidth={2}/>
          </Link>
        </header>
    )
}