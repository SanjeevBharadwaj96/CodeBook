import { useTitle } from "../../customHooks/useTitle";
import { useCart } from "../../context/CartContext";
import { CartList } from "./components/CartList";
import { cartEmpty } from "./components/cartEmpty";

export const CartPage = () => {
  useTitle("Cart");
  const { cartList } = useCart();

  return <main>{cartList.length ? <CartList /> : <cartEmpty />}</main>;
};
