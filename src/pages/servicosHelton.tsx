import Image from "next/image";
import "tailwindcss/tailwind.css";

import fotografiaCapa from "../assets/servicos/fotografiacapa3.svg";
import studioFoto from "../assets/servicos/itens/studiofoto.svg";


import cameraProfissional from "../assets/servicos/itens/camera.jpg";
import foto3x4 from "../assets/servicos/itens/foto-3x4.jpg";
import lentesFotograficas from "../assets/servicos/itens/lentes-fotograficas.jpg";
import limpezaDeCamera from "../assets/servicos/itens/limpeza-e-manutenção-de-câmera.jpg";
import sessaoDeFotos from "../assets/servicos/itens/sessão-de-fotos.jpg";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function heltonFotografia() {
  return (
    <div>
      <Header />
      <Image
        src={fotografiaCapa}
        alt="Foto de Capa"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={studioFoto}
        description={"Foto da Banca"}
        nomeBanca={"Helton Fotos 3x4"}
        avaliacaoBanca={4.1}
        aboutBanca="Suas melhores fotos estão aqui!"
        numberBanca={267}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={cameraProfissional}
          description={"Câmera Profissional Cybershot"}
          priceProduct="R$883,80" 
          spanProduct="-15%"
          spanProduct2="R$1040,90"
          nameProduct="Câmera Profissional Cybershot NML220I"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={foto3x4}
          description={"12 Fotos 3x4"}
          priceProduct="R$24,00"
          spanProduct="-20%"
          spanProduct2="R$30,00"
          nameProduct="12 Fotos 3x4 em apenas 8 minutos"
          kgProduct="Preço único"
        />
        <LiProducts
          photo={lentesFotograficas}
          description={"Lentes Fotográficas"}
          priceProduct="R$140,90"
          spanProduct="-25%"
          spanProduct2="R$187,90"
          nameProduct="Lentes fotográficas profissionais"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={limpezaDeCamera}
          description={"Manutênção e Limpeza de câmera fotográfica"}
          priceProduct="R$65,00"
          nameProduct="Manutênção e Limpeza completa"
          kgProduct="Por equipamento"
        />
        <LiProducts
          photo={sessaoDeFotos}
          description={"Sessão de Fotos completa"}
          priceProduct="R$100,00"
          nameProduct="Sessão de Fotos completa em studio"
          kgProduct="Por hora"
        />

      </div>

      <div className="h-8"></div>

    </div>
  );
}
