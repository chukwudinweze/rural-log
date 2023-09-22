import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CheckoutSummary from "./checkoutSummary";
import Product from "./product";
import toast from "react-hot-toast";

const Productlists = () => {
  const products = useAppSelector((state) => state.productCheckout.products);

  return (
    <div className="flex-1 px-4">
      <h1 className="font-bold text-lg">Your Order</h1>

      {products &&
        products.map((product) => (
          <Product key={product.productId} {...product} />
        ))}

      <CheckoutSummary />
    </div>
  );
};

export default Productlists;
