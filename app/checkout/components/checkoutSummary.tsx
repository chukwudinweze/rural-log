import useSumTotal from "@/hooks/useSumTotal";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";

const CheckoutSummary = () => {
  const products = useAppSelector(
    (state: RootState) => state.productCheckout.products
  );

  const total = useSumTotal();

  return (
    <div className="flex mb-10">
      <p>Total</p>
      <p className="ml-auto">₦{total && total}</p>
    </div>
  );
};

export default CheckoutSummary;
