// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import BancaDuraes from "../assets/temperos/bancas/BancaDuraes.svg";
import BancaCarlos from "../assets/temperos/bancas/BancaCarlos.svg";
import BancaMarcelo from "../assets/temperos/bancas/BancaMarcelo.svg";
import BancaPedro from "../assets/temperos/bancas/BancaPedro.svg";
import BancaSLucas from "../assets/temperos/bancas/BancaSLucas.svg";
import BomTempero from "../assets/temperos/bancas/BomTempero.svg";

import temperos from "../assets/categories/temperos.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Temperos() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={temperos}
        name="Temperos"
        title="Tempero sendo jogado na panela"
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            href="temperoDuraes"
            imageSrc={BancaDuraes}
            title="Tempero Durães"
            address="R.Dep. José Tavares, 129"
            category={"Temperos"}
            avaliacao={4.7}
          />

          <CategorieItem
            imageSrc={BancaCarlos}
            title="Verdinhas do Carlos"
            address="R.Dep. José Tavares, 157"
            category={"Temperos"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={BancaMarcelo}
            title="Marcelo do Cheiro"
            address="R.Dep. José Tavares, 152"
            category={"Temperos"}
            avaliacao={4.3}
          />

          <CategorieItem
            imageSrc={BancaSLucas}
            title="Barraca São Lucas"
            address="R.Dep. José Tavares, 102"
            category={"Temperos"}
            avaliacao={4.9}
          />

          <CategorieItem
            imageSrc={BancaPedro}
            title="Orgânicos do Pedro"
            address="R.Dep. José Tavares, 098"
            category={"Temperos"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={BomTempero}
            title="Bompreço do Tempero"
            address="R.Dep. José Tavares, 130"
            category={"Temperos"}
            avaliacao={4.8}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
