import { useContext } from "react";
import CartContext from "../../cartContext";
import products, { Product } from "../shop/products";
import CartProduct from "./cartProduct";
export function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {products.map((product) =>
        cartItems[product.id] > 0 ? <CartProduct product={product} /> : null
      )}
    </div>
  );
}
