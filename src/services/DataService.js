import { useNavigate } from "react-router-dom";

function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userId = JSON.parse(sessionStorage.getItem("cbid"));

  return { token: token, userId: userId };
}

export async function getUser() {
  console.log("get user called");
  const browserData = getSession();
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${browserData.userId}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const browserData = getSession();

  console.log("fetching orders");
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.userId}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  const browserData = getSession();

  const order = {
    cartList: cartList,
    amount_paid: total,
    user: {
      name: user.name,
      email: user.email,
      id: browserData.userId,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();
  return data;
}
