import { useState } from "react";
import Image from "next/image";
import logoFind from "../assets/header/lupa.svg";
import banca1 from "../assets/hortifruti/banca1.svg";
import banca2 from "../assets/hortifruti/banca2.svg";
import banca3 from "../assets/hortifruti/banca3.svg";
import banca4 from "../assets/hortifruti/banca4.svg";
import banca5 from "../assets/hortifruti/banca5.svg";
import banca6 from "../assets/hortifruti/banca6.svg";
import categoriaAvaliacao from "../assets/hortifruti/categoria-avaliacao.svg";
import categoriaAvaliacao2 from "../assets/hortifruti/categoria-avaliacao2.svg";
import categoriaAvaliacao3 from "../assets/hortifruti/categoria-avaliacao3.svg";
import hortiIcon from "../assets/hortifruti/hortiIcon.svg";
import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";

export default function Hortifruti() {
  const [userInfoVisible, setUserInfoVisible] = useState(false);

  const toggleUserInfo = () => {
    setUserInfoVisible((prev) => !prev);
  };

  return (
    <div className="background">
      <Header></Header>
      <div className="flex justify-center items-center">
        <Image src={hortiIcon} alt="icone-hortifruti" />
      </div>
      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">
          <a
            href="bancaAntonio"
          >
            <CategorieItem
              imageSrc={banca1}
              title="Banca do Antônio"
              address="R.Dep. José Taváres, 776"
              categoryImageSrc={categoriaAvaliacao}
            />
          </a>
          
          <CategorieItem
            imageSrc={banca2}
            title="Bandejas do Orlando"
            address="R.Dep. José Taváres, 990"
            categoryImageSrc={categoriaAvaliacao2}
          />

          <CategorieItem
            imageSrc={banca3}
            title="Chico da Laranja"
            address="R.Dep. José Taváres, 854"
            categoryImageSrc={categoriaAvaliacao3}
          />

          <CategorieItem
            imageSrc={banca4}
            title="Barraca São Luiz"
            address="R.Dep. José Taváres, 698"
            categoryImageSrc={categoriaAvaliacao}
          />

          <CategorieItem
            imageSrc={banca5}
            title="Bandejas do Orlando"
            address="R.Dep. José Taváres, 887"
            categoryImageSrc={categoriaAvaliacao3}
          />

          <CategorieItem
            imageSrc={banca6}
            title="Toim do Coentro"
            address="R.Dep. José Taváres, 655"
            categoryImageSrc={categoriaAvaliacao}
          />
          
        </div>
      </main>
      <div className="container">
        <div
          id="UserInfo"
          style={{ display: userInfoVisible ? "block" : "none" }}
        >
          <h2>Olá, José Eduardo</h2>
          <div className="meusDados">
            <Image className="logoConfig" src={logoFind} alt="Configurações" />
            <p>Meus dados</p>
          </div>
          <a href="login.html">
            <div className="sair">
              <Image className="logoExit" src={logoFind} alt="Sair" />
              <p>Sair</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
