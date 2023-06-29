import Image from "next/image";
import "tailwindcss/tailwind.css";

import merceariaCapa from "../assets/mercearia/merceariaCapa.jpg";
import merceariaGarciaProfile from "../assets/mercearia/merceariaGarciaProfile.png";

import arrozParboilizadoKiarroz from "../assets/mercearia/itensMercearia/arrozParboilizadoKiarroz.jpg";
import cafePilao from "../assets/mercearia/itensMercearia/cafePilao.jpg";
import detergenteYpe from "../assets/mercearia/itensMercearia/detergenteYpe.jpg";
import farinhaMandiocaYoki from "../assets/mercearia/itensMercearia/farinhaMandiocaYoki.jpg";
import macarraoVitarella from "../assets/mercearia/itensMercearia/macarraoVitarella.jpg";
import papelToalhaMalu from "../assets/mercearia/itensMercearia/papelToalhaMalu.jpg";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function MerceariaGarcia() {
  return (
    <div>
      <Header />
      <Image
        src={merceariaCapa}
        alt="Foto de Capa"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={merceariaGarciaProfile}
        description={"Foto da Banca"}
        nomeBanca={"Mercearia Garcia"}
        avaliacaoBanca={4.5}
        aboutBanca="A Mercearia Garcia tem os melhores preços e promoções da região."
        numberBanca={388}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={arrozParboilizadoKiarroz}
          description={"Arroz Parboilizado Kiarroz"}
          priceProduct="R$4,99"
          spanProduct="-15%"
          spanProduct2="R$5,90"
          nameProduct="Arroz Parboilizado Kiarroz"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={cafePilao}
          description={"Café Pilão"}
          priceProduct="R$7,10"
          spanProduct="-20%"
          spanProduct2="R$8,90"
          nameProduct="Café Pilão"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={detergenteYpe}
          description={"Detergente Ype"}
          priceProduct="R$3,65"
          spanProduct="-25%"
          spanProduct2="R$4,90"
          nameProduct="Detergente Ype"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={farinhaMandiocaYoki}
          description={"Farinha de Mandioca Yoki"}
          priceProduct="R$8,70"
          nameProduct="Farinha de Mandioca Yoki"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={macarraoVitarella}
          description={"Macarrão Vitarella"}
          priceProduct="R$3,69"
          nameProduct="Macarrão Vitarella"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={papelToalhaMalu}
          description={"Papel Toalha Malu"}
          priceProduct="R$4,30"
          nameProduct="Papel Toalha Malu"
          kgProduct="Por unidade"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
