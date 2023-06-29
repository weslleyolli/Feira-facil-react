import Image from "next/image";
import "tailwindcss/tailwind.css";

import KideliciaProfile from "../assets/alimentacao/produtos/KideliciaIcon.png";
import Kideliciacapa from "../assets/alimentacao/produtos/Kideliciacapa.jpg";
import batataFrita from "../assets/alimentacao/produtos/batataFrita.png";
import cachorroQuente from "../assets/alimentacao/produtos/cachorroQuente.png";
import hamburguer from "../assets/alimentacao/produtos/hamburguer.png";
import milkshake from "../assets/alimentacao/produtos/milkShake.png";
import sorvete from "../assets/alimentacao/produtos/sorvete.png";

import Barras from "@/components/BancaBarras";
import Banca from "@/components/BancaDetails";
import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";

export default function Kidelicia() {
  return (
    <div>
      <Header />
      <Image
        src={Kideliciacapa}
        alt="Foto de Capa"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={KideliciaProfile}
        description={"Foto da Banca"}
        nomeBanca={"Lanchonete Kidelícia"}
        avaliacaoBanca={4.8}
        aboutBanca="A melhor lanchonete para satisfazer seu paladar!"
        numberBanca={456}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={hamburguer}
          description={"Hambúrguer Tradicional"}
          priceProduct="R$15,90"
          nameProduct="Hambúrguer Tradicional"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={batataFrita}
          description={"Batata Frita Crocante"}
          priceProduct="R$9,90"
          spanProduct="-10%"
          spanProduct2="R$10,90"
          nameProduct="Batata Frita Crocante"
          kgProduct="Por porção"
        />
        <LiProducts
          photo={milkshake}
          description={"Milkshake"}
          priceProduct="R$12,90"
          spanProduct="-20%"
          spanProduct2="R$15,90"
          nameProduct="Milkshake"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={cachorroQuente}
          description={"Cachorro-Quente Clássico"}
          priceProduct="R$8,90"
          nameProduct="Cachorro-Quente Clássico"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={sorvete}
          description={"Sorvete"}
          priceProduct="R$6,90"
          nameProduct="Sorvete"
          kgProduct="Por bola"
        />
      </div>

      <div className="h-8"></div>
    </div>
  );
}
