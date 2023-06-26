import React from 'react';
import Image from 'next/image';
import '../app/globals.css';

import logoFind from '../assets/banca/bancaBarras/LogoFind.svg';
import logoChat from '../assets/banca/bancaBarras/LogoChat.svg';


const ExampleComponent = () => {
  return (
    <div className="w-5/6 h-10 mx-auto mt-8 flex justify-center">
      <div className="w-full rounded-lg flex gap-5">
        <div className="flex items-center w-2/3 bg-gray-200 rounded-lg p-4">
          <Image src={logoFind} alt="Lupa Pesquisa" id="LogoFind" width={30} height={30} className="mr-1 w-6 h-6" />
          <input type="text" placeholder='Procure na banca' className="font-freedoka text-sm w-full mt-0 px-2 pt-2 rounded-lg bg-transparent placeholder-gray-400 my-1.5 text-gray-400 outline-none" />
        </div>
        <div className="flex items-center w-1/3 bg-gray-200 rounded-lg">
          <Image src={logoChat} alt="Iniciar Chat" id="LogoChat" width={40} height={40} className="ml-4 mt-1 w-8 h-8" />
          <button className="font-freedoka text-sm py-2 px-4 flex-grow bg-transparent rounded-lg text-left border-none text-gray-400">
            Iniciar Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
