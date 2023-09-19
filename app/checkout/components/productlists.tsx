import { useAppSelector } from "@/store/hooks";
import CheckoutSummary from "./checkoutSummary";
import Product from "./product";

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

      <div className="flex gap-2">
        <input type="checkbox" name="terms" id="terms" required />
        <p className="text-xs ">
          I have read and agree to the terms and conditions
        </p>
      </div>
      <button className="bg-green-700 px-4 py-1 w-full text-white rounded-md mt-5">
        Place Order
      </button>
    </div>
  );
};

export default Productlists;
