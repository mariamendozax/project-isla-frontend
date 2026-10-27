const OPEN_HOUR = 9; // ajusta a su horario real
const CLOSE_HOUR = 17; // 6 pm

export function isOpen(now = new Date()) {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "America/Cancun", // así no depende de la zona del celular del cliente
    }).format(now),
  );
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}
