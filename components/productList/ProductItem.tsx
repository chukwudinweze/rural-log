"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  image,
  name,
  price,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <li className="bg-white border border-gray-200 p-4 rounded shadow-md">
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-48 object-cover mb-2 rounded-lg transition-transform hover:scale-105"
        />
        <h2 className="text-lg font-semibold truncate text-ellipsis overflow-hidden">
          {name}
        </h2>
        <p className="text-green-600 font-semibold">₦ {price}</p>
      </li>
    </Link>
  );
};

export default ProductItem;
