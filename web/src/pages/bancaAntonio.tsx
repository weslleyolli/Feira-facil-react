import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import ProfileBanca from '../assets/banca/bancaProfile/ProfileBanca.png';

import hortifrutas from '../assets/banca/Hortifrutas.svg';
import acougue from '../assets/categories/acougue.svg';
import temperos from '../assets/categories/temperos.svg';

import Header from '@/components/Header';
import LiProducts from '@/components/LiProducts';
import Banca from '@/components/BancaDetails';
import Barras from '@/components/BancaBarras';


export default function bancaAntonio(){
    return(
        <div>
            <Header/>
            <Image src={hortifrutas} alt='' width={1300} height={1200} className="relative mx-auto my-2 rounded-md w-9/10"/>
            <Banca photo={ProfileBanca} description={'Foto da Banca'} nomeBanca={'Banca do Antônio'} avaliacaoBanca={'4.7'}/>
            {/* <Barras/> */}
            <LiProducts
            photo={acougue}
            description={'Teste'}
            priceProduct="R$5,51"
            spanProduct="-15%"
            spanProduct2="R$6,49"
            nameProduct="Maçã Red"
            />
            <LiProducts
            photo={temperos}
            description={'Teste'}
            priceProduct="R$5,51"
            spanProduct="-15%"
            spanProduct2="R$6,49"
            nameProduct="Maçã Red"
            />
        </div>
    )
}