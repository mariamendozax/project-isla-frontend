import { textos } from "../data/data";

function PickupMap({ lang }) {
  const address =
    "México Lindo y que rico Isla Mujeres. Av Juárez 30, Centro - Supmza. 001, 77400 Isla Mujeres, Q.R.";

  const query = encodeURIComponent(address);
  const t = textos[lang];

  return (
    <div className="pickup-map">
      <iframe
        className="pickup-map__frame"
        title="Ubicación del negocio"
        src={`https://www.google.com/maps?q=${query}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        className="pickup-map__link"
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noreferrer"
      >
        {t.ubi}📍
      </a>
    </div>
  );
}

export default PickupMap;
