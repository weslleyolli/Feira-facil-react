import Image from "next/image"
import 'tailwindcss/tailwind.css';
import feiraLogo from '../assets/login/logoIcon.svg'
import feira from '../assets/redefinirSenha/Ellipse 4 (1).png'
import Link from "next/link";

export default function Register() {
    const styleinputs = 'flex flex-col gap-2'
    return (
        <div>
            <div className="absolute top-0 left-0 mx-[10px] my-8">
                <Image className="h-[130px]" src={feiraLogo} alt="Logo" />
            </div>
            <div>
                <Image className='absolute right-0 h-screen' src={feira} alt="" />
            </div>
            <div className="flex items-center justify-center pt-40 pr-96" >
                <div className="h-3/5 w-1/3 shadow-2xl rounded-xl px-16 bg-white z-10 flex flex-col items-center justify-between ">
                    <div className="text-3xl font-bold py-5">
                        <p>Cadastre-se</p>
                    </div>
                    <div className="w-full mt-5 flex flex-col gap-12">
                        <div className={styleinputs}>
                            <p className="pl-1 text-lg">Nome completo:</p>
                            <input
                                className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                                id="name"
                                type="text"
                                placeholder="Ex: Pedro Azevedo"
                            />
                        </div>
                        <div className={styleinputs}>
                            <p className="pl-1 text-lg">E-mail:</p>
                            <input
                                className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                                id="email"
                                type="email"
                                placeholder="email@email.com"
                            />
                        </div>
                        <div className={styleinputs}>
                            <p className="pl-1 text-lg">Endereço:</p>
                            <input
                                className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                                id="location"
                                type="text"
                                placeholder="Ex: Av. José Medeiros, Nº245"
                            />
                        </div>
                        <div className={styleinputs}>
                            <p className="pl-1 text-lg">Celular (com DDD)</p>
                            <input
                                className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                                id="celNumber"
                                type="text"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                        <div className="flex justify-center py-7">
                            <Link href="/categories" className="bg-green150 text-white w-2/3 rounded-md text-center flex justify-center h-8">
                                <button>
                                    <p>Entrar</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div id="errorContainer"></div>
                </div>
            </div>
        </div>
    )
}