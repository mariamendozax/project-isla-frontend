import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { textos } from "../data/data";
import PickupMap from "./PickupMap";
import Modal from "./Modal";

const WHATSAPP_NUMBER = "52XXXXXXXXXX";

function Checkout({ lang, setLang, cartItems }) {
  const [modo, setModo] = useState("recoger");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [coords, setCoords] = useState(null);
  const [errorUbicacion, setErrorUbicacion] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [aviso, setAviso] = useState("");
  const [pago, setPago] = useState("efectivo");
  const t = textos[lang];

  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  const nombreValido = nombre.trim().length >= 3;
  const faltanDatos =
    !nombreValido || (modo === "entrega" && !direccion.trim() && !coords);
  const pagoFinal = modo === "entrega" ? "efectivo" : pago;

  const ZONA_ENTREGA = {
    latMax: 21.259818192336063, // norte
    latMin: 21.253412270929463, // sur
    lngMin: -86.75144213545913, // oeste
    lngMax: -86.74435614788142, // este
  };

  function dentroDeZona({ lat, lng }) {
    return (
      lat <= ZONA_ENTREGA.latMax &&
      lat >= ZONA_ENTREGA.latMin &&
      lng >= ZONA_ENTREGA.lngMin &&
      lng <= ZONA_ENTREGA.lngMax
    );
  }

  function buildMessage() {
    const grupos = Object.values(
      cartItems.reduce((acc, item) => {
        const extras = item.extras.map((e) => e.nombre ?? e);
        const key = `${item.nombre}|${[...extras].sort().join(",")}`;
        if (!acc[key]) {
          acc[key] = {
            nombre: item.nombre,
            extras,
            precio: item.precio,
            cantidad: 0,
          };
        }
        acc[key].cantidad += 1;
        return acc;
      }, {}),
    );

    const lines = grupos.map((g) => {
      const extras = g.extras.length ? `\n   ↳ ${g.extras.join(", ")}` : "";
      return `• ${g.cantidad}x ${g.nombre} - $${g.precio * g.cantidad}${extras}`;
    });

    return [
      "🌮 *NUEVO PEDIDO*",
      "",
      ...lines,
      "",
      `*Total: $${total} MXN*`,
      `Tipo: ${modo === "entrega" ? "Entrega" : "Recoger"}`,
      modo === "entrega" ? `Dirección: ${direccion}` : "",
      modo === "entrega" && coords
        ? `Ubicación: https://maps.google.com/?q=${coords.lat},${coords.lng}`
        : "",
      `Nombre: ${nombre.trim()}`,
      `Pago: ${pagoFinal === "tarjeta" ? "Tarjeta" : "Efectivo"}`,
    ]
      .filter((line) => line !== "" || true)
      .join("\n");
  }

  function handleSendWhatsApp() {
    if (!nombreValido) {
      setAviso(t.nameError);
      return;
    }
    if (modo === "entrega") {
      if (!direccion.trim() && !coords) {
        setAviso(t.addressError);
        return;
      }
      if (coords && !dentroDeZona(coords)) {
        setAviso(t.outOfZone);
        return;
      }
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
        setCoords(null);
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
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={t.name}
          minLength={3}
          required
        />
        {nombre.length > 0 && !nombreValido && (
          <p className="checkout__error">{t.nameError}</p>
        )}
        <label>
          <input
            type="radio"
            checked={modo === "recoger"}
            onChange={() => setModo("recoger")}
          />
          {t.pickup}
        </label>
        {modo === "recoger" && (
          <>
            <PickupMap lang={lang} />
            <label>
              <input
                type="radio"
                checked={pago === "efectivo"}
                onChange={() => setPago("efectivo")}
              />
              {t.cash}
            </label>
            <label>
              <input
                type="radio"
                checked={pago === "tarjeta"}
                onChange={() => setPago("tarjeta")}
              />
              {t.card}
            </label>
          </>
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lang={lang}
          setLang={setLang}
        />
        <label>
          <input
            type="radio"
            checked={modo === "entrega"}
            onChange={() => setModo("entrega")}
          />
          {t.delivery}
        </label>
        {modo === "entrega" && (
          <>
            <p>{t.cashOnly}</p>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Calle, número, colonia"
            />
            <button className="cart__btn" type="button" onClick={usarUbicacion}>
              📍 {t.useUbi}
            </button>
            {coords && <p>{t.saveUbi}✅</p>}
            {errorUbicacion && <p>{errorUbicacion}</p>}
          </>
        )}

        <button className="cart__btn-sent" onClick={handleSendWhatsApp}>
          {t.sendWa}
        </button>
        <button className="cart__btn" onClick={() => navigate("/cart")}>
          {t.goTo}
        </button>
      </div>

      {aviso && (
        <div
          className="modal"
          role="alertdialog"
          aria-modal="true"
          onClick={() => setAviso("")}
        >
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <p>{aviso}</p>
            <button
              className="menu__btn"
              type="button"
              onClick={() => setAviso("")}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Checkout;
