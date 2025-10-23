import { useTitle } from "../../customHooks/useTitle";
import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export const HomePage = () => {
  useTitle("Home");

  return (
    <main>
      <div>
        <Hero></Hero>
        <FeaturedProducts></FeaturedProducts>
        <Testimonials></Testimonials>
        <Faq></Faq>
      </div>
    </main>
  );
};
