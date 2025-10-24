import { useEffect, useState } from "react";
import { useTitle } from "../../customHooks/useTitle";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";

export const DashboardPage = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userId = JSON.parse(sessionStorage.getItem("cbid"));

  console.log("fetchOrders");
  useEffect(() => {
    async function fetchOrders() {
      console.log("fetching orders");
      const response = await fetch(
        `http://localhost:8000/660/orders?user.id=${userId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data);
      console.log("orders--", orders);
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Dashboard
        </p>
      </section>
      <section>
        {orders?.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>
      <section>{orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};
