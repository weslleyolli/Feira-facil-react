import Image, { StaticImageData } from "next/image";

interface CategorieItemProps {
  imageSrc: StaticImageData;
  title: string;
  address: string;
  categoryImageSrc: StaticImageData;
}

export default function CategorieItem({ imageSrc, title, address, categoryImageSrc }: CategorieItemProps) {
  return (
    <div className="banca border-2 w-fit border-green150 rounded-md shadow-sm transform hover:shadow-xl cursor-pointer p-2 flex items-center mx-4">
      <Image className="bancaImg1" src={imageSrc} alt={title} />
      <div className="ml-2 p-5">
        <span className="font-bold">{title}</span>
        <span className="text-gray-500 block">{address}</span>
        <Image className="cateAvaliacao2 ml-auto" src={categoryImageSrc} alt={`categoria-avaliacao-${title}`} />
      </div>
    </div>
  );
}
