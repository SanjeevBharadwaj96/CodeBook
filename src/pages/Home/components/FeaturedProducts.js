import { ProductCard } from "../../../componenets/ProductCard";

export const FeaturedProducts = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center dark:text-black mb-5 underkine underline">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </section>
  );
};
