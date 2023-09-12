import { ShoppingBasket } from "lucide-react";
const Cart = () => {
  return (
    <div className="relative ">
      <div className="rounded-full bg-redBrand w-4 h-4 absolute z-50 right-0 text-white text-xs flex items-center justify-center font-bold">
        3
      </div>
      <ShoppingBasket size={30} className="hidden md:block cursor-pointer" />
      <ShoppingBasket size={25} className="block md:hidden cursor-pointer" />
    </div>
  );
};

export default Cart;
