import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import '../app/globals.css';


interface CategorieItemProps {
  imageSrc: StaticImageData;
  title: string;
  address: string;
  categoryImageSrc: StaticImageData;
  href?: string;
}

export default function CategorieItem({ imageSrc, title, address, categoryImageSrc, href }: CategorieItemProps) {
  return (
    <div>
      <Link href={href || ''} className="banca -z-10 w-fit rounded-md shadow-xl transform hover:shadow-2xl cursor-pointer p-2 flex items-center mx-4">
        <Image className="bancaImg1" src={imageSrc} alt={title} width={260} height={260} />
        <div className="ml-2 p-5">
          <span className="font-bold font-freedoka">{title}</span>
          <span className="font-freedoka font-thin text-sm text-gray-500 block">{address}</span>
          <Image className="cateAvaliacao2 ml-auto" src={categoryImageSrc} alt={`categoria-avaliacao-${title}`} />
        </div>
      </Link>
    </div>
  );
}
