import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import WeatherBar from "./WeatherBar.jsx";
import WeatherPage from "./WeatherPage.jsx";
import { getForecast } from "../utils/ThirdPartyApi";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [lang, setLang] = useState("es");

  const [forecast, setForecast] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("forecast")) ?? [];
    } catch {
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getForecast(21.23, -86.73)
      .then((days) => {
        setForecast(days);
        localStorage.setItem("forecast", JSON.stringify(days));
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
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
      <Route
        path="/clima"
        element={
          <WeatherPage
            forecast={forecast}
            isLoading={isLoading}
            error={error}
            lang={lang}
          />
        }
      />
    </Routes>
  );
}

export default App;
