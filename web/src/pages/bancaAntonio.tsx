import Image from 'next/image';
import 'tailwindcss/tailwind.css';

import ProfileBanca from '../assets/banca/bancaProfile/ProfileBanca.png';

import hortifrutas from '../assets/banca/Hortifrutas.svg';
import apple from '../assets/banca/produtos/Apple.svg';
import carrot from '../assets/banca/produtos/Carrot.svg';
import coriander from '../assets/banca/produtos/Coriander.svg';
import melon from '../assets/banca/produtos/Melon.svg';
import papaya from '../assets/banca/produtos/Papaya.svg';
import watermelon from '../assets/banca/produtos/Watermelon.svg';

import Header from '@/components/Header';
import LiProducts from '@/components/LiProducts';
import Banca from '@/components/BancaDetails';
import Barras from '@/components/BancaBarras';


export default function bancaAntonio(){
    return(
        <div>
            <Header/>
            <Image src={hortifrutas} alt='Foto hortifrutas' width={1300} height={1200} className="relative mx-auto my-2 rounded-md w-5/6"/>
            <Banca photo={ProfileBanca} description={'Foto da Banca'} nomeBanca={'Banca do Antônio'} avaliacaoBanca={'4.7'}/>
            <Barras/>
            <div className='w-5/6 mx-auto'>
                <LiProducts
                photo={apple}
                description={'Maçã'}
                priceProduct="R$5,51"
                spanProduct="-15%"
                spanProduct2="R$6,49"
                nameProduct="Maçã Red"
                />
                <LiProducts
                photo={papaya}
                description={'Teste'}
                priceProduct="R$6,72"
                spanProduct="-20%"
                spanProduct2="R$8,40"
                nameProduct="Mamão Papaya"
                />
                <LiProducts
                photo={carrot}
                description={'Cenoura'}
                priceProduct="R$4,86"
                spanProduct="-25%"
                spanProduct2="R$6,49"
                nameProduct="Cenoura"
                />
                <LiProducts
                photo={coriander}
                description={'Coentro'}
                priceProduct="R$1,99"
                nameProduct="Coentro"
                kgProduct="Por unidade"
                />
                <LiProducts
                photo={melon}
                description={'Melão'}
                priceProduct="R$4,99"
                nameProduct="Melão"
                kgProduct="Por unidade"
                />
                <LiProducts
                photo={watermelon}
                description={'Melância'}
                priceProduct="R$7,99"
                nameProduct="Melância"
                kgProduct="Por unidade"
                />
            </div>
        </div>
    )
}