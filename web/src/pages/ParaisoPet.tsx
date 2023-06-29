import Image from "next/image";
import "tailwindcss/tailwind.css";

import ParaisoPetLogo from "../assets/pets/lojas/ParaisoPetLogo.svg";
import Pets from "../assets/pets/lojas/Pets.png";



import ShampooDog from "../assets/pets/lojas/itens/ShampooDog.png";
import OssoBorracha from "../assets/pets/lojas/itens/OssoBorracha.png";
import PoteParaCachorro from "../assets/pets/lojas/itens/PoteParaCachorro.png";
import RatoPano from "../assets/pets/lojas/itens/RatoPano.png";
import ShampooFilhote from "../assets/pets/lojas/itens/ShampooFilhote.png";
import Coleira from "../assets/pets/lojas/itens/Coleira.png";

import Header from "@/components/Header";
import LiProducts from "@/components/LiProducts";
import Banca from "@/components/BancaDetails";
import Barras from "@/components/BancaBarras";

export default function ParaisoPet() {
  return (
    <div>
      <Header />
      <Image
        src={Pets}
        alt="Foto Pets"
        width={1300}
        height={230}
        className="relative mx-auto my-2 rounded-md w-5/6 -z-10 max-h-[230px]"
      />
      <Banca
        photo={ParaisoPetLogo}
        description={"Foto da Loja"}
        nomeBanca={"Paraíso Pet"}
        avaliacaoBanca={4.8}
        aboutBanca="Loja de Pets, com diversos produtos e muita variedade para seus animais de estimação."
        numberBanca={114}
      />
      <Barras />
      <div className="w-5/6 mx-auto">
        <LiProducts
          photo={ShampooDog}
          description={"Shampoo Hidratante"}
          priceProduct="R$29,75"
          spanProduct="-15%"
          spanProduct2="R$35,00"
          nameProduct="Shampoo Hidratante (Beeps)"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={ShampooFilhote}
          description={"Shampoo para Filhotes"}
          priceProduct="R$30,00"
          spanProduct=""
          spanProduct2=""
          nameProduct="Shampoo Filhote (Beeps)"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={OssoBorracha}
          description={"Osso de Borracha Brinquedo"}
          priceProduct="R$7,50"
          spanProduct="-25%"
          spanProduct2="R$10,00"
          nameProduct="Osso de Borracha"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={PoteParaCachorro}
          description={"Pote para colocar ração ou água"}
          priceProduct="R$11,99"
          nameProduct="Pote para ração"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={RatoPano}
          description={"Brinquedo Rato de Pano para gatos"}
          priceProduct="R$4,99"
          nameProduct="Rato de Pano"
          kgProduct="Por unidade"
        />
        <LiProducts
          photo={Coleira}
          description={"Coleira para cachorro"}
          priceProduct="R$9,99"
          nameProduct="Coleira"
          kgProduct="Por unidade"
        />
      </div>

      <div className="h-8"></div>

    </div>
  );
}
