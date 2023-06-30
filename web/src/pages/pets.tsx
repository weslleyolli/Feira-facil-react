// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import Bichos from "../assets/pets/lojas/Bichos.svg";
import MundoFish from "../assets/pets/lojas/MundoFish.svg";
import ParaisoPet from "../assets/pets/lojas/ParaisoPet.svg";
import PetFashion from "../assets/pets/lojas/PetFashion.svg";
import PetShopNoda from "../assets/pets/lojas/PetShopNoda.svg";
import Rações from "../assets/pets/lojas/Rações.svg";

import pets from "../assets/categories/pets.svg";

import CategorieItem from "@/components/CategorieItem";
import Header from "@/components/Header";
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
            href="ParaisoPet"
            imageSrc={ParaisoPet}
            title="Paraíso Pet"
            address="R.Dep. José Tavares, 114"
            category={"Pets"}
            avaliacao={4.8}
          />

          <CategorieItem
            imageSrc={PetShopNoda}
            title="PetShop do Noda"
            address="R.Dep. José Tavares, 029"
            category={"Pets"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={Rações}
            title="Rações e Acessórios"
            address="R.Dep. José Tavares, 166"
            category={"Pets"}
            avaliacao={4.0}
          />

          <CategorieItem
            imageSrc={MundoFish}
            title="Mundo Fish"
            address="R.Dep. José Tavares, 104"
            category={"Pets"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={PetFashion}
            title="Pet Fashion"
            address="R.Dep. José Tavares, 074"
            category={"Pets"}
            avaliacao={4.3}
          />

          <CategorieItem
            imageSrc={Bichos}
            title="Bichos e Cia"
            address="R.Dep. José Tavares, 120"
            category={"Pets"}
            avaliacao={4.5}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
