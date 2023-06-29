import Image from "next/image";
import "tailwindcss/tailwind.css";

import bancaProfile from "../assets/descartaveis/profileBanca.png";
import descartaveis from "../assets/descartaveis/descartaveis.jpeg";


import plasticCup from "../assets/descartaveis/itens/copo.jpeg";
import disposableCup from "../assets/descartaveis/itens/prato.jpeg";
import plasticFork from "../assets/descartaveis/itens/garfo.jpeg";
import plasticKnife from "../assets/descartaveis/itens/faca.jpeg";
import plasticSpoon from "../assets/descartaveis/itens/colher.jpeg";
import plasticLunchbox from "../assets/descartaveis/itens/marmita.jpeg";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function temperoDuraes() {
  return (
    <div>
      <Header />
      <Image
        src={descartaveis}
        alt="Foto de temperos"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={bancaProfile}
        description={"Foto da Banca"}
        nomeBanca={"Banca Tudo10"}
        avaliacaoBanca={4.6}
        aboutBanca="Loja de descartáveis com a maior diversidade de itens de toda a região."
        numberBanca={337}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={plasticCup}
          description={"Copo descartável"}
          priceProduct="R$3,79"
          spanProduct="-15%"
          spanProduct2="R$4,46"
          nameProduct="Copo"
          kgProduct="Pacote"
        />
        <LiProducts
          photo={plasticFork}
          description={"Garfo de festa"}
          priceProduct="R$2,48"
          spanProduct="-20%"
          spanProduct2="R$3,10"
          nameProduct="Garfo"
          kgProduct='Pacote'
        />
        <LiProducts
          photo={disposableCup}
          description={"Prato descartável"}
          priceProduct="R$3,24"
          spanProduct="-25%"
          spanProduct2="R$4,32"
          nameProduct="Prato"
          kgProduct='Pacote'
        />
        <LiProducts
          photo={plasticSpoon}
          description={"Colher descartável"}
          priceProduct="R$1,99"
          nameProduct="Colher"
          kgProduct="Pacote"
        />
        <LiProducts
          photo={plasticKnife}
          description={"Faca descartável"}
          priceProduct="R$4,99"
          nameProduct="Faca"
          kgProduct="Pacote"
        />
        <LiProducts
          photo={plasticLunchbox}
          description={"Marmita de plástico"}
          priceProduct="R$21,99"
          nameProduct="Marmita"
          kgProduct="Pacote"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
