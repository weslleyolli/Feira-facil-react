import Image from "next/image";

import settings from '../assets/popover/settings.svg'
import exit from '../assets/popover/exit.svg'

export default function Popover(){
    return(
        <div className="bg-white text-2xl border shadow-sm p-[20px] pr-[40px] pb-[20px] pl-[15px] rounded-md font-normal absolute right-36 top-[4.25rem] flex flex-col gap-10">
            <div>
                <p>Olá, José Eduardo</p>
                <div className='h-[2px] w-full bg-gray-100' id="line"></div>
            </div>
            <button className="flex items-center gap-4 text-xl">
                <Image src={settings} alt="engrenagem"/>
                <a href="">
                    <p>Meus dados</p>
                </a>
            </button>
            <button className="flex items-center gap-4 text-xl">
                <Image src={exit} alt="porta com seta"/>
                <a href="">
                    <p>Sair</p>
                </a>
            </button>
        </div>  
    )
}