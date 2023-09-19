"use cleint";
import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

const useSumTotal = () => {
  const products = useAppSelector((state) => state.productCheckout.products);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      const subtotal = product.price * product.amount;
      return acc + subtotal;
    }, 0);
  }, [products]);

  return total.toLocaleString();
};

export default useSumTotal;
