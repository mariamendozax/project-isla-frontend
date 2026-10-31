import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import WeatherBar from "./WeatherBar.jsx";
import { getForecast } from "../utils/ThirdPartyApi";

function App() {
  const [verMenu, setVerMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [lang, setLang] = useState("es");

  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getForecast(21.23, -86.73)
      .then((data) => setForecast(data.daily))
      .catch((err) => console.error(err));
  }, []);

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
          <>
            <WeatherBar forecast={forecast} lang={lang} />
            <Menu
              lang={lang}
              setLang={setLang}
              cantidadEnCarrito={cantidadEnCarrito}
              onAgregar={handleAddItem}
            />
          </>
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
        element={
          <Checkout lang={lang} setLang={setLang} cartItems={cartItems} />
        }
      />
    </Routes>
  );
}

export default App;
