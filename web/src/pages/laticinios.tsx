// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import MundoLaticinios from "../assets/laticinios/MundoLaticinios.svg";
import QueijosCia from "../assets/laticinios/QueijosCia.svg";
import MundoQueijos from "../assets/laticinios/MundoQueijos.svg";
import QueijosInterior from "../assets/laticinios/QueijosInterior.svg";
import LeiteSabores from "../assets/laticinios/LeiteSabores.svg";
import LeiteDoces from "../assets/laticinios/LeiteDoces.svg";

import laticinios from "../assets/categories/laticinios.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Laticínios() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={laticinios}
        name="Laticínios"
        title="Pedaço de Queijo"
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            imageSrc={MundoLaticinios}
            title="Mundo dos Laticínios"
            address="R.Dep. José Tavares, 126"
            category={"Laticínios"}
            avaliacao={3.9}
          />

          <CategorieItem
            imageSrc={QueijosCia}
            title="Queijos e Cia"
            address="R.Dep. José Tavares, 019"
            category={"Laticínios"}
            avaliacao={3.8}
          />

          <CategorieItem
            imageSrc={MundoQueijos}
            title="Mundo dos Queijos"
            address="R.Dep. José Tavares, 150"
            category={"Laticínios"}
            avaliacao={4.0}
          />

          <CategorieItem
            imageSrc={LeiteSabores}
            title="Leite e seus Sabores"
            address="R.Dep. José Tavares, 099"
            category={"Laticínios"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={QueijosInterior}
            title="Queijos do Interior"
            address="R.Dep. José Tavares, 160"
            category={"Laticínios"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={LeiteDoces}
            title="Delícias do Leite"
            address="R.Dep. José Tavares, 159"
            category={"Laticínios"}
            avaliacao={4.1}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
