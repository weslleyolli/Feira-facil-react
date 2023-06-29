// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import ParaisoPet from "../assets/pets/lojas/ParaisoPet.svg";
import BancaCarlos from "../assets/temperos/bancas/BancaCarlos.svg";
import BancaMarcelo from "../assets/temperos/bancas/BancaMarcelo.svg";
import BancaPedro from "../assets/temperos/bancas/BancaPedro.svg";
import BancaSLucas from "../assets/temperos/bancas/BancaSLucas.svg";
import BomTempero from "../assets/temperos/bancas/BomTempero.svg";

import pets from "../assets/categories/pets.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Pets() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={pets}
        name="Pets"
        title="Pata de um cachorro (pet)"
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            imageSrc={ParaisoPet}
            title="Paraíso Pet"
            address="R.Dep. José Tavares, 114"
            category={"Pets"}
            avaliacao={4.8}
          />

          <CategorieItem
            imageSrc={BancaCarlos}
            title="PetShop do Noda"
            address="R.Dep. José Tavares, 029"
            category={"Pets"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={BancaMarcelo}
            title="Rações e Acessórios"
            address="R.Dep. José Tavares, 152"
            category={"Pets"}
            avaliacao={4.3}
          />

          <CategorieItem
            imageSrc={BancaSLucas}
            title="Reino Animal"
            address="R.Dep. José Tavares, 102"
            category={"Pets"}
            avaliacao={4.9}
          />

          <CategorieItem
            imageSrc={BancaPedro}
            title="Pet Fashion"
            address="R.Dep. José Tavares, 098"
            category={"Pets"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={BomTempero}
            title="Bichos e Cia"
            address="R.Dep. José Tavares, 130"
            category={"Pets"}
            avaliacao={4.8}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
