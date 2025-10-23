import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollToTop } from "./componenets/ScrollToTop";
import { FilterProvider } from "./context";
import { ToastContainer, toast } from "react-toastify";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer />
          <App />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
