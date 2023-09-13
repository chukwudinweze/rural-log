import Image from "next/image";
import ProductItem from "./ProductItem";

export const products = [
  { id: 1, name: "Fresh Farm Eggs", image: "/images/image1.png", price: 100 },
  { id: 2, name: "Brush Cutter", image: "/images/image2.png", price: 55 },
  {
    id: 3,
    name: "Cabrio Duo Fungicide",
    image: "/images/image3.png",
    price: 250,
  },
  {
    id: 4,
    name: "Natsoil Organic Fertilizer- 35kg",
    image: "/images/image4.png",
    price: 900,
  },
  { id: 5, name: "beans", image: "/images/image5.png", price: 400 },
  { id: 6, name: "beans", image: "/images/image1.png", price: 2000 },
  { id: 7, name: "beans", image: "/images/image2.png", price: 4500 },
  { id: 8, name: "beans", image: "/images/image3.png", price: 30000 },
];

interface ProductListProps {
  heading: string;
}
const ProductLists: React.FC<ProductListProps> = ({ heading }) => {
  return (
    <section className="p-6 pt-8">
      <h1 className="text-lg font-semibold pb-5">{heading}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductLists;
