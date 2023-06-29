import React from 'react';
import Image from 'next/image';
import feiraLogo from '../assets/login/logoIcon.svg';
import feira from '../assets/redefinirSenha/Ellipse 4 (1).png'
import 'tailwindcss/tailwind.css';

export default function RedefinirSenha() {
  return (
    <div>
      <div className="absolute top-0 left-0 mx-[10px] my-8">
        <Image className="h-[130px]" src={feiraLogo} alt="Logo" />
      </div>

      <div>
        <Image className='absolute right-0 h-screen' src={feira} alt=""  />
      </div>
    
      <div className="h-screen flex items-center justify-center">
        <div className="h-2/5 w-1/4 shadow-2xl rounded-xl px-16 bg-white z-10 flex flex-col items-center justify-between pt-10">
          <div className="text-3xl font-Fredoka font-bold">
            <p>Redefinir Senha</p>
          </div>
          <div className="w-full mt-7 flex flex-col gap-3">
            <div>
              <p className="pl-1 text-lg font-Fredoka font-bold">E-mail:</p>
              <input
                className="w-full h-8 rounded-md border border-gray-300 text-black pl-1 font-Fredoka"
                id="email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="w-full flex justify-center px-2 mt-10 h-10 font-Fredoka font-bold ">
            <a href="/" className="bg-green150 text-white w-full rounded-md text-center flex justify-center">
              <button>
                <p>Enviar E-mail</p>
              </button>
            </a>
          </div>
          <div id="errorContainer"></div>
        </div>
      </div>
    </div>
  );
}
