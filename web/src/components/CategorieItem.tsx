import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "../app/globals.css";

import LogoStar from "../assets/banca/bancaProfile/LogoStar.svg";

interface CategorieItemProps {
  href?: string;
  imageSrc: StaticImageData;
  title: string;
  address: string;
  category: string;
  avaliacao: number;
}

export default function CategorieItem({
  href,
  imageSrc,
  title,
  address,
  category,
  avaliacao,
}: CategorieItemProps) {
  return (
    <div>
      <Link
        href={href || ""}
        className="banca -z-10 w-fit rounded-md shadow-xl transform hover:shadow-2xl cursor-pointer p-2 flex items-center mx-4"
      >
        <Image
          className="bancaImg1"
          src={imageSrc}
          alt={title}
          width={260}
          height={260}
        />
        <div className="ml-2 p-5">
          <span className="font-bold font-freedoka">{title}</span>
          <span className="font-freedoka font-extralight text-sm text-gray-500 block">
            {address}
          </span>
          <div className="flex items-center">
            <div className="w-24 h-7 mt-1 bg-yellow-100 flex items-center">
              <p className="text-center text-gray-500 text-xxs font-freedoka font-thin">
                Categoria: {category}
              </p>
            </div>
            <Image
              className="bancaAvaliacao ml-1 mt-1"
              src={LogoStar}
              alt={"Logo em forma de estrela de avaliação"}
              width={10}
              height={10}
            />
            <p className="text-center text-gray-500 text-xxs font-freedoka font-thin ml-1 mt-1">
              {avaliacao.toFixed(1)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
