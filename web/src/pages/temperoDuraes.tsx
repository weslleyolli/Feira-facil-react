import Image from "next/image";
import "tailwindcss/tailwind.css";

import bancaProfile from "../assets/temperos/itens/bancaProfileSBorda.png";
import temperos from "../assets/temperos/temperos.jpeg";



import cinnamon from "../assets/temperos/itens/canelaPo.jpeg";
import rosemary from "../assets/temperos/itens/alecrim.jpeg";
import greenSmell from "../assets/temperos/itens/cheiroVerde.jpeg";
import garlic from "../assets/temperos/itens/alhoRoxo.jpeg";
import paprika from "../assets/temperos/itens/papricaPicante.webp";
import pepper from "../assets/temperos/itens/pimentaCalabresa.webp";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function temperoDuraes() {
  return (
    <div>
      <Header />
      <Image
        src={temperos}
        alt="Foto de temperos"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={bancaProfile}
        description={"Foto da Banca"}
        nomeBanca={"Tempero Durães"}
        avaliacaoBanca={4.7}
        aboutBanca="Loja de temperos com a maior diversidade de especiarias e condimentos de toda a região."
        numberBanca={129}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={cinnamon}
          description={"Canela em Pó"}
          priceProduct="R$3,53"
          spanProduct="-15%"
          spanProduct2="R$4,15"
          nameProduct="Canela em pó"
        />
        <LiProducts
          photo={paprika}
          description={"Paprica picante"}
          priceProduct="R$2,48"
          spanProduct="-20%"
          spanProduct2="R$3,10"
          nameProduct="Paprica Picante"
        />
        <LiProducts
          photo={rosemary}
          description={"Alecrim"}
          priceProduct="R$3,24"
          spanProduct="-25%"
          spanProduct2="R$4,32"
          nameProduct="Alecrim"
        />
        <LiProducts
          photo={greenSmell}
          description={"Cheiro Verde"}
          priceProduct="R$1,99"
          nameProduct="Cheiro Verde"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={garlic}
          description={"Alho Roxo"}
          priceProduct="R$4,99"
          nameProduct="Alho Roxo"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={pepper}
          description={"Pimenta Calabresa"}
          priceProduct="R$7,99"
          nameProduct="Pimenta Calabresa"
          kgProduct="Por unidade"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
