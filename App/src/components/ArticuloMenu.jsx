import { useState } from "react";

function ArticuloMenu({ articulo, lang, textoAgregar, onAgregar }) {
  const [elegidos, setElegidos] = useState({});
  const extras = articulo.extras || [];

  function cambiarExtra(id, valor) {
    setElegidos((actuales) => ({ ...actuales, [id]: valor }));
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
                <label>
                  {extra.nombre[lang]}
                  {etiquetaPrecio}
                  <select
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
                <label>
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
                </label>
              )}
            </div>
          );
        })}
        <p className="menu__prices">${precioFinal} MXN</p>
        <button
          className="menu__btn"
          type="button"
          onClick={() =>
            onAgregar({ articulo, extras: elegidos, precio: precioFinal })
          }
        >
          {textoAgregar}
        </button>
      </div>
    </article>
  );
}

export default ArticuloMenu;
