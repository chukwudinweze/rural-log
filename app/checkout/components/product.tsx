import { Product } from "@/store/productCheckout";
import Image from "next/image";
import React from "react";

const Product: React.FC<Product> = ({
  amount,
  price,
  productImg,
  productName,
}) => {
  return (
    <>
      <hr className="my-2" />
      <div className="flex gap-2">
        <Image src={productImg} height={100} width={100} alt="product" />
        <p>
          {productName}
          <span className=" font-bold"> x{amount}</span>
        </p>
        <p className="ml-auto">₦{price}</p>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Product;
