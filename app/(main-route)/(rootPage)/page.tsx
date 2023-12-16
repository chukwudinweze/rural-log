import ProductLists from "@/components/productList/ProductLists";
import Slideshow from "./components/Slideshow";

const HomePage = () => {
  return (
    <div className="">
      <Slideshow />
      <ProductLists heading="Today’s Popular Picks" />
      <ProductLists heading="Trending" />
      <ProductLists heading="Recommended For You" />
    </div>
  );
};

export default HomePage;
