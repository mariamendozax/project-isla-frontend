import { Link } from "react-router-dom";

function icono(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 82) return "🌦️";
  return "⛈️";
}

function WeatherBar({ forecast, lang }) {
  if (!forecast) return null;

  const items = forecast.time.slice(0, 3).map((fecha, i) => {
    const dia =
      i === 0
        ? lang === "es"
          ? "Hoy"
          : "Today"
        : new Date(`${fecha}T12:00`).toLocaleDateString(lang, {
            weekday: "short",
          });
    const max = Math.round(forecast.temperature_2m_max[i]);
    const min = Math.round(forecast.temperature_2m_min[i]);
    const lluvia = forecast.precipitation_probability_max[i];
    return `${icono(forecast.weathercode[i])} ${dia} ${max}°/${min}° · 💧${lluvia}%`;
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
