import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { Search } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { JSX } from "react";

export function Header (){
    type NavItem = {
        readonly url: string,
        readonly name: string,
        readonly icon?: JSX.Element;
    }

    const routes: readonly NavItem[] = [
      {url: '/', name: 'Inicio'},
      {url: '/productos', name: 'Tienda'},
      {url: '/productos/promociones', name: 'Promociones'},
      {url: '/ayuda', name: 'Ayuda'}
    ]

    return(
      <>
        <header className="flex justify-center items-center w-screen h-24 bg-[#13002D] text-white sticky top-0 z-50">
          <div className="flex justify-between items-center w-10/12 max-w-screen-xl px-4">
            <Link href="/">
                <Image
                src="/logo.png"
                alt="Logo de Laser no Sekai"
                width={160}
                height={160}
                className="mx-auto my-4"
                />
              </Link>

              <div className="group relative w-6/12 flex justify-center">
                <Input
                  className=" w-full p-5 pr-12 focus:border-[#B64AFE] focus-visible:ring-[0px] h-12"
                  type="search"
                  placeholder="Buscar producto"
                />

                <Search color="#B64AFE" className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>


              <Link
                href="/carrito"
                className="text-2xl font-bold text-center"
              >
                <ShoppingCart size={26} color="#B64AFE" strokeWidth={2}/>
              </Link>
          </div>
        </header>

        <NavigationMenu className="max-w-screen text-gray-800">
          <NavigationMenuList  className="">
            {routes.map((route) => (
              <NavigationMenuItem className="" key={route.name}>
                 <Link href={route.url} legacyBehavior passHref>
                 <NavigationMenuLink className="text-xl font-semibold hover:text-[#B64AFE]" >
                  {route.name}
                </NavigationMenuLink>
                 </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </>
    )
}

