import { products } from "./products.js";
import Product from "./Product.jsx";
// import Cart from "../cart/cart.jsx";

export function Shop() {
  return (
    <div className="shop-container">
      <h1 className="shop-title">My Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
}
