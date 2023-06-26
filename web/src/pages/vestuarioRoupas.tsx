import Banca from "@/components/BancaDetails";
import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import LojaDaModaProfile from "../assets/vestuario/produtos/LojadaModaProfile.png";
import blusaFeminina from "../assets/vestuario/produtos/blusaFeminina.jpeg";
import calcaJeans from "../assets/vestuario/produtos/calcaJeans.jpg";
import camiseta from "../assets/vestuario/produtos/camiseta.jpg";
import CapinhasCapa from "../assets/vestuario/produtos/capinhasCapa.jpg";
import mochila from "../assets/vestuario/produtos/mochila.jpg";
import tenis from "../assets/vestuario/produtos/tenis.jpeg";
import vestido from "../assets/vestuario/produtos/vestido.jpg";

import Barras from "@/components/BancaBarras";

export default function LojaDaModa() {
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
        photo={LojaDaModaProfile}
        description={"Foto da Banca"}
        nomeBanca={"Loja da Moda"}
        avaliacaoBanca={4.7}
        aboutBanca="Encontre as últimas tendências da moda em um só lugar!"
        numberBanca={123}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={camiseta}
          description={"Camiseta Masculina"}
          priceProduct="R$49,90"
          nameProduct="Camiseta Masculina"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={calcaJeans}
          description={"Calça Jeans"}
          priceProduct="R$99,90"
          spanProduct="-10%"
          spanProduct2="R$109,90"
          nameProduct="Calça Jeans"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={blusaFeminina}
          description={"Blusa Feminina"}
          priceProduct="R$39,90"
          spanProduct="-20%"
          spanProduct2="R$49,90"
          nameProduct="Blusa Feminina"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={mochila}
          description={"Mochila"}
          priceProduct="R$79,90"
          nameProduct="Mochila"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={tenis}
          description={"Tênis Esportivo"}
          priceProduct="R$149,90"
          spanProduct="-15%"
          spanProduct2="R$169,90"
          nameProduct="Tênis Esportivo"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={vestido}
          description={"Vestido Feminino"}
          priceProduct="R$89,90"
          nameProduct="Vestido Feminino"
          kgProduct="Por unidade"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
