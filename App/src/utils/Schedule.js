import { OPEN_HOUR, CLOSE_HOUR, DAY_OFF } from "./constants.js";

export function isOpen(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
    timeZone: "America/Cancun",
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday").value;
  const hour = Number(parts.find((p) => p.type === "hour").value);

  if (weekday === DAY_OFF) return false;
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}
