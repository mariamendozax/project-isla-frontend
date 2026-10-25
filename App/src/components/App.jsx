import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";

function App() {
  const [verMenu, setVerMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (item) => {
    setCartItems((prev) => [...prev, { ...item, cartId: crypto.randomUUID() }]);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cantidadEnCarrito = cartItems.length;

  return (
    <Routes>
      <Route
        path="/"
        element={
          !verMenu ? (
            <Hero onEnter={() => setVerMenu(true)} />
          ) : (
            <Menu
              cantidadEnCarrito={cantidadEnCarrito}
              onAgregar={handleAddItem}
            />
          )
        }
      />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />}
      />
    </Routes>
  );
}

export default App;
