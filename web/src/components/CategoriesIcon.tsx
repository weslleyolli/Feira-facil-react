import Image from 'next/image';
import PropTypes from 'prop-types';

interface CategoriesIconProps {
  image: string;
  alt: string;
  name: string;
}

const CategoriesIcon: React.FC<CategoriesIconProps> = ({ image, alt, name }) => {
  return (
    <a href='' className="w-1/4 flex flex-col items-center justify-between p-5">
      <Image className="max-w-[50%]" src={image} alt={alt} />
      <p className="text-green150 text-2xl">{name}</p>
    </a>
  );
};

CategoriesIcon.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CategoriesIcon;