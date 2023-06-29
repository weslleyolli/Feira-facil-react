// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import juniorEngraxe from "../assets/servicos/bancas/engraxate-sapato.jpg";
import brunoRelogio from "../assets/servicos/bancas/assistencia-relogio.jpg";
import tonioAssistenciaTecnica from "../assets/servicos/bancas/assistencia-tecnica.jpg";
import juliaCabeleireira from "../assets/servicos/bancas/salão_de_beleza.jpeg";
import unhasAnna from "../assets/servicos/bancas/manicure-feira.jpg";
import heltonFotografia from "../assets/servicos/bancas/studio-foto3x4.jpg";


import servicos from "../assets/categories/servicos.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Servicos() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={servicos}
        name="Serviços"
        title=""
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
            
          <CategorieItem
            href="servicosHelton"
            imageSrc={heltonFotografia}
            title="Helton Fotos 3x4"
            address="R.Dep. José Tavares, 27"
            category={"Servicos"}
            avaliacao={4.1}
          />

          <CategorieItem
            imageSrc={brunoRelogio}
            title="Bruno Assistência de Relógios"
            address="R.Dep. José Tavares, 31"
            category={"Servicos"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={tonioAssistenciaTecnica}
            title="Assistência Técnica Tônio"
            address="R.Dep. José Tavares, 45"
            category={"Servicos"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={unhasAnna}
            title="Anna Manicure e Pedicure"
            address="R.Dep. José Tavares, 57"
            category={"Servicos"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={juniorEngraxe}
            title="Junior Engraxate"
            address="R.Dep. José Tavares, 60"
            category={"Servicos"}
            avaliacao={4.8}
          />

          <CategorieItem
            imageSrc={juliaCabeleireira}
            title="Julia Cabelo e Megahair"
            address="R.Dep. José Tavares, 12"
            category={"Servicos"}
            avaliacao={4.3}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
