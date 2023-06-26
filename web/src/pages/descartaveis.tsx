// import { useState } from "react";
// import Image from "next/image";
import "../app/globals.css";

import Banca10 from "../assets/descartaveis/bancas/Banca10.svg";
import BancaCultura from "../assets/descartaveis/bancas/BancaCultura.svg";
import BancaDescARTE from "../assets/descartaveis/bancas/BancaDescARTE.svg";
import ChicaoEmbalagens from "../assets/descartaveis/bancas/ChicaoEmbalagens.svg";
import DescartaveisSu from "../assets/descartaveis/bancas/DescartaveisSu.svg";
import IapEmbalagens from "../assets/descartaveis/bancas/IapEmbalagens.svg";

import descartaveis from "../assets/categories/descartaveis.svg";

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from "@/components/LogoCategorie";

export default function Descartaveis() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={descartaveis}
        name="Descartáveis"
        title="Tempero sendo jogado na panela"
      />

      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            imageSrc={Banca10}
            title="Banca Tudo10"
            address="R.Dep. José Tavares, 337"
            category={"Descartáveis"}
            avaliacao={4.6}
          />

          <CategorieItem
            imageSrc={BancaCultura}
            title="Descartáveis cultura"
            address="R.Dep. José Tavares, 342"
            category={"Descartáveis"}
            avaliacao={4.8}
          />

          <CategorieItem
            imageSrc={BancaDescARTE}
            title="Banca da DescARTE"
            address="R.Dep. José Tavares, 340"
            category={"Descartáveis"}
            avaliacao={5.0}
          />

          <CategorieItem
            imageSrc={ChicaoEmbalagens}
            title="Chicão Embalagens"
            address="R.Dep. José Tavares, 327"
            category={"Descartáveis"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={DescartaveisSu}
            title="Descartáveis da Su"
            address="R.Dep. José Tavares, 320"
            category={"Descartáveis"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={IapEmbalagens}
            title="Iap Embalagens"
            address="R.Dep. José Tavares, 330"
            category={"Descartáveis"}
            avaliacao={4.8}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
