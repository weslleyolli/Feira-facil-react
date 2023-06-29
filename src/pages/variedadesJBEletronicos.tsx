import Image from "next/image";
import "tailwindcss/tailwind.css";

import CapinhasCapa from "../assets/variedades/CapinhasCapa.jpg";
import jbProfile from "../assets/variedades/jbProfile.png";




import carregadorTurbo from "../assets/variedades/itensVariedades/carregadorTurbo.jpg";
import carregadorSemFio from "../assets/variedades/itensVariedades/carregadorSemFio.jpg";
import caboTipoC from "../assets/variedades/itensVariedades/capoTipoC.jpg";
import miniCaixaSom from "../assets/variedades/itensVariedades/miniCaixaSom.jpg";
import boombox2 from "../assets/variedades/itensVariedades/boombox2.jpg";
import redmi10c from "../assets/variedades/itensVariedades/redmi10c.jpg";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function jbEletronicos() {
  return (
    <div>
      <Header />
      <Image
        src={CapinhasCapa}
        alt="Foto de Capa"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={jbProfile}
        description={"Foto da Banca"}
        nomeBanca={"JB Eletrônicos"}
        avaliacaoBanca={4.5}
        aboutBanca="Melhor loja de eletrônicos que você encontra por aqui!"
        numberBanca={367}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={carregadorTurbo}
          description={"Carregador Turbo"}
          priceProduct="R$127,40"
          spanProduct="-15%"
          spanProduct2="R$149,90"
          nameProduct="Carregador Turbo"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={carregadorSemFio}
          description={"Carregador Sem Fio"}
          priceProduct="R$111,90"
          spanProduct="-20%"
          spanProduct2="R$139,90"
          nameProduct="Carregador Sem Fio"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={caboTipoC}
          description={"Cabo Tipo C"}
          priceProduct="R$29,90"
          spanProduct="-25%"
          spanProduct2="R$39,90"
          nameProduct="Cabo Tipo C"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={miniCaixaSom}
          description={"Mini Caixa de Som"}
          priceProduct="R$36,90"
          nameProduct="Mini Caixa de Som"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={boombox2}
          description={"JBL Boombox 2"}
          priceProduct="R$1929,90"
          nameProduct="JBL Boombox 2"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={redmi10c}
          description={"Xiaomi Redmi 10C"}
          priceProduct="R$779,90"
          nameProduct="Xiaomi Redmi 10C"
          kgProduct="Por unidade"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
