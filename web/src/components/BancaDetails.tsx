import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import LogoStar from "../assets/banca/bancaProfile/LogoStar.svg";
import LogoClose from "../assets/banca/bancaProfile/LogoClose.svg";

interface BancaProps {
  photo: StaticImageData;
  description: string;
  nomeBanca: string;
  avaliacaoBanca: number;
}

const Banca = ({
  photo,
  description,
  nomeBanca,
  avaliacaoBanca,
}: BancaProps) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleMostrarInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  const fecharInfo = () => {
    setMostrarInfo(false);
  };

  return (
    <div className="banca relative w-90vw h-196px flex items-center mx-28 mt-10">
      <Image
        src={photo}
        alt={description}
        id="ProfileBanca"
        width={140}
        height={140}
      />

      <h2 className="relative w-200px h-35px top-33 left-3 font-roboto font-normal text-xl text-black">
        {nomeBanca || "Banca em construção"}
      </h2>

      <Image
        src={LogoStar}
        alt={"Avaliação"}
        id="Avaliacao"
        width={12}
        height={11}
        className="relative top-50 left-4"
      />

      <p className="relative w-20px h-18px top-43 left-5 font-roboto font-normal text-xs text-teal-500">
        {avaliacaoBanca || "Banca não avaliada"}
      </p>

      <h4
        className="absolute top-29 right-5 ml-auto font-roboto font-normal text-xl text-teal-500 cursor-pointer hover:underline"
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
                >
                  Sobre
                </h1>
                <p style={{ marginLeft: "12%", color: "#000" }}>
                  Loja de hortifrúti com a maior diversidade <br /> de frutas,
                  verduras e legumes de toda feira <br /> central.
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
                >
                  Endereço
                </h1>
                <p style={{ marginLeft: "12%", color: "#000" }}>
                  Rua Deputado José Taváres, 766 - Centro
                </p>
                <p style={{ marginLeft: "12%", color: "#000" }}>
                  Campina Grande - PB
                </p>
                <p style={{ marginLeft: "12%", color: "#000" }}>
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
                  >
                    Segunda-feira
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
                      marginRight: "14%",
                      marginBottom: "1%",
                    }}
                  >
                    Terça-feira
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
                      marginRight: "12%",
                      marginBottom: "1%",
                    }}
                  >
                    Quarta-feira
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
                      marginRight: "12%",
                      marginBottom: "1%",
                    }}
                  >
                    Quinta-feira
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
                      marginRight: "14%",
                      marginBottom: "1%",
                    }}
                  >
                    Sexta-feira
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
                  >
                    Sábado
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
                      marginRight: "16%",
                      marginBottom: "1%",
                    }}
                  >
                    Domingo
                  </p>
                  <p style={{ marginRight: "15%", marginBottom: "1%" }}>
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
