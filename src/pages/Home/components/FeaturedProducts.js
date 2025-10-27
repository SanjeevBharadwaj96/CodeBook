import { useEffect, useState } from "react";
import { ProductCard } from "../../../componenets/ProductCard";
import { getFeaturedList } from "../../../services/ProductService";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getFeaturedList();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center dark:text-black mb-5 underkine underline">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
