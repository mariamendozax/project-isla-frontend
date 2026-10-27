const OPEN_HOUR = 9;
const CLOSE_HOUR = 17;

export function isOpen(now = new Date()) {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "America/Cancun",
    }).format(now),
  );
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}
