import "../app/globals.css";

import Restaurante1 from "../assets/alimentacao/bancas/Restaurante1.jpg";
import Restaurante2 from "../assets/alimentacao/bancas/Restaurante2.jpg";
import Restaurante3 from "../assets/alimentacao/bancas/Restaurante3.jpeg";
import Restaurante4 from "../assets/alimentacao/bancas/Restaurante4.jpg";
import Restaurante5 from "../assets/alimentacao/bancas/Restaurante5.jpeg";
import Restaurante6 from "../assets/alimentacao/bancas/Restaurante6.jpg";

import alimentacao from "../assets/categories/alimentacao.svg";

import CategorieItem from "@/components/CategorieItem";
import Header from "@/components/Header";
import LogoCategorie from "@/components/LogoCategorie";

export default function Alimentacao() {
  return (
    <div className="background">
      <Header />

      <LogoCategorie
        photo={alimentacao}
        name="Alimentação"
        title="Restaurantes e lanchonetes"
      />

      <main className="flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <CategorieItem
            imageSrc={Restaurante1}
            title="Lanchonete Kidelicia"
            address="Rua Principal, 123"
            category={"Alimentação"}
            avaliacao={4.7}
            href='alimentacaoProd'
          />

          <CategorieItem
            imageSrc={Restaurante2}
            title="Tapiocas Do Chico"
            address="Rua Principal, 456"
            category={"Alimentação"}
            avaliacao={4.9}
          />

          <CategorieItem
            imageSrc={Restaurante3}
            title="Restaurante Gourmet"
            address="Rua Principal, 789"
            category={"Alimentação"}
            avaliacao={4.5}
          />

          <CategorieItem
            imageSrc={Restaurante4}
            title="CrepeMania"
            address="Rua Principal, 1011"
            category={"Alimentação"}
            avaliacao={4.6}
          />

          <CategorieItem
            imageSrc={Restaurante5}
            title="GiraBurguer"
            address="Rua Principal, 1314"
            category={"Alimentação"}
            avaliacao={4.3}
          />
           <CategorieItem
            imageSrc={Restaurante6}
            title="Acarajé do Antônio"
            address="Rua Principal, 1314"
            category={"Alimentação"}
            avaliacao={4.3}
          />

          <div className="h-8"></div>
        </div>
      </main>
    </div>
  );
}
