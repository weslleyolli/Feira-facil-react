import Header from "@/components/Header";

import Image from "next/image";
import 'tailwindcss/tailwind.css';
import Link from "next/link";

import photo1 from '../assets/banca/bancaProfile/ProfileBanca.png';
import photo2 from '../assets/message/bandejasHorlando.svg'
import voltar from '../assets/message/return.svg'
import Messages from "@/components/Messages";


export default function Message() {
    return (
        <div>
            <Header />
            <main className="px-20 mt-5">
                <Link href={'/bancaAntonio'} className="flex items-center gap-5">
                    <Image src={voltar} alt="" />
                    <h1 className="text-green150 font-Fredoka text-3xl">Voltar </h1>
                </Link>
                <div className="h-[1px] bg-gray-500 w-[95%] opacity-20 mt-8"></div>
                <div>
                    <Messages image={photo1} name="Banca do Antonio" content="Mas é claro"/>
                    <Messages image={photo2} name="Bandejas do Horlando" content="Vou fazer agora mesmo"/>
                </div>
                <div></div>
            </main>
        </div>
    )
}