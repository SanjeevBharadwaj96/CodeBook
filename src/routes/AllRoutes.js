import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductsPage } from "../pages/Products/ProductsPage";
import { ProductDetail } from "../pages/ProductDetail";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CartPage } from "../pages/Cart/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} end />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};
