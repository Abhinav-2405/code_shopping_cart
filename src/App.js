import "./styles.css";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import { CartProvider } from "./cartContext";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <CartProvider>
                <Shop />
              </CartProvider>
            }
          />

          <Route
            path="/cart"
            element={
              <CartProvider>
                <Cart />
              </CartProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
