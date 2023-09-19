"use client";

import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Product from "./components/product";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getProductCheckout } from "@/store/productCheckout";
import { clearCart } from "@/store/cart";

const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  const router = useRouter();
  const dispatch = useDispatch();

  if (products.length < 1) {
    return <p>No products to show</p>;
  }

  const handleCheckout = () => {
    dispatch(getProductCheckout({ products: products }));

    router.push("/checkout");

    dispatch(clearCart());
  };

  const handleClearCat = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-full md:w-[80%] mx-auto bg-gray-50 p-4 my-4 rounded-md">
      <h2 className="font-bold mb-2">Cart{`${products.length} prodcts.`}</h2>
      {products.map((product) => (
        <Product key={product.productId} {...product} />
      ))}
      <div className="flex justify-between gap-10">
        <button
          onClick={handleCheckout}
          className="bg-green-700 px-4 py-1 w-[80%] text-white rounded-md mt-5 "
        >
          Proceed to Checkout
        </button>
        <button
          onClick={handleClearCat}
          className="bg-redBrand px-4 py-1 w-[80%] text-white rounded-md mt-5 "
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
