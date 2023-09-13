import ProductLists, { products } from "@/components/productList/ProductLists";
import Image from "next/image";

interface Iparams {
  productId: string;
}
const Category = async ({ params }: { params: Iparams }) => {
  const productItem = products.find(
    (product) => product.id.toLocaleString() === params.productId
  );
  if (!productItem) {
    return;
  }
  const { id, name, image, price } = productItem;
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4 ml-5 flex flex-col lg:flex-row pt-20">
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
          <div className="mt-4 flex justify-center gap-10">
            <button className="bg-redBrand text-white text-sm font-semibold py-2 px-2 rounded mr-2">
              Add to Cart
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-4">{name}</h1>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            est eu magna hendrerit bibendum.
          </p>
          <div className="mb-4">
            <span className="text-gray-600">Price:</span> ${price}
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
              id="quantity"
              className="w-16 border border-gray-300 rounded-md px-2 py-1 ml-2"
              defaultValue="1"
            />
          </div>
        </div>
      </div>
      <ProductLists heading="Related Products" />
    </>
  );
};

export default Category;
