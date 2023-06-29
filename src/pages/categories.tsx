import 'tailwindcss/tailwind.css';

import CategoriesIcon from '@/components/CategoriesIcon';
import Header from '@/components/Header';
import acougue from '../assets/categories/acougue.svg';
import alimentacao from '../assets/categories/alimentacao.svg';
import bebidas from '../assets/categories/bebidas.svg';
import descartaveis from '../assets/categories/descartaveis.svg';
import hortifruits from '../assets/categories/hortifruits.svg';
import laticinios from '../assets/categories/laticinios.svg';
import mercearia from '../assets/categories/mercearia.svg';
import pets from '../assets/categories/pets.svg';
import servicos from '../assets/categories/servicos.svg';
import temperos from '../assets/categories/temperos.svg';
import variedades from '../assets/categories/variedades.svg';
import vestuario from '../assets/categories/vestuario.svg';

export default function Categories() {

    return (
        <div>
            <Header/>
            <div className='pt-6 h-4/5 flex flex-col items-center gap-10'>
                <div>
                    <h1 className='text-green150 text-6xl font-Fredoka font-bold'>Categorias</h1>
                </div>
                <div className="h-auto w-3/5 flex flex-wrap">
                
                    <CategoriesIcon image={hortifruits} alt="Maçã" name='Hortifrutas' href='hortifruti'/>
                    <CategoriesIcon image={pets} alt="Pata de cachorro" name='Pets' href='pets' />
                    <CategoriesIcon image={bebidas} alt="Garrafa" name='Bebidas' href='bebidas'/>
                    <CategoriesIcon image={acougue} alt="Carne" name='Açougue' href='acougue'/>
                    <CategoriesIcon image={laticinios} alt="Fatia de queijo" name='Laticínios' />
                    <CategoriesIcon image={variedades} alt="Dois balões" name='Variedades' href='variedades'/>
                    <CategoriesIcon image={temperos} alt="Tempero sendo jogado na panela" name='Temperos' href='temperos' />
                    <CategoriesIcon image={descartaveis} alt="Duas sacolas de papel" name='Descartáveis' href='descartaveis'/>
                    <CategoriesIcon image={vestuario} alt="Uma blusa feminina" name='Vestuário' href='vestuario'/>
                    <CategoriesIcon image={alimentacao} alt="Um prato e dois talheres" name='Alimentação' href='alimentacao' />
                    <CategoriesIcon image={servicos} alt="Chave de mecanico" name='Serviços' href='servicos' />
                    <CategoriesIcon image={mercearia} alt="Carrinho de compras" name='Mercearia' href='mercearia'/>
                </div>
            </div>
        </div>
    )
}