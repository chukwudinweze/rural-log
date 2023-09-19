"use client";

import { useAppSelector } from "@/store/hooks";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  return (
    <Link href="/cart" className="relative ">
      <div className="rounded-full bg-redBrand w-4 h-4 absolute z-50 right-0 text-white text-xs flex items-center justify-center font-bold">
        {products.length}
      </div>
      <ShoppingBasket size={30} className="hidden md:block cursor-pointer" />
      <ShoppingBasket size={25} className="block md:hidden cursor-pointer" />
    </Link>
  );
};

export default Cart;
