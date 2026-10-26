import { useNavigate } from "react-router-dom";
import { textos } from "../data/Menu";

function Cart({ lang, cartItems, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);
  const navigate = useNavigate();
  const t = textos[lang];

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <div className="cart__container">
          <h1 className="cart__title">{t.carrito}</h1>
          <p className="cart__empty">{t.cart}</p>
          <button
            className="cart__back-btn"
            type="button"
            onClick={() => navigate("/menu")}
          >
            {t.volver}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="cart__container">
        <h1 className="cart__title">{t.carrito}</h1>
        <ul className="cart__list">
          {cartItems.map((item) => (
            <li className="cart__item" key={item.cartId}>
              <div className="cart__item-main">
                <span className="cart__item-name">{item.nombre}</span>
                <span className="cart__item-price">${item.precioBase}</span>
                <button
                  className="cart__remove-btn"
                  type="button"
                  onClick={() => onRemoveItem(item.cartId)}
                >
                  {t.quitar}
                </button>
              </div>

              {item.extras?.length > 0 && (
                <ul className="cart__extras">
                  {item.extras.map((extra, index) => (
                    <li key={index}>
                      + {extra.nombre} ${extra.precio}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p className="cart__total">
          {t.total} <span>${total}</span>
        </p>
        <div className="cart__btn-section">
          <button
            className="cart__back-btn"
            type="button"
            onClick={() => navigate("/menu")}
          >
            {t.volver}
          </button>
          <button
            className="cart__checkout"
            onClick={() => navigate("/checkout")}
          >
            {t.pedir}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
