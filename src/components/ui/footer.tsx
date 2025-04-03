import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Link from "next/link";
import { JSX } from 'react';

export function Footer () {
    type NavItem = {
        readonly url: string,
        readonly name: string,
        readonly icon?: JSX.Element;
    }

    const routes: readonly NavItem[] = [
        {url: '/productos/llaveros', name: 'Llaveros'},
        {url: '/productos/cuadros', name: 'Cuadros'},
        {url: '/productos/separadores', name: 'Separadores'},
        {url: '/productos/cajas', name: 'Cajas'},
        {url: '/productos/otros', name: 'Otros'}]
    
    const contact: readonly NavItem[] = [
        {url: 'https://wa.me/+5491123940417', name: '+54 9 11 2394 0417', icon: <PhoneCall size={20}/>},
        {url: 'https://www.instagram.com/lasernosekai/', name: 'contact@lasernosekai.com', icon: <Mail size={20}/>},
        {url: '', name: 'Regina 2039, Don Torcuato, Buenos Aires.', icon: <MapPin size={20}/>},]

    return(
        <footer className="flex justify-around w-screen bg-[#13002D] text-gray-300 p-4">
        <ul className="flex flex-col gap-1">
          <h6 className="font-semibold text-white">Categorias</h6>
          {routes.map((route) => (
          <li key={route.url}>
            <Link className="hover:text-white hover:underline" href={route.url}>
              {route.name}
            </Link>
          </li>
        ))}
        </ul>


          <ul className="flex flex-col gap-1">
            <h6 className="font-semibold text-white">Contacto</h6>
            {contact.map((route) => (
              <li key={route.url}>
                <a className="flex items-center gap-2" href={route.url} target="_blank">{route.icon} <span className='hover:text-white hover:underline'>{route.name}</span></a>
            </li>
            ))}
           </ul>


        <ul className="flex gap-4">
            <li>
              <a href="">instagram</a>
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