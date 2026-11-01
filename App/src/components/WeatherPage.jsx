import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icono, capitalizar } from "../utils/weather";
import { textos } from "../data/data";

function WeatherPage({ forecast, isLoading, error, lang }) {
  const [visibles, setVisibles] = useState(3);
  const navigate = useNavigate();
  const t = textos[lang];

  if (error) {
    return (
      <p className="weather__msg">
        Lo sentimos, algo ha salido mal durante la solicitud. Es posible que
        haya un problema de conexión o que el servidor no funcione. Por favor,
        inténtalo más tarde
      </p>
    );
  }

  if (isLoading && forecast.length === 0) {
    return <div className="preloader" />;
  }

  if (forecast.length === 0) {
    return <p className="weather__msg">No se ha encontrado nada</p>;
  }

  return (
    <section className="weather">
      <ul className="weather__grid">
        {forecast.slice(0, visibles).map((dia) => (
          <li key={dia.fecha} className="weather__card">
            <span className="weather__icon">{icono(dia.code)}</span>
            <p>
              {capitalizar(
                new Date(`${dia.fecha}T12:00`).toLocaleDateString(lang, {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                }),
              )}
            </p>
            <p>
              {dia.max}° / {dia.min}°
            </p>
            <p>💧 {dia.lluvia}%</p>
          </li>
        ))}
      </ul>
      <div className="cart__btn-section">
        <button
          className="cart__back-btn"
          type="button"
          onClick={() => navigate("/menu")}
        >
          {t.volver}
        </button>
        {visibles < forecast.length && (
          <button
            type="button"
            className="weather__btn"
            onClick={() => setVisibles((v) => v + 3)}
          >
            {t.show}
          </button>
        )}
      </div>
    </section>
  );
}

export default WeatherPage;
