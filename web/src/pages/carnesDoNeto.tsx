import Image from "next/image";
import "tailwindcss/tailwind.css";

import acougueCapa from "../assets/acougue/acougueCapa.jpg";
import bancaFoto from "../assets/acougue/bancaFoto.png";

import picanha from "../assets/acougue/picanha.jpg";
import fraldinha from "../assets/acougue/fraldinha.jpg";
import alcatra from "../assets/acougue/alcatra.jpg";
import patinho from "../assets/acougue/patinho.jpg";
import costela from "../assets/acougue/costela.jpg";
import galinha from "../assets/acougue/galinha.jpg";



import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function CarnesDoNeto() {
  return (
    <div>
      <Header />
      <Image
        src={acougueCapa}
        alt="Foto de Capa"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={bancaFoto}
        description={"Foto da Banca"}
        nomeBanca={"Carnes do Neto"}
        avaliacaoBanca={5.0}
        aboutBanca="Carnes do Neto tem os melhores preços e promoções da feira!"
        numberBanca={388}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={picanha}
          description={"Picanha Suína"}
          priceProduct="R$39,99 kg"
          spanProduct="-15%"
          spanProduct2="R$45,99"
          nameProduct="Picanha kg"
          kgProduct="Por quilo"
        />

        <LiProducts
          photo={fraldinha}
          description={"Fraldinha"}
          priceProduct="R$32,99 kg"
          nameProduct="Fraldinha"
          kgProduct="Por quilo"
        />

        <LiProducts
          photo={alcatra}
          description={"Alcatra"}
          priceProduct="R$32,99 kg"
          nameProduct="Alcatra"
          kgProduct="Por quilo"
        />

        <LiProducts
          photo={patinho}
          description={"Patinho"}
          priceProduct="R$39,99 kg"
          nameProduct="Patinho"
          kgProduct="Por quilo"
        />

        <LiProducts
          photo={costela}
          description={"Costela Bovina"}
          priceProduct="R$39,90 kg"
          nameProduct="Costela"
          kgProduct="Por quilo"
        />

        <LiProducts
          photo={galinha}
          description={"Galinha"}
          priceProduct="R$18,90 kg"
          nameProduct="Galinha"
          kgProduct="Por quilo"
        />
      </div>
      <div className="h-8"></div>

    </div>
  );
}
