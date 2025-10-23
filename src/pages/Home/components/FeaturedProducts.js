import { useEffect, useState } from "react";
import { ProductCard } from "../../../componenets/ProductCard";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const urlForFetch = "http://localhost:8000/featured_products";

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(urlForFetch);
      const data = await response.json();
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
