import Image from "next/image"
import 'tailwindcss/tailwind.css';
import Link from 'next/link'

import banca1 from "../assets/hortifruti/banca1.svg"

import banca2 from "../assets/hortifruti/banca2.svg"

import banca3 from "../assets/hortifruti/banca3.svg"

import banca4 from "../assets/hortifruti/banca4.svg"

import banca5 from "../assets/hortifruti/banca5.svg"

import banca6 from "../assets/hortifruti/banca6.svg"

import categoriaAvaliação from "../assets/hortifruti/categoria-avaliacao2.svg"
import categoriaAvaliação2 from "../assets/hortifruti/categoria-avaliacao3.svg"
import categoriaAvaliação3 from "../assets/hortifruti/categoria-avaliação3.svg"
import hortiIcon from "../assets/hortifruti/horti-Icon.svg"
import logoFF from "../assets/categories/logoFF.svg"
import logoUser from "../assets/categories/user.svg"
import logoFind from "../assets/categories/lupa.svg"


export default function Hortifruti (){
  return (
    <div className="background">
        <header>
            <a href="./categories.html"> <Image className="LogoFeira" src={logoFF} alt="Logo Feira"/>

            </a>

            <div className="search">
                <Image className="" src={logoFind} alt="Lupa pesquisa"/>
                <div className="text-search">
                    <input type="text" placeholder="Busque por um item ou loja"/>
                </div>
            </div>
            <Image className="" src={logoUser} alt="Usuário"/>
            <a>
                <Image className="LogoChat" src={hortiIcon} alt="Chat"/>
            </a>

        </header>
        <main className="hortifruti-section">
            <div>
                <Image className="horti-Icon" src={hortiIcon} alt="logo-hortifrutas"/>
            </div>
            <div className="bancas-section">
                <a className="banca" href="../pages/BancaAntonio.html">
                    <Image className="bancaimg" src={banca1} alt="banca1"/>
                    <span className="bancanome"> Banca do Antônio</span>
                    <span className="localizacao1">R.Dep. José Taváres, 776</span>
                    <Image className="cate-avaliacao1" src={categoriaAvaliação} alt="categoria-avaliaçao1"/>
                </a>
                <div className="banca">
                    <Image className="bancaimg1" src={banca2} alt="banca2"/>
                    <span className="bancanome"> Bandejas do Orlando</span>
                    <span className="localizacao2">R.Dep. José Taváres, 990</span>
                    <Image className="cate-avaliacao2" src={categoriaAvaliação2} alt="categoria-avaliaçao3"/>
                </div>
                <div className="banca">

                    <Image className="bancaimg" src={banca3} alt="banca3"/>
                    <span className="bancanome">Chico da Laranja</span>
                    <span className="localizacao3">R.Dep. José Taváres, 854</span>
                    <Image className="cate-avaliacao3" src={categoriaAvaliação3} alt="categoria-avaliaçao3"/>
                </div>
                <div className="banca">

                    <Image className="bancaimg" src={banca4} alt="banca1"/>
                    <span className="bancanome"> Barraca São Luiz</span>
                    <span className="localizacao4">R.Dep. José Taváres, 698</span>
                    <Image className="cate-avaliacao4" src={categoriaAvaliação} alt="banca1"/>
                </div>
                <div className="banca">

                    <Image className="bancaimg4" src={banca4} alt="banca1"/>
                    <span className="bancanome"> Banca da Suani</span>
                    <span className="localizacao5">R.Dep. José Taváres, 887</span>
                    <Image className="cate-avaliacao" src={categoriaAvaliação2} alt="banca1"/>
                </div>
                <div className="banca">
                    <div className="banca-info"></div>
                    <Image className="bancaimg5" src={banca5} alt="banca5"/>
                    <span className="bancanome"> Toim do Coentro</span>
                    <span className="localizacao6">R.Dep. José Taváres, 655</span>
                    <Image className="cate-avaliacao5" src={categoriaAvaliação2} alt="banca1" />
                </div>
                <div className="banca">
                    <div className="banca-info"></div>
                    <Image className="bancaimg5" src={banca6} alt="banca6"/>
                    <span className="bancanome"> Toim do Coentro</span>
                    <span className="localizacao6">R.Dep. José Taváres, 655</span>
                    <Image className="cate-avaliacao5" src={categoriaAvaliação2} alt="banca1" />
                </div>
            </div>
        </main>
        <div className="container">
            <div id="UserInfo">
                <h2>Olá, José Eduardo</h2>
                <div className="MeusDados">
                    <Image className="LogoConfig" src={hortiIcon} alt="Configurações"/>
                    <p>Meus dados</p>
                </div>
                <a href="login.html">
                    <div className="Sair">
                        <Image className="LogoExit" src={hortiIcon} alt="Sair"/>
                        <p>Sair</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
};