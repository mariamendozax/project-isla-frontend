import { Link } from "react-router-dom";
import { icono, capitalizar } from "../utils/weather";

function WeatherBar({ forecast, lang }) {
  if (!forecast.length) return null;

  const items = forecast.slice(0, 3).map((d, i) => {
    const dia =
      i === 0
        ? lang === "es"
          ? "Hoy"
          : "Today"
        : capitalizar(
            new Date(`${d.fecha}T12:00`).toLocaleDateString(lang, {
              weekday: "short",
            }),
          );
    return `${icono(d.code)} ${dia} ${d.max}°/${d.min}° · 💧${d.lluvia}%`;
  });

  const texto = items.join("   •   ");

  return (
    <Link to="/clima" className="weather-bar">
      <div className="weather-bar__track">
        <span>{texto}</span>
        <span aria-hidden="true">{texto}</span>
      </div>
    </Link>
  );
}

export default WeatherBar;
