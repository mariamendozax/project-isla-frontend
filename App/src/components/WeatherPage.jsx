import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icono, capitalizar } from "../utils/weather";
import { textos } from "../data/data";
import { FORECAST_DAYS_PER_PAGE } from "../utils/constants.js";

function WeatherPage({ forecast, isLoading, error, lang }) {
  const [visibles, setVisibles] = useState(FORECAST_DAYS_PER_PAGE);
  const navigate = useNavigate();
  const t = textos[lang];

  const hayDatos = forecast.length > 0;

  return (
    <section className="weather">
      <h1 className="weather__title">{t.weatherTitle}</h1>
      {isLoading && !hayDatos && (
        <div className="preloader" role="status" aria-label={t.loading} />
      )}

      {error && (
        <p className="weather__msg" role="alert">
          {t.weatherMsg}
        </p>
      )}

      {!isLoading && !error && !hayDatos && (
        <p className="weather__msg">{t.notFound}</p>
      )}

      {hayDatos && (
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
      )}

      <div className="weather__actions">
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
            onClick={() => setVisibles((v) => v + FORECAST_DAYS_PER_PAGE)}
          >
            {t.show}
          </button>
        )}
      </div>
    </section>
  );
}

export default WeatherPage;
