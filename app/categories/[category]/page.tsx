"use client";

import ProductLists from "@/components/productList/ProductLists";
import useRoutes from "@/hooks/useRoutes";

interface Iparams {
  category: string;
}
const Category = ({ params }: { params: Iparams }) => {
  const routes = useRoutes();
  console.log(routes);
  console.log(params.category);

  const route = routes.find((route) => route.category === params.category);
  if (!route) {
    return <p>hhhhhhhh fejhek eheij</p>;
  }
  const { label } = route;
  return (
    <section>
      <ProductLists heading={label} />
    </section>
  );
};

export default Category;
