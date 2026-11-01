const BASE_URL = "https://api.open-meteo.com/v1/forecast";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getForecast(lat, lon) {
  const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America/Cancun`;

  return fetch(url)
    .then(checkResponse)
    .then(({ daily }) =>
      daily.time.map((fecha, i) => ({
        fecha,
        code: daily.weathercode[i],
        max: Math.round(daily.temperature_2m_max[i]),
        min: Math.round(daily.temperature_2m_min[i]),
        lluvia: daily.precipitation_probability_max[i],
      })),
    );
}
