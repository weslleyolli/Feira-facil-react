import Image from 'next/image'
import 'tailwindcss/tailwind.css';

import logoFF from '../assets/header/logoFF.svg'
import lupa from '../assets/header/lupa.svg'
import user from '../assets/header/user.svg'
import message from '../assets/header/message.svg'
import MyPopover from './Popover';

export default function Header() {
    return (
        <header className="h-24 bg-green200 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <div>
                    <a href='categories'>
                    <Image src={logoFF} alt="Logo Feira" className="max-w-[70%] h-auto ml-3" />
                    </a>
                                    </div>
                <div className="w-[350px] bg-white p-2 flex items-center gap-[10px] rounded-xl">
                    <Image className="max-w-[70%] h-8" src={lupa} alt="Lupa pesquisa" />
                    <input className="bg-transparent border-none text-xl active:border-none" type="text" placeholder="Busque por um item ou loja" />
                </div>
            </div>
            <div className="flex gap-10 mr-10">
                <button id="button-user">
                    <Image className="max-w-[80%] h-8" src={user} alt="Usuário" />
                </button>
                <button>
                    <a href=""><Image className="max-w-[80%]" src={message} alt="Chat" /></a>
                </button>
            </div>
            <MyPopover />
        </header>
    )
}