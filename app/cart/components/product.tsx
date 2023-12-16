"use client";

import { addToCart, removeFromCart } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import { Product as ProductType } from "@/store/productCheckout";
import Image from "next/image";

const Product: React.FC<ProductType> = ({
  amount,
  price,
  productId,
  productImg,
  productName,
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ amount, price, productId, productImg, productName }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex border-y border-gray-200 py-4 gap-4">
      <Image src={productImg} height={100} width={100} alt={productName} />
      <div>
        <h3 className="font-bold text-xl">{productName}</h3>
        <p>₦{price}</p>
      </div>
      <div className="ml-auto flex items-center ">
        <div className="flex gap-3 items-center bg-gray-100 rounded-2xl">
          <button
            onClick={handleAddToCart}
            className="border rounded-full w-8 h-8 bg-redBrand text-white"
          >
            +
          </button>
          <p>{amount}</p>
          <button
            onClick={handleRemoveFromCart}
            className="border rounded-full w-8 h-8 bg-white hover:bg-redBrand"
          >
            —
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
