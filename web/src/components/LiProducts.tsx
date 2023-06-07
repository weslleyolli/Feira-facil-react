import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import React from 'react';

const LiProducts = (props: any) => {
  return (
    <li className="inline-block mx-14 mt-10">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image
            src={props.photo}
            alt={props.description}
            width={80} 
            height={80}
            className="object-cover rounded cursor-pointer"
          />
        </div>

        <div className="text-center">
          <h3 id="preco-com-desconto" className="text-teal-500 font-medium text-lg">
            {props.priceProduct}
          </h3>
          <span className="desconto-1 bg-teal-500 text-white font-medium text-xs rounded">
            {props.spanProduct}
          </span>
          <span className="preco-sem-desconto text-teal-500 font-medium text-sm">
            {props.spanProduct2}
          </span>
          <h5 className="text-gray-600 font-light text-base">{props.nameProduct}</h5>
          <p className="text-gray-600 font-light text-base">{props.kgProduct || 'Por kg'}</p>
        </div>
      </div>
    </li>
  );
};

export default LiProducts;
