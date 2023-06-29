// import { useState } from "react";
// import Image from "next/image";
import '../app/globals.css';

import Header from "@/components/Header";
import CategorieItem from "@/components/CategorieItem";
import LogoCategorie from '@/components/LogoCategorie'

import bodegadoLuis from "../assets/bebidas/bancas/bodegadoLuis.svg";
import pointDasBebidas from "../assets/bebidas/bancas/pointDasBebidas.svg";
import cachacariaDoErnesto from "../assets/bebidas/bancas/cachacariaDoErnesto.svg";
import horaH from "../assets/bebidas/bancas/horaH.svg";
import skinaoConveniencia from "../assets/bebidas/bancas/skinaoConveniencia.svg";
import gordinhoBebidas from "../assets/bebidas/bancas/gordinhoBebidas.svg";
import bebidas from "../assets/categories/bebidas.svg";


export default function Bebidas() {
  return (
    <div className="background">
      <Header></Header>
      <LogoCategorie
        photo={bebidas}
        title="Garrafa"
        name="Bebidas"
      />
      <main className=" flex items-center align-middle justify-center">
        <div className="bancasSection grid grid-cols-2 gap-4 items-center align-middle">

          <CategorieItem
            href="bodegaDoLuis"
            imageSrc={bodegadoLuis}
            title="Bodega do Luís"
            address="R.Dep. José Tavares, 789"
            category="Bebidas"
            avaliacao={5.0}
          />
          
          <CategorieItem
            href="pointDasBebidas"
            imageSrc={pointDasBebidas}
            title="Point das Bebidas"
            address="R.Dep. José Tavares, 777"
            category="Bebidas"
            avaliacao={5.0}
          />

          <CategorieItem
            href="cachacariaDoErnesto"
            imageSrc={cachacariaDoErnesto}
            title="Cachaçaria do Ernesto"
            address="R.Dep. José Tavares, 798"
            category="Bebidas"
            avaliacao={4.9}
          />

          <CategorieItem
            href="skinaoConveniencia"
            imageSrc={skinaoConveniencia}
            title="Skinão Conveniência"
            address="R.Dep. José Tavares, 817"
            category="Bebidas"
            avaliacao={4.9}
          />

          <CategorieItem
            href="horaH"
            imageSrc={horaH}
            title="Hora H Conveniência"
            address="R.Dep. José Tavares, 843"
            category="Bebidas"
            avaliacao={4.8}
          />

          <CategorieItem
            href="gordinhoBebidas"
            imageSrc={gordinhoBebidas}
            title="Gordinho Bebidas"
            address="R.Dep. José Tavares, 832"
            category="Bebidas"
            avaliacao={4.8}
          />
        

                
            <div className="h-8"></div>
          
        </div>
      </main>
    </div>
  );
}
