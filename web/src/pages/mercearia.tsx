// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import juniorDaFeira from "../assets/mercearia/bancasMercearia/juniorDaFeira.svg";
import mercadinhoTresIrmaos from "../assets/mercearia/bancasMercearia/mercadinhoTresIrmaos.svg";
import merceariaGarcia from "../assets/mercearia/bancasMercearia/merceariaGarcia.svg";
import mfMercearia from "../assets/mercearia/bancasMercearia/mfMercearia.svg";
import superMercadinho from "../assets/mercearia/bancasMercearia/superMercadinho.svg";
import varejaoTorres from "../assets/mercearia/bancasMercearia/varejaoTorres.svg";

import mercearia from "../assets/categories/mercearia.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Mercearia() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={mercearia}
        name="Mercearia"
        title=""
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            href="merceariaGarcia"
            imageSrc={merceariaGarcia}
            title="Mercearia Garcia"
            address="R.Dep. José Tavares, 388"
            category={"Mercearia"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={juniorDaFeira}
            title="Júnior Da Feira"
            address="R.Dep. José Tavares, 216"
            category={"Mercearia"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={mercadinhoTresIrmaos}
            title="Mercadinho Três Irmãos"
            address="R.Dep. José Tavares, 175"
            category={"Mercearia"}
            avaliacao={4.7}
          />

          <CategorieItem
            imageSrc={mfMercearia}
            title="MF Mercearia"
            address="R.Dep. José Tavares, 136"
            category={"Mercearia"}
            avaliacao={4.4}
          />

          <CategorieItem
            imageSrc={superMercadinho}
            title="Super Mercadinho"
            address="R.Dep. José Tavares, 296"
            category={"Mercearia"}
            avaliacao={4.9}
          />

          <CategorieItem
            imageSrc={varejaoTorres}
            title="Varejão Torres"
            address="R.Dep. José Tavares, 154"
            category={"Mercearia"}
            avaliacao={4.1}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}