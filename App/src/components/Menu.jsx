import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticuloMenu from "./ArticuloMenu";
import { textos, categorias } from "../data/Menu";

function Menu({ lang, setLang, cantidadEnCarrito, onAgregar }) {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState("todas");
  const [aviso, setAviso] = useState("");
  const t = textos[lang];

  return (
    <main className="menu">
      <header className="menu__header" id="menu__header">
        <h1 className="menu__title">{t.titulo}</h1>
        <button
          className="hero__lang"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </header>

      <nav className="menu__categorias" aria-label={t.categoriasLabel}>
        {categorias.map((c) => (
          <a className="menu__categoria-link" key={c.id} href={`#cat-${c.id}`}>
            {c.nombre[lang]}
          </a>
        ))}
      </nav>

      <section className="menu__articles" aria-label={t.articulosLabel}>
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            id={`cat-${categoria.id}`}
            className="menu__category"
          >
            <h2 className="menu__category-title">{categoria.nombre[lang]}</h2>
            {categoria.articulos.map((articulo) => (
              <ArticuloMenu
                key={articulo.id}
                articulo={articulo}
                lang={lang}
                textoAgregar={t.agregar}
                onAgregar={onAgregar}
                onFaltan={setAviso}
              />
            ))}
          </div>
        ))}
      </section>
      <footer className="menu__footer">
        <p className="menu__cart" aria-live="polite">
          {t.carrito} {cantidadEnCarrito}{" "}
          {cantidadEnCarrito === 1 ? t.articulo : t.articulos}
        </p>
        <button
          className="cart__menu-btn"
          onClick={() => navigate("/cart")}
          aria-label={t.verCarrito}
        >
          <span className="button-text">{t.siguiente}</span>🛒
        </button>
      </footer>

      {aviso && (
        <div
          className="modal"
          role="alertdialog"
          aria-modal="true"
          onClick={() => setAviso("")}
        >
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <p>{aviso}</p>
            <button
              className="menu__btn"
              type="button"
              onClick={() => setAviso("")}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Menu;
