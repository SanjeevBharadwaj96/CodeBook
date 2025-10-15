import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductsPage } from "../pages/Products/ProductsPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
};
