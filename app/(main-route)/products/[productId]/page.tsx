"use client";

import ProductLists, { products } from "@/components/productList/ProductLists";
import { addToCart } from "@/store/cart";
import { useAppDispatch } from "@/store/hooks";
import { getProductCheckout } from "@/store/productCheckout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Rating from "./(components)/rating";
import ReviewList from "./(components)/productReviewList";
import OverallRating from "./(components)/overallRating";

interface Iparams {
  productId: string;
}

const ProductId = ({ params }: { params: Iparams }) => {
  const [productAmt, setProductAmt] = useState(1);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const productItem = products.find(
    (product) => product.id.toLocaleString() === params.productId
  );

  const handleAddToCart = useCallback(() => {
    if (productItem) {
      const { id, name, image, price } = productItem;
      const productToAdd = {
        productId: id.toLocaleString(),
        productName: name,
        productImg: image,
        amount: productAmt,
        price: price,
      };
      console.log(productToAdd);

      dispatch(addToCart(productToAdd));
      toast.success("Item added to cart");
    }
  }, [dispatch, productAmt, productItem]);

  const handleCheckout = useCallback(() => {
    if (productItem) {
      const { id, name, image, price } = productItem;
      const productToAdd = {
        productId: id.toLocaleString(),
        productName: name,
        productImg: image,
        amount: productAmt,
        price: price,
      };
      dispatch(getProductCheckout({ products: [productToAdd] }));
      router.push("/checkout");
    }
  }, [dispatch, productAmt, productItem, router]);

  if (!productItem) {
    return <p>Error</p>;
  }

  const { name, image, price } = productItem;

  return (
    <div className="mb-5">
      <div className="bg-white rounded-lg shadow-sm p-4 mt-5 ml-0 md:ml-5 flex flex-col lg:flex-row pt-20">
        {/* Product Image */}
        <div className="lg:w-1/3 lg:pr-4 mb-4 lg:mb-0">
          <Image
            src={image}
            alt="Product"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="mt-4 flex mb:justify-center gap-10">
            <button
              className="bg-redBrand/90 hover:bg-redBrand text-white text-sm font-semibold py-2 px-2 rounded-md mb:rounded mr-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded-md mb:rounded"
              onClick={handleCheckout}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-4">{name}</h1>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nemo, accusamus assumenda perspiciatis molestias illo dolore atque
            ab voluptate obcaecati labore, sapiente nesciunt nulla alias
            deserunt quisquam officiis nostrum? Eos officiis velit facere
            explicabo temporibus non architecto quasi ad quia nostrum iure quis
            aspernatur quo, laboriosam porro? Totam perspiciatis quos eaque
            perferendis assumenda quia a facilis, est iste nostrum!
          </p>
          <div className="mb-4 text-gray-600 font-bold">
            <span>Price:</span> ₦ {price.toLocaleString()}
          </div>
          <div className="mb-4">
            <span className="text-gray-600">Availability:</span> In stock
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              min={1}
              id="quantity"
              className="w-16 border border-gray-300 rounded-md px-2 py-1 ml-2"
              value={productAmt}
              onChange={(e) => setProductAmt(parseInt(e.target.value, 10))}
            />
          </div>
          <OverallRating />
        </div>
      </div>
      <div className="ml-0 md:ml-5 mt-3">
        <ReviewList />
        <Rating productId={productItem.id.toLocaleString()} />
      </div>
      <ProductLists heading="Related Products" />
    </div>
  );
};

export default ProductId;
