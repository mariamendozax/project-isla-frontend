const BASE_URL = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}`;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function sendOrder(text) {
  return fetch(`${BASE_URL}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text }),
  }).then(checkResponse);
}
