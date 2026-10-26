import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";

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
      <Route
        path="/menu"
        element={
          !verMenu ? (
            <Hero onEnter={() => setVerMenu(true)} />
          ) : (
            <Menu
              lang={lang}
              setLang={setLang}
              cantidadEnCarrito={cantidadEnCarrito}
              onAgregar={handleAddItem}
            />
          )
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
    </Routes>
  );
}

export default App;
