import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import LogoStar from '../assets/banca/bancaProfile/LogoStar.svg';

const Banca = ({ photo, description, nomeBanca, avaliacaoBanca }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleMostrarInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div className="banca relative w-90vw h-196px flex items-center mx-28 mt-10">
        <Image src={photo} alt={description} id="ProfileBanca" width={140} height={140} />

        <h2 className="relative w-200px h-35px top-33 left-3 font-roboto font-normal text-xl text-black">
            {nomeBanca || "Banca em construção"}
        </h2>

        <Image
            src={LogoStar}
            alt={"Avaliação"}
            id="Avaliacao"
            width={12}
            height={11}
            className="relative top-50 left-4"
        />

        <p className="relative w-20px h-18px top-43 left-5 font-roboto font-normal text-xs text-teal-500">
            {avaliacaoBanca || "Banca não avaliada"}
        </p>

        <h4
            className="absolute top-29 right-5 ml-auto font-roboto font-normal text-xl text-teal-500 cursor-pointer hover:underline"
            onClick={toggleMostrarInfo}
        >
            Ver mais
        </h4>

        {mostrarInfo && <div>Informações adicionais...</div>}
    </div>

  );
};

export default Banca;
