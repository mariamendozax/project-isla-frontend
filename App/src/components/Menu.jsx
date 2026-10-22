import { useState } from "react";
import ArticuloMenu from "./ArticuloMenu";
import { textos, categorias } from "../data/Menu";

function Menu() {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);
  const [categoria, setCategoria] = useState("todas");
  const [lang, setLang] = useState("es");
  const t = textos[lang];

  function agregarAlCarrito() {
    setCantidadEnCarrito((cantidad) => cantidad + 1);
  }

  return (
    <main className="menu">
      <header className="menu__header">
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
                onAgregar={agregarAlCarrito}
              />
            ))}
          </div>
        ))}
      </section>

      <p className="menu__cart" aria-live="polite">
        {t.carrito} {cantidadEnCarrito}{" "}
        {cantidadEnCarrito === 1 ? t.articulo : t.articulos}
      </p>
    </main>
  );
}

export default Menu;
