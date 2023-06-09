import Image from "next/image";
import React from 'react';
import { useEffect } from 'react';

import settings from '../assets/popover/settings.svg'
import exit from '../assets/popover/exit.svg'
import Link from "next/link";

export default function Popover() {
  useEffect(() => {
    const buttonUser = document.getElementById('button-user');
    const popover = document.getElementById('popover');

    if (buttonUser && popover) {
      buttonUser.addEventListener('click', () => {
        if (popover.classList.contains('invisible')) {
          popover.classList.remove('invisible');
        } else {
          popover.classList.add('invisible');
        }
      });
    }
  }, []);
  return (
    <div 
      className="invisible bg-white text-2xl border-2 shadow-sm p-[20px] pr-[40px] pb-[20px] pl-[15px] rounded-md font-normal absolute right-36 top-[4.25rem] flex flex-col gap-10" 
      id='popover'
    >
      <div>
        <p>Olá, José Eduardo</p>
        <div className='h-[2px] w-full bg-gray-100'  id="line"></div>
      </div>
      <button className="flex items-center gap-4 text-xl">
        <Image src={settings} alt="engrenagem" />
        <Link href="/dataReset">
          <p>Meus dados</p>
        </Link>
      </button>
      <button className="flex items-center gap-4 text-xl ">
        <Image src={exit} alt="porta com seta" />
        <Link href="/">
            <p>Sair</p>
        </Link>
      </button>
    </div>
  )
}