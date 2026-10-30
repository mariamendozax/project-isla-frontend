import { useNavigate } from "react-router-dom";
import barbacoa from "../../images/barbacoa.png";
import carnitas from "../../images/carnitas.png";
import chilaquiles from "../../images/chilaquiles.png";
import desayuno from "../../images/desayuno.png";
import guac from "../../images/guac.png";
import quesabirria from "../../images/quesabirria.png";
import veggie from "../../images/veggie.png";
import flautas from "../../images/flautas.png";
import mix from "../../images/mix.png";
import logo from "../../images/logo.png";

const fotos = [
  { src: barbacoa, alt: "Tacos de barbacoa" },
  { src: carnitas, alt: "Tacos de carnitas" },
  { src: chilaquiles, alt: "Chilaquiles con huevo" },
  { src: desayuno, alt: "Hot cakes con huevo y tocino" },
  { src: guac, alt: "Guacamole" },
  { src: quesabirria, alt: "Quesabirrias" },
  { src: veggie, alt: "Tacos vegetarianos" },
  { src: flautas, alt: "Flautas de barbacoa" },
  { src: mix, alt: "Desayuno, y tacos" },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__grid">
        {fotos.map((foto, i) => (
          <img
            key={foto.alt}
            src={foto.src}
            alt={foto.alt}
            className="hero__foto"
            style={{ "--i": i }}
          />
        ))}
      </div>
      <div className="hero__container">
        <img
          src={logo}
          alt="Tacos México Lindo y Qué Rico"
          className="hero__logo"
        />
        <button className="hero__btn" onClick={() => navigate("/menu")}>
          MENU
        </button>
      </div>
    </section>
  );
}
