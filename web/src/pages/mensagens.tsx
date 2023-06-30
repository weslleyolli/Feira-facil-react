import Image from 'next/image';
import Header from '@/components/Header';
import React, { useState } from 'react';

import logoSeta from '../assets/banca/bancaProfile/LogoSeta.png';
import photo from '../assets/banca/bancaProfile/ProfileBanca.png';
import logoEnviar from '../assets/banca/bancaProfile/LogoEnviar.png';

export default function Mensagens() {
  const description = '';
  const nomeBanca = 'Banca do Antônio';
  const [vendedor, setVendedor] = useState('Oi, boa tarde! Como posso ajudá-lo?');
  const [voce, setVoce] = useState('');
  const [novaMensagem, setNovaMensagem] = useState('');

  const handleVendedorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVendedor(event.target.value);
  };

  const handleVoceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoce(event.target.value);
  };

  const handleNovaMensagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovaMensagem(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.currentTarget.blur();
      handleEnviarClick();
    }
  };

  const handleEnviarClick = () => {
    if (novaMensagem.trim() !== '') {
      setVoce(novaMensagem.trim());
      setNovaMensagem('');
    }
  };

  const handleLogoSetaClick = () => {
    console.log('Imagem LogoSeta clicada!');

    return (
      <div>
        <Header />
        <div className="banca relative w-90vw h-196px flex items-center mx-28 mt-10">
          <div className="flex items-center">
            <Image
              src={logoSeta}
              alt={description}
              id="LogoSeta"
              width={50}
              height={34}
              onClick={handleLogoSetaClick}
              style={{ cursor: 'pointer' }}
            />
            <h3 className="ml-2 font-fredoka font-medium text-green-600 font-semibold" style={{ color: '#00AA95', fontSize: '24px', lineHeight: '34px' }}>Voltar</h3>
          </div>
        </div>
        <hr className="border-gray-300 mx-28 mt-2" />
        <div className="banca relative w-90vw h-10px flex items-center mx-28 mt-20">
          <div className="flex items-center">
            <Image src={photo} alt={description} id="ProfileBanca" width={100} height={100} />
            <h2 className="ml-4 font-roboto font-normal text-black" style={{ fontSize: '24px' }}>
              {nomeBanca || 'Banca do Antônio'}
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white">
          <div className="w-1/3 px-16 flex flex-col items-start pt-0">
            <div className="w-full flex flex-col gap-1 mt-0">
              <h3 className="text-lg mb-1 text-gray-500" style={{ color: '#ADADAD', marginTop: '55px', marginLeft: '-260px' }}>Vendedor:</h3>
              <input
                className="w-full h-8 border rounded-md bg-gray-100 text-black pl-1"
                id="vendedor"
                type="text"
                value={vendedor}
                onChange={handleVendedorChange}
                readOnly
                disabled
                style={{ marginLeft: '-260px' }}
              />
            </div>
          </div>

          <div className="w-1/3 px-16 flex flex-col items-end pt-0">
            <div className="w-full flex flex-col gap-1 mt-0">
              <h3 className="text-lg mb-1" style={{ color: '#ADADAD', marginTop: '30px', marginLeft: '260px' }}>Você:</h3>
              <input
                className="w-full h-8 border rounded-md bg-gray-100 text-black pl-1"
                id="voce"
                type="text"
                value={voce}
                onChange={handleVoceChange}
                readOnly
                disabled
                style={{ marginLeft: '260px' }}
              />
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', width: '1347px', height: '52px', left: '150px', top: '890px', background: '#FFFFFF', borderRadius: '5px' }}></div>
        <div className="flex items-center justify-center" style={{ position: 'absolute', width: '1347px', height: '52px', left: '150px', top: '890px' }}>
          <div className="w-2/3 px-16 flex flex-row items-center pt-0">
            <div className="w-full flex flex-row gap-2">
              <input
                className="w-full h-8 border rounded-md bg-gray-100 text-black pl-1"
                id="novaMensagem"
                type="text"
                value={novaMensagem}
                onChange={handleNovaMensagemChange}
                onKeyPress={handleKeyPress}
                placeholder="Mensagem"
                style={{ background: '#FFFFFF', borderRadius: '5px', marginLeft: '0px' }}
              />
              <Image
                src={logoEnviar}
                alt="Enviar"
                id="LogoEnviar"
                width={25}
                height={25}
                onClick={handleEnviarClick}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}