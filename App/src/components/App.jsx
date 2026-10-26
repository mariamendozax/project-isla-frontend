import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";

function App() {
  const [verMenu, setVerMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [lang, setLang] = useState("es");

  const handleAddItem = (item) => {
    setCartItems((prev) => [...prev, { ...item, cartId: crypto.randomUUID() }]);
  };

  const handleRemoveItem = (cartId) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const cantidadEnCarrito = cartItems.length;

  return (
    <Routes>
      <Route path="/" element={<Hero onEnter={() => navigate("/menu")} />} />
      <Route
        path="/menu"
        element={
          <Menu
            lang={lang}
            setLang={setLang}
            cantidadEnCarrito={cantidadEnCarrito}
            onAgregar={handleAddItem}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            lang={lang}
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
          />
        }
      />
      <Route
        path="/checkout"
        element={<Checkout lang={lang} cartItems={cartItems} />}
      />
    </Routes>
  );
}

export default App;
