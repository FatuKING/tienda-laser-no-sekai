import { Instagram } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export function Footer () {
    return(
        <footer className="flex justify-around w-screen bg-[#13002D] text-white p-4">
        <ul>
          <h6 className="font-semibold">Categorias</h6>
          <li>
            <Link className="text-gray-300 hover:text-white hover:border-b-1" href="/productos/llaveros">Llaveros</Link>
          </li>
          <li>
            <Link className="text-gray-300 hover:text-white hover:border-b-1" href="/productos/cuadros">Cuadros</Link>
          </li>
          <li>
            <Link className="text-gray-300 hover:text-white hover:border-b-1" href="/productos/separadores">Separadores</Link>
          </li>
          <li>  
            <Link className="text-gray-300 hover:text-white hover:border-b-1" href="/productos/cajas">Cajas</Link>
          </li>
          <li>  
            <Link className="text-gray-300 hover:text-white hover:border-b-1" href="/productos/otros">Otros</Link>
          </li>
        </ul>


          <ul className="flex flex-col gap-1">
            <h6 className="font-semibold">Contacto</h6>
            <li>
              <a className="flex items-center gap-2" href="" target="_blank"> <span className='flex items-center gap-2 text-gray-300 hover:text-white hover:border-b-1'><PhoneCall size={20}/> +54 9 2394-0417</span></a>
            </li>
            <li>
              <a className="flex items-center gap-2" href="mailto:contact@lasernosekai.com"> <span className='flex items-center gap-2 text-gray-300 hover:text-white hover:border-b-1'><Mail size={20}/> contact@lasernosekai.com</span></a>
            </li>
            <li className="flex items-center gap-2">
              <span className='flex items-center gap-2 text-gray-300 hover:text-white hover:border-b-1'><MapPin size={20}/> Regina 2039, Don Torcuato, Buenos Aires, Argentina </span>
            </li>
           </ul>


        <ul className="flex gap-4">
            <li>
              <a href=""><Instagram></Instagram></a>
            </li>
            <li>
              <a href="">Tik tok</a>
            </li>
            <li>
              <a href="">Whatsapp</a>
            </li>
        </ul>
      </footer>
    )
}