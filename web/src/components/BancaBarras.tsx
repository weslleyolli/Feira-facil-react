import Image from 'next/image';
import { useState } from 'react';
import logoFind from '../assets/banca/bancaBarras/LogoFind.svg';
import logoChat from '../assets/banca/bancaBarras/LogoChat.svg';


const Barras = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleChatButtonClick = () => {
    // Lógica para tratar o clique no botão de iniciar chat
    window.location.href = '../pages/chatBancaDoAntonio.html';
  };

  return (
    <div className="barras absolute flex w-90 mx-auto h-10 top-100 rounded-10">
      <div className="search-horti flex-grow bg-gray-200 rounded-10">
        <Image src={logoFind} alt="Lupa Pesquisa" id="LogoFind" width={30} height={30} className="mt-1 ml-2" />

        <div id="text-search-horti">
          <input
            type="text"
            value={searchText}
            // onChange={handleSearchInputChange}
            placeholder="Buscar na banca"
            id="text-search"
            className="w-60 h-full py-2 pl-4 pr-3 bg-transparent border-none outline-none text-gray-500 font-sans font-normal text-sm leading-6 cursor-pointer"
          />
        </div>
      </div>

      <div className="chat flex-grow ml-2 bg-gray-200 rounded-10">
        <Image src={logoChat}alt="Iniciar Chat" id="LogoChat" width={40} height={40} className="ml-4 mt-1" />

        <div id="iniciar-chat">
          <button
            // onClick={handleChatButtonClick}
            id="Inicio-Chat"
            className="w-40 h-full py-2 pl-4 pr-3 bg-transparent border-none outline-none text-gray-500 font-sans font-normal text-sm leading-6 cursor-pointer"
          >
            Iniciar Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Barras;
