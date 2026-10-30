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
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const t = textos[lang];

  function buildMessage() {
    const lines = cart.map(
      (item) =>
        `• ${item.quantity}x ${item.name} - $${item.price * item.quantity}`,
    );
    return [
      "🌮 NUEVO PEDIDO",
      ...lines,
      `Total: $${total} MXN`,
      `Tipo: ${deliveryType === "delivery" ? "Entrega" : "Recoger"}`,
      deliveryType === "delivery" ? `Dirección: ${address}` : "",
      `Nombre: ${name}`,
      `Tel: ${phone}`,
      "Pago: efectivo",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleConfirm() {
    if (!isOpen()) {
      setError(t.closedMsg);
      return;
    }
    setIsSending(true);
    setError("");
    sendOrder(buildMessage())
      .then(() => {
        setIsConfirmOpen(false);
        setIsSent(true);
        clearCart();
      })
      .catch(() => setError(t.orderError))
      .finally(() => setIsSending(false));
  }

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
