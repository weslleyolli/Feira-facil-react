// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import totaCell from "../assets/variedades/bancasVariedades/totaCell.svg";
import casaDasCapas from "../assets/variedades/bancasVariedades/casaDasCapas.svg";
import superPowerCelulares from "../assets/variedades/bancasVariedades/superPowerCelulares.svg";
import paraisoDasPanelas from "../assets/variedades/bancasVariedades/paraisoDasPanelas.svg";
import mundoDosTecidos from "../assets/variedades/bancasVariedades/mundoDosTecidos.svg";
import jbEletronicos from "../assets/variedades/bancasVariedades/jbEletronicos.svg";


import variedades from "../assets/categories/variedades.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Variedades() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={variedades}
        name="Variedades"
        title=""
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            href="variedadesJBEletronicos"
            imageSrc={jbEletronicos}
            title="JB Eletrônicos"
            address="R.Dep. José Tavares, 367"
            category={"Variedades"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={casaDasCapas}
            title="Casa Das Capas"
            address="R.Dep. José Tavares, 245"
            category={"Variedades"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={superPowerCelulares}
            title="Super Power Celulares"
            address="R.Dep. José Tavares, 148"
            category={"Variedades"}
            avaliacao={4.7}
          />

          <CategorieItem
            imageSrc={mundoDosTecidos}
            title="Mundo Dos Tecidos"
            address="R.Dep. José Tavares, 169"
            category={"Variedades"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={totaCell}
            title="Tota Cell"
            address="R.Dep. José Tavares, 259"
            category={"Variedades"}
            avaliacao={4.9}
          />

          <CategorieItem
            imageSrc={paraisoDasPanelas}
            title="Paraíso Das Panelas"
            address="R.Dep. José Tavares, 131"
            category={"Variedades"}
            avaliacao={4.1}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
