import Image, { StaticImageData } from "next/image";
import "../app/globals.css";

interface CategorieLogoProps {
  photo: StaticImageData;
  name: string;
  title: string;
}

export default function CategorieItem({
  photo,
  name,
  title,
}: CategorieLogoProps) {
  return (
    <div className="flex items-center justify-center mt-10 gap-5 mb-10">
      <h1 className="text-green150 font-freedoka font-bold text-5xl">{name}</h1>
      <Image className="bancaImg1" src={photo} alt={title} width={90} height={90} />
    </div>
  );
}
