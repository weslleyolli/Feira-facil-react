import Image from 'next/image'
import 'tailwindcss/tailwind.css';

import logoFF from '/assets/categories/logoFF.svg'
import lupa from '../assets/categories/lupa.svg'
import user from '../assets/categories/user.svg'
import message from '../assets/categories/message.svg'
import Head from 'next/head';
import CategoriesIcon from '@/components/CategoriesIcon';

export default function Categories() {
    return (
        <div>
            <header className="h-24 bg-green200 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div>
                        <Image src={logoFF} alt="Logo Feira" className="max-w-[70%] h-auto ml-3" />
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
            </header>
            <div className='pt-6 h-4/5 flex flex-col items-center gap-10'>
                <div>
                    <h1 className='text-green150 text-5xl font-bold'>Categorias</h1>
                </div>
                <div className="h-auto w-3/5 flex flex-wrap">
                    <CategoriesIcon />
                    <CategoriesIcon />
                    <CategoriesIcon />
                    <CategoriesIcon />
                    <CategoriesIcon />
                    <CategoriesIcon />
                    <CategoriesIcon />
                    <CategoriesIcon />
                </div>
            </div>
        </div>
    )
}