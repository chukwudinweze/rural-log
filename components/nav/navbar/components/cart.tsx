import { ShoppingBasket } from "lucide-react";
const Cart = () => {
  return (
    <div>
      <ShoppingBasket size={30} className="hidden md:block cursor-pointer" />
      <ShoppingBasket size={25} className="block md:hidden cursor-pointer" />
    </div>
  );
};

export default Cart;
