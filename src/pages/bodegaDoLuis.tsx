import Image from "next/image";
import "tailwindcss/tailwind.css";

import bebidasCapa from "../assets/bodega/bebidasCapa.png";
import bancaFoto from "../assets/bodega/bancaFoto.png";

import brahma from "../assets/bodega/brahma.jpg";
import brahmaChopp from "../assets/bodega/brahmaChopp.jpg";
import antartica from "../assets/bodega/antartica.jpg";
import bohemia from "../assets/bodega/bohemia.jpg";
import subzero from "../assets/bodega/subzero.jpg";
import schin from "../assets/bodega/schin.jpg";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function BodegaDoLuis() {
  return (
    <div>
      <Header />
      <Image
        src={bebidasCapa}
        alt="Foto de Capa"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={bancaFoto}
        description={"Foto da Banca"}
        nomeBanca={"Bodega do Luís"}
        avaliacaoBanca={5.0}
        aboutBanca="A bodega do Luís tem os melhores preços e promoções da feira!"
        numberBanca={388}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={brahma}
          description={"Brahma Duplo Malte"}
          priceProduct="R$4,99"
          spanProduct="-15%"
          spanProduct2="R$5,90"
          nameProduct="Brahma Duplo Malte 350ml"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={brahmaChopp}
          description={"Brahma Chopp"}
          priceProduct="R$3.59"
          spanProduct="-20%"
          spanProduct2="R$8,90"
          nameProduct="Brahma Chopp 473ml"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={antartica}
          description={"Antartica Original"}
          priceProduct="R$3,65"
          spanProduct="-25%"
          spanProduct2="R$4,90"
          nameProduct="Cerveja Antartica Original 269ml"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={bohemia}
          description={"Cerveja Bohemia"}
          priceProduct="R$6,00"
          nameProduct="Cerveja Bohemia 310ml"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={subzero}
          description={"Antártica Subzero"}
          priceProduct="R$3,00"
          nameProduct="Cerveja Antártica Subzero 473ml"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={schin}
          description={"Cerveja Schin 350ml"}
          priceProduct="R$3,29"
          nameProduct="Cerveja Schin 350ml"
          kgProduct="Por unidade"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
