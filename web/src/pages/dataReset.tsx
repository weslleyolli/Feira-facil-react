import Header from "@/components/Header";
import Link from "next/link";

export default function dataReset() {
    return (
      <div>
       <Header />
       <div  className='pt-6 h-4/5 flex flex-col items-center gap-10'>
          <h1 className='text-green150 text-5xl font-bold mt-11.8125rem'>Meus Dados</h1>
        </div>
        <div className="h-screen flex items-center justify-center" >
            <div className="h-3/5 w-1/3 shadow-2xl rounded-xl px-16 bg-white z-10 flex flex-col items-center justify-between pt-10">
                <div className="text-3xl font-bold">
                    <p>Cadastre-se</p>
                </div>
                <div className="w-full mt-7 flex flex-col gap-3">
                    <div>
                        <p className="pl-1 text-lg">Nome completo:</p>
                        <input
                            className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                            id="name"
                            type="text"
                            placeholder="Ex: Pedro Azevedo"
                        />
                    </div>
                    <div>
                        <p className="pl-1 text-lg">E-mail:</p>
                        <input
                            className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                            id="email"
                            type="email"
                            placeholder="email@email.com"
                        />
                    </div>
                    <div>
                        <p className="pl-1 text-lg">Endereço</p>
                        <input
                            className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                            id="location"
                            type="text"
                            placeholder="Ex: Av. José Medeiros, Nº245"
                            />   
                    </div>
                    <div>
                        <p className="pl-1 text-lg">Celular (com DDD)</p>
                        <input
                            className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                            id="celNumber"
                            type="text"
                            placeholder="(00) 00000-0000"
                            />
                    </div>
                    <div className="text-right mt-2">
                        <button className="text-green150" id="forget"> <a href=""> Esqueceu sua senha?Redefinir senha </a></button>
                    </div>
                </div>
                <div id="errorContainer"></div>
            </div>
        </div>
        </div>
    )
  }