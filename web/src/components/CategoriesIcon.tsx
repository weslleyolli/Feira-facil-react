import Image from 'next/image';
import Link from 'next/link';

import PropTypes from 'prop-types';


interface CategoriesIconProps {
  image: string;
  alt: string;
  name: string;
}

const CategoriesIcon: React.FC<CategoriesIconProps> = ({ image, alt, name}) => {
  return (
    <Link href='/hortifruti' className="w-1/4 flex flex-col items-center justify-between p-5">
      <Image className="max-w-[50%]" src={image} alt={alt} />
      <p className="text-green150 text-2xl">{name}</p>
    </Link>
  );
};

CategoriesIcon.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CategoriesIcon;