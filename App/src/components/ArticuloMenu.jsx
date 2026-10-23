import { useState } from "react";

function ArticuloMenu({ articulo, lang, textoAgregar, onAgregar, onFaltan }) {
  const [elegidos, setElegidos] = useState({});
  const [errores, setErrores] = useState({});
  const extras = articulo.extras || [];

  function claveDe(extra) {
    return extra.ingredientes ? `${extra.id}-ingrediente` : extra.id;
  }

  function cambiarExtra(id, valor) {
    setElegidos((actuales) => ({ ...actuales, [id]: valor }));
  }

  function handleAgregar() {
    const faltantes = extras.filter(
      (extra) => extra.obligatorio && !elegidos[claveDe(extra)],
    );

    if (faltantes.length > 0) {
      setErrores(
        Object.fromEntries(faltantes.map((extra) => [claveDe(extra), true])),
      );
      onFaltan(
        lang === "es"
          ? "Elige una opción antes de añadir al carrito"
          : "Please choose an option before adding to cart",
      );
      return;
    }

    setErrores({});
    onAgregar({ articulo, extras: elegidos, precio: precioFinal });
  }

  const totalExtras = extras
    .filter((e) => elegidos[e.id])
    .reduce((suma, e) => suma + e.precio, 0);

  const precioFinal = articulo.precio + totalExtras;

  return (
    <article className="menu__article">
      {articulo.foto && (
        <img
          className="menu__image"
          src={articulo.foto}
          alt={articulo.nombre[lang]}
        />
      )}
      <div className="menu__details">
        <h3>{articulo.nombre[lang]}</h3>
        <p>{articulo.descripcion[lang]}</p>

        {extras.map((extra) => {
          const etiquetaPrecio = extra.precio > 0 ? ` (+$${extra.precio})` : "";

          return (
            <div key={extra.id} className="menu__extra">
              {extra.tipo === "opciones" ? (
                <label className="menu__extra-label">
                  {extra.nombre[lang]}
                  {etiquetaPrecio}
                  {extra.obligatorio && <span aria-hidden="true"> *</span>}
                  <select
                    className={`menu__extra-select
                    ${errores[extra.id] ? "menu__extra-select--error" : ""}`}
                    value={elegidos[extra.id] || ""}
                    onChange={(e) => cambiarExtra(extra.id, e.target.value)}
                  >
                    <option value="">
                      {extra.precio > 0
                        ? lang === "es"
                          ? "Sin extra"
                          : "None"
                        : lang === "es"
                          ? "Elige una opción"
                          : "Choose one"}
                    </option>
                    {extra.opciones.map((op) => (
                      <option key={op.id} value={op.id}>
                        {op.nombre[lang]}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                <label className="menu__extra-checkbox">
                  <input
                    type="checkbox"
                    checked={!!elegidos[extra.id]}
                    onChange={(e) => cambiarExtra(extra.id, e.target.checked)}
                  />
                  {extra.nombre[lang]}
                  {etiquetaPrecio}
                </label>
              )}

              {extra.ingredientes && (
                <label>
                  {lang === "es" ? "Ingrediente" : "Ingredient"}
                  <select
                    className={`menu__extra-select ${
                      errores[`${extra.id}-ingrediente`]
                        ? "menu__extra-select--error"
                        : ""
                    }`}
                    value={elegidos[`${extra.id}-ingrediente`] || ""}
                    onChange={(e) =>
                      cambiarExtra(`${extra.id}-ingrediente`, e.target.value)
                    }
                  >
                    <option value="">
                      {lang === "es" ? "Elige una opción" : "Choose one"}
                    </option>
                    {extra.ingredientes.map((ing) => (
                      <option key={ing.id} value={ing.id}>
                        {ing.nombre[lang]}
                      </option>
                    ))}
                  </select>
                  {errores[extra.id] && (
                    <span className="menu__error">
                      {lang === "es" ? "Elige una opción" : "Please choose one"}
                    </span>
                  )}
                </label>
              )}
            </div>
          );
        })}
        <p className="menu__prices">${precioFinal} MXN</p>
        <button className="menu__btn" type="button" onClick={handleAgregar}>
          {textoAgregar}
        </button>
      </div>
    </article>
  );
}

export default ArticuloMenu;
