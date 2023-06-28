
import "../app/globals.css";

import Loja1 from "../assets/vestuario/bancas/Loja1.jpg";
import Loja2 from "../assets/vestuario/bancas/Loja2.jpg";
import Loja3 from "../assets/vestuario/bancas/Loja3.jpg";
import Loja4 from "../assets/vestuario/bancas/Loja4.jpg";
import Loja5 from "../assets/vestuario/bancas/Loja5.jpg";
import Loja6 from "../assets/vestuario/bancas/Loja6.jpg";

import vestuario from "../assets/categories/vestuario.svg";

import CategorieItem from "@/components/CategorieItem";
import Header from "@/components/Header";
import LogoCategorie from "@/components/LogoCategorie";

export default function Vestuario() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={vestuario}
        name="Vestuário"
        title="Roupas e acessórios"
      />

      <main className="flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            imageSrc={Loja1}
            title="Loja da Moda"
            address="Rua Principal, 123"
            category={"Vestuário"}
            avaliacao={4.7}
            href="vestuarioRoupas"
          />

          <CategorieItem
            imageSrc={Loja2}
            title="Estilo Fashion"
            address="Rua Principal, 456"
            category={"Vestuário"}
            avaliacao={4.9}
          />

          <CategorieItem
            imageSrc={Loja3}
            title="Outlet de Moda"
            address="Rua Principal, 789"
            category={"Vestuário"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={Loja4}
            title="Loja Chic"
            address="Rua Principal, 1011"
            category={"Vestuário"}
            avaliacao={4.6}
          />

          <CategorieItem
            imageSrc={Loja5}
            title="Loja de Acessórios"
            address="Rua Principal, 1314"
            category={"Vestuário"}
            avaliacao={4.3}
          />


          <CategorieItem
            imageSrc={Loja6}
            title="Loja VistaBem"
            address="Rua Principal, 1314"
            category={"Vestuário"}
            avaliacao={4.3}
          />


          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
