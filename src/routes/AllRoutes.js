import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductsPage } from "../pages/Products/ProductsPage";
import { ProductDetail } from "../pages/ProductDetail";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CartPage } from "../pages/Cart/CartPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { OrderPage } from "../pages/Order/OrderPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<PageNotFound />} />
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
        <Route
          path="/order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};
