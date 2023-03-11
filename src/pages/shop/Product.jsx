import { useContext } from "react";
import CartContext from "../../cartContext";

export default function Product({ product }) {
  const { id, name, description, price, image } = product;

  const { cartItems } = useContext(CartContext);

  const { addToCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <button onClick={() => addToCart(id)} className="product-cart">
        Add to cart
        {cartItems[id] > 0 ? <span>({cartItems[id]})</span> : null}
      </button>
      <button onClick={() => removeFromCart(id)} className="product-cart">
        Remove from cart
      </button>
    </div>
  );
}
