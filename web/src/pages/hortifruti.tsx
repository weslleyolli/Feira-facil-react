import { useState } from "react";
import Image from "next/image";
import '../app/globals.css';

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from '@/components/LogoCategorie'

import banca1 from "../assets/hortifruti/banca1.svg";
import banca2 from "../assets/hortifruti/banca2.svg";
import banca3 from "../assets/hortifruti/banca3.svg";
import banca4 from "../assets/hortifruti/banca4.svg";
import banca5 from "../assets/hortifruti/banca5.svg";
import banca6 from "../assets/hortifruti/banca6.svg";
import categoriaAvaliacao from "../assets/hortifruti/categoria-avaliacao.svg";
import categoriaAvaliacao2 from "../assets/hortifruti/categoria-avaliacao2.svg";
import categoriaAvaliacao3 from "../assets/hortifruti/categoria-avaliacao3.svg";
import hortifruits from "../assets/categories/hortifruits.svg";


export default function Hortifruti() {
  return (
    <div className="background">
      <Header></Header>
      <LogoCategorie
        photo={hortifruits}
        title="Maçã"
        name="Hortifruti"
      />
      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">

          <CategorieItem
            href="bancaAntonio"
            imageSrc={banca1}
            title="Banca do Antônio"
            address="R.Dep. José Tavares, 776"
            categoryImageSrc={categoriaAvaliacao}
          />
          
          <CategorieItem
            imageSrc={banca2}
            title="Bandejas do Orlando"
            address="R.Dep. José Tavares, 990"
            categoryImageSrc={categoriaAvaliacao2}
          />

          <CategorieItem
            imageSrc={banca3}
            title="Chico da Laranja"
            address="R.Dep. José Tavares, 854"
            categoryImageSrc={categoriaAvaliacao3}
          />

          <CategorieItem
            imageSrc={banca4}
            title="Barraca São Luiz"
            address="R.Dep. José Tavares, 698"
            categoryImageSrc={categoriaAvaliacao}
          />

          <CategorieItem
            imageSrc={banca5}
            title="Bandejas do Orlando"
            address="R.Dep. José Tavares, 887"
            categoryImageSrc={categoriaAvaliacao3}
          />

          <CategorieItem
            imageSrc={banca6}
            title="Toim do Coentro"
            address="R.Dep. José Tavares, 655"
            categoryImageSrc={categoriaAvaliacao}
          />

            <div className="h-8"></div>
          
        </div>
      </main>
    </div>
  );
}
