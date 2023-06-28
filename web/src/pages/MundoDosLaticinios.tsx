import Image from "next/image";
import "tailwindcss/tailwind.css";

import MundoLaticiniosLogo from "../assets/laticinios/MundoLaticiniosLogo.png";
import Laticinios from "../assets/laticinios/Laticinios.png";



import DoceDeLeite from "../assets/laticinios/itens/DoceDeLeite.png";
import QueijoCoalho from "../assets/laticinios/itens/QueijoCoalho.png";
import Leite from "../assets/laticinios/itens/Leite.png";
import Iogurte from "../assets/laticinios/itens/Iogurte.png";
import CremeDeLeite from "../assets/laticinios/itens/CremeDeLeite.png";
import Mussarela from "../assets/laticinios/itens/Mussarela.png";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function MundoDosLaticinios() {
  return (
    <div>
      <Header />
      <Image
        src={Laticinios}
        alt="Foto Laticinios"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={MundoLaticiniosLogo}
        description={"Foto da Loja"}
        nomeBanca={"Mundo dos Laticiníos"}
        avaliacaoBanca={4.5}
        aboutBanca="Loja de Laticiníos, vendemos Leite e seus derivados."
        numberBanca={126}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={DoceDeLeite}
          description={"Docê de Leite"}
          priceProduct="R$12,00"
          spanProduct=""
          spanProduct2=""
          nameProduct="Docê de Leite (Italac)"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={CremeDeLeite}
          description={"Creme de Leite"}
          priceProduct="R$4,00"
          spanProduct=""
          spanProduct2=""
          nameProduct="Creme de Leite (Piracanjuba)"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={QueijoCoalho}
          description={"Queijo de Coalho"}
          priceProduct="R$60,00"
          spanProduct="-20%"
          spanProduct2="R$75,00"
          nameProduct="Queijo de Coalho"
          
        />
        <LiProducts
          photo={Leite}
          description={"Leite"}
          priceProduct="R$5,00"
          nameProduct="Leite (Piracanjuba)"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={Iogurte}
          description={"Iogurte"}
          priceProduct="R$3,99"
          nameProduct="Iogurte Liquido (Nestle)"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={Mussarela}
          description={"Queijo Mussarela"}
          priceProduct="R$99,99"
          nameProduct="Queijo Mussarela"
          
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
