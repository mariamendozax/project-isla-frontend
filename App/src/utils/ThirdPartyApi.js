const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export function getForecast(lat, lon) {
  const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America/Cancun`;

  return fetch(url).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}
