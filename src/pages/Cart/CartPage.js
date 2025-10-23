import { useTitle } from "../../customHooks/useTitle";
import { useCart } from "../../context/CartContext";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";

export const CartPage = () => {
  useTitle("Cart");
  const { cartList } = useCart();

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
