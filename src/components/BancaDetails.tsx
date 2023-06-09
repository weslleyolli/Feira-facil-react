import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import "../app/globals.css";

import LogoStar from "../assets/banca/bancaProfile/LogoStar.svg";
import LogoClose from "../assets/banca/bancaProfile/LogoClose.svg";

interface BancaProps {
  photo: StaticImageData;
  description: string;
  nomeBanca?: string;
  avaliacaoBanca: number;
  aboutBanca: string;
  numberBanca: number;
}

const Banca = ({
  photo,
  description,
  nomeBanca,
  avaliacaoBanca,
  aboutBanca,
  numberBanca,
}: BancaProps) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleMostrarInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  const fecharInfo = () => {
    setMostrarInfo(false);
  };

  return (
    <div className="relative w-90vw h-196px flex items-center mx-28 mt-10">
      <Image
        src={photo}
        alt={description}
        id="ProfileBanca"
        width={140}
        height={140}
      />

      <div className="flex ml-3">
        <h2 className="font-freedoka font-normal text-xl text-black">
          {nomeBanca || "Banca em construção"}
        </h2>

        <div className="flex items-center">
          <Image
            src={LogoStar}
            alt={"Avaliação"}
            id="Avaliacao"
            width={12}
            height={11}
            className="ml-1.5 mt-1"
          />
        </div>

        <p className="ml-1 mt-2 w-20px h-18px font-freedoka font-normal text-xs text-teal-500">
          {avaliacaoBanca || "Banca não avaliada"}
        </p>
        
      </div>


      <h4
        className="absolute top-29 right-10 ml-auto font-freedoka font-normal text-lg text-teal-500 cursor-pointer hover:underline"
        onClick={toggleMostrarInfo}
      >
        Ver mais
      </h4>

      {mostrarInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 h-screen w-2/6 bg-white">
            <div className="exit">
              <Image
                onClick={fecharInfo}
                id="LogoClose"
                src={LogoClose}
                alt="Fechar"
                style={{
                  cursor: "pointer",
                  marginLeft: "10%",
                  marginTop: "10%",
                }}
              />
            </div>
            <div className="info-feira">
              <div className="about">
                <h1
                  style={{
                    fontSize: "24px",
                    marginLeft: "8%",
                    marginTop: "5%",
                    color: "#acacac",
                  }}
                  className="font-freedoka"
                >
                  Sobre
                </h1>
                <p
                  style={{ marginLeft: "12%" }}
                  className="max-w-xs font-freedoka text-sm"
                >
                  {aboutBanca}
                </p>
              </div>
              <div className="address">
                <h1
                  style={{
                    fontSize: "24px",
                    marginLeft: "8%",
                    marginTop: "5%",
                    color: "#acacac",
                  }}
                  className="font-freedoka"
                >
                  Endereço
                </h1>
                <p
                  style={{ marginLeft: "12%", color: "#000" }}
                  className="font-freedoka text-sm"
                >
                  Rua Deputado José Tavares, {numberBanca} - Centro
                </p>
                <p
                  style={{ marginLeft: "12%", color: "#000" }}
                  className="font-freedoka text-sm"
                >
                  Campina Grande - PB
                </p>
                <p
                  style={{ marginLeft: "12%", color: "#000" }}
                  className="font-freedoka text-sm"
                >
                  CEP:58465-554
                </p>
              </div>
              <div className="hours">
                <h1
                  style={{
                    fontSize: "24px",
                    marginLeft: "8%",
                    marginTop: "5%",
                    marginBottom: "2%",
                    color: "#acacac",
                  }}
                  className="font-freedoka"
                >
                  Horário
                </h1>
                <div
                  className="segunda"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "10%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Segunda-feira
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    7:00 às 15:00
                  </p>
                </div>
                <div
                  className="terca"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "15%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Terça-feira
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    7:00 às 15:00
                  </p>
                </div>
                <div
                  className="quarta"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "13%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Quarta-feira
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    7:00 às 15:00
                  </p>
                </div>
                <div
                  className="quinta"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "13%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Quinta-feira
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    7:00 às 15:00
                  </p>
                </div>
                <div
                  className="sexta"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "15%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Sexta-feira
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    7:00 às 15:00
                  </p>
                </div>
                <div
                  className="sabado"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "19%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Sábado
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    7:00 às 15:00
                  </p>
                </div>
                <div
                  className="domingo"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p
                    style={{
                      marginLeft: "15%",
                      marginRight: "18%",
                      marginBottom: "1%",
                    }}
                    className="font-freedoka text-sm"
                  >
                    Domingo
                  </p>
                  <p
                    style={{ marginRight: "15%", marginBottom: "1%" }}
                    className="font-freedoka text-sm"
                  >
                    Não abre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banca;
