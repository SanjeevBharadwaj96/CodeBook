import React from "react";
import { useTitle } from "../../customHooks/useTitle";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  useTitle("Orders");
  const { state } = useLocation();

  return (
    <main>
      {state.status ? (
        <OrderSuccess data={state.data} />
      ) : (
        <OrderFail data={state.data} />
      )}
    </main>
  );
};
