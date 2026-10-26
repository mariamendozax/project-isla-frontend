import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { textos } from "../data/Menu";
import PickupMap from "./PickupMap";

function Checkout({ lang, cartItems }) {
  const [modo, setModo] = useState("recoger");
  const [direccion, setDireccion] = useState("");
  const [coords, setCoords] = useState(null);
  const [errorUbicacion, setErrorUbicacion] = useState("");
  const navigate = useNavigate();
  const t = textos[lang];

  function usarUbicacion() {
    if (!navigator.geolocation) {
      setErrorUbicacion("Tu navegador no soporta ubicación");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setErrorUbicacion("");
      },
      (err) => {
        setErrorUbicacion(
          err.code === err.PERMISSION_DENIED
            ? "No diste permiso. Puedes escribir tu dirección."
            : "No pudimos obtener tu ubicación. Escribe tu dirección.",
        );
      },
    );
  }

  return (
    <section className="checkout">
      <div className="checkout__div">
        <label>
          <input
            type="radio"
            checked={modo === "recoger"}
            onChange={() => setModo("recoger")}
          />
          {t.pickup}
        </label>
        {modo === "recoger" && <PickupMap lang={lang} />}
        <label>
          <input
            type="radio"
            checked={modo === "entrega"}
            onChange={() => setModo("entrega")}
          />
          {t.delivery}
        </label>
        <button className="cart__btn" onClick={() => navigate("/cart")}>
          {t.goTo}
        </button>
        {modo === "entrega" && (
          <>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Calle, número, colonia"
            />
            <button type="button" onClick={usarUbicacion}>
              📍 {t.useUbi}
            </button>
            {coords && <p>{t.saveUbi}✅</p>}
            {errorUbicacion && <p>{t.errorUbi}</p>}
          </>
        )}
      </div>
    </section>
  );
}

export default Checkout;
