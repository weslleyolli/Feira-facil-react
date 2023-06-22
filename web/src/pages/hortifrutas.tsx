import Image from "next/image"


export default function Hortifruti(){
    return(
        <header>
        <a href="./categories.html"> <Image id="LogoFeira" src="" alt="Logo Feira"/>

        </a>

        <div className="search">
            <Image id="LogoFind" src='' alt="Lupa pesquisa"/>
            <div className="text-search">
                <input type="text" placeholder="Busque por um item ou loja"/>
            </div>
        </div>

    </header>
    )
}