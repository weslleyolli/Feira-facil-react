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
import hortiIcon from "../assets/hortifruti/hortiIcon.svg"
import Header from '@/components/Header';


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
    <div className="bancasSection grid grid-cols-2 gap-4 flex items-center align-middle">
  <a className="banca border w-fit border-gray-400 rounded-md p-2 flex items-center " href="bancaAntonio">
    <Image className="bancaImg" src={banca1} alt="banca1" />
    <div className="ml-2">
      <span className="font-bold">Banca do Antônio</span>
      <span className="text-gray-500 block">R.Dep. José Taváres, 776</span>
      <Image className="cateAvaliacao1 ml-auto" src={categoriaAvaliacao} alt="categoria-avaliacao1" />
    </div>
  </a>
  <div className="banca border w-fit border-gray-400 rounded-md p-2 flex items-center">
    <Image className="bancaImg1" src={banca2} alt="banca2" />
    <div className="ml-2">
      <span className="font-bold">Bandejas do Orlando</span>
      <span className="text-gray-500 block">R.Dep. José Taváres, 990</span>
      <Image className="cateAvaliacao2 ml-auto" src={categoriaAvaliacao2} alt="categoria-avaliacao2" />
    </div>
  </div>
  <div className="banca border w-fit border-gray-400 rounded-md p-2 flex items-center">
    <Image className="bancaImg" src={banca3} alt="banca3" />
    <div className="ml-2">
      <span className="font-bold">Chico da Laranja</span>
      <span className="text-gray-500 block">R.Dep. José Taváres, 854</span>
      <Image className="cateAvaliacao3 ml-auto" src={categoriaAvaliacao3} alt="categoria-avaliacao3" />
    </div>
  </div>
  <div className="banca border w-fit  border-gray-400 rounded-md p-2 flex items-center">
    <Image className="bancaImg" src={banca4} alt="banca4" />
    <div className="ml-2">
      <span className="font-bold">Barraca São Luiz</span>
      <span className="text-gray-500 block">R.Dep. José Taváres, 698</span>
      <Image className="cateAvaliacao4 ml-auto" src={categoriaAvaliacao} alt="categoria-avaliacao4" />
    </div>
  </div>
  <div className="banca border w-fit border-gray-400 rounded-md p-2 flex items-center">
    <Image className="bancaImg4" src={banca5} alt="banca5" />
    <div className="ml-2">
      <span className="font-bold">Banca da Suani</span>
      <span className="text-gray-500 block">R.Dep. José Taváres, 887</span>
      <Image className="cateAvaliacao ml-auto" src={categoriaAvaliacao3} alt="categoria-avaliacao5" />
    </div>
  </div>
  <div className="banca border w-fit border-gray-400 rounded-md p-2 flex items-center">
    <Image className="bancaImg5" src={banca6} alt="banca6" />
    <div className="ml-3">
      <span className="font-bold">Toim do Coentro</span>
      <span className="text-gray-500 block">R.Dep. José Taváres, 655</span>
      <Image className="cateAvaliacao5 ml-auto" src={categoriaAvaliacao} alt="categoria-avaliacao6" />
    </div>
  </div>
</div>
      </main>
      <div className="container">
        <div id="UserInfo" style={{ display: userInfoVisible ? "block" : "none" }}>
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
