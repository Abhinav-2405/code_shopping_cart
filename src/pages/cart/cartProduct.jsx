import { useContext } from "react";
import CartContext from "../../cartContext";

export default function CartProduct({ product }) {
  const { id, name, price, image } = product;

  const { cartItems } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>${price * cartItems[product.id]}</span>
      <div className="counter-button">
        <button onClick={() => addToCart(id)}>+</button>
        {cartItems[id] > 0 ? (
          <span className="count">{cartItems[id]}</span>
        ) : null}
        <button onClick={() => removeFromCart(id)}>-</button>
      </div>
    </div>
  );
}
