// Clima
export const API_BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const ISLA_LAT = 21.23;
export const ISLA_LON = -86.73;
export const FORECAST_DAYS_PER_PAGE = 3;

// Horario
export const OPEN_HOUR = 9;
export const CLOSE_HOUR = 17;
export const DAY_OFF = "Mon";

// Pedidos
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
export const DELIVERY_ZONE = {
  latMax: 21.259818192336063, // norte
  latMin: 21.253412270929463, // sur
  lngMin: -86.75144213545913, // oeste
  lngMax: -86.74435614788142, // este
};

// Carrito
export const CART_REFRESH_MS = 60000;
