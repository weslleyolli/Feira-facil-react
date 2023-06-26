import '../app/globals.css';

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from '@/components/LogoCategorie'

import carnesDoNeto from "../assets/acougue/carnesDoNeto.svg";
import acougueCariri from "../assets/acougue/acougueCariri.svg";
import carnesDoBetinho from "../assets/acougue/carnesDoBetinho.svg";
import acougueTupa from "../assets/acougue/acougueTupa.svg";
import casaDasCarnes from "../assets/acougue/casaDasCarnes.svg";
import zeDasCarnes from "../assets/acougue/zeDasCarnes.svg";
import acougue from "../assets/categories/acougue.svg";


export default function Bebidas() {
  return (
    <div className="background">
      <Header></Header>
      <LogoCategorie
        photo={acougue}
        title="Carne"
        name="Açougue"
      />
      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">

          <CategorieItem
            href="carnesDoNeto"
            imageSrc={carnesDoNeto}
            title="Carnes do Neto"
            address="R.Dep. José Tavares, 999"
            category="Açougue"
            avaliacao={5.0}
          />
          
          <CategorieItem
            href="acougueCariri"
            imageSrc={acougueCariri}
            title="Point das Bebidas"
            address="R.Dep. José Tavares, 998"
            category="Açougue"
            avaliacao={4.9}
          />

          <CategorieItem
            href="zeDasCarnes"
            imageSrc={zeDasCarnes}
            title="Zé das Carnes"
            address="R.Dep. José Tavares, 967"
            category="Açougue"
            avaliacao={4.9}
          />

          <CategorieItem
            href="acougueTupa"
            imageSrc={acougueTupa}
            title="Açougue Tupã"
            address="R.Dep. José Tavares, 965"
            category="Açougue"
            avaliacao={4.9}
          />

          <CategorieItem
            href="casaDasCarnes"
            imageSrc={casaDasCarnes}
            title="Casa das Carnes"
            address="R.Dep. José Tavares, 964"
            category="Açougue"
            avaliacao={4.8}
          />

          <CategorieItem
            href="carnesDoBetinho"
            imageSrc={carnesDoBetinho}
            title="Carnes do Betinho"
            address="R.Dep. José Tavares, 932"
            category="Açougue"
            avaliacao={4.8}
          />
        

                
            <div className="h-8"></div>
          
        </div>
      </main>
    </div>
  );
}