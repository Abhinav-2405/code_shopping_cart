import { createContext, useState } from "react";
import { products } from "./pages/shop/products.js";

const CartContext = createContext();

export function CartProvider({ children }) {
  function getDefaultItems() {
    let carts = [];
    for (let i = 1; i < products.length + 1; i++) {
      carts[i] = 0;
    }
    return carts;
  }

  const [cartItems, setCartItems] = useState(getDefaultItems());

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - 1)
    }));
  }

  console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
