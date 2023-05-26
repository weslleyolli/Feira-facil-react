import Image from "next/image"
import 'tailwindcss/tailwind.css';
import hortifruits from '../assets/categories/hortifruits.svg'

export default function CategoriesIcon() {
    return (
        <a href='' className="w-1/4 flex flex-col items-center p-5">
            <Image className="max-w-[50%]" src={hortifruits} alt="hortifruits" />
            <p className="text-green150 text-2xl">Hortifrúti</p>
        </a>
    )
}