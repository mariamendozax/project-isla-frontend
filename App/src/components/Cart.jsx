import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isOpen } from "../utils/Schedule";
import { textos } from "../data/Menu";

function Cart({ lang, cartItems, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);
  const navigate = useNavigate();
  const t = textos[lang];
  const [open, setOpen] = useState(isOpen());
  const [showClosedModal, setShowClosedModal] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setOpen(isOpen()), 60000);
    return () => clearInterval(id);
  }, []);

  function handleNext() {
    if (!isOpen()) {
      setShowClosedModal(true);
      setOpen(false);
      return;
    }
    navigate("/checkout");
  }

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

  const groupedItems = Object.values(
    cartItems.reduce((acc, item) => {
      const extras = item.extras ?? [];
      const key = `${item.nombre}-${extras
        .map((e) => e.nombre)
        .sort()
        .join(",")}`;

      if (!acc[key]) {
        acc[key] = {
          ...item,
          key,
          cartIds: [],
          unitPrice:
            item.precioBase + extras.reduce((sum, e) => sum + e.precio, 0),
        };
      }
      acc[key].cartIds.push(item.cartId);
      return acc;
    }, {}),
  );

  return (
    <section className="cart">
      <div className="cart__container">
        <h1 className="cart__title">{t.carrito}</h1>
        <ul className="cart__list">
          {groupedItems.map((item) => {
            const quantity = item.cartIds.length;

            return (
              <li className="cart__item" key={item.key}>
                <div className="cart__item-main">
                  <span className="cart__item-name">
                    {quantity > 1 && `${quantity}x `}
                    {item.nombre}
                  </span>
                  <span className="cart__item-price">
                    ${item.unitPrice * quantity}
                  </span>
                  <button
                    className="cart__remove-btn"
                    type="button"
                    onClick={() => onRemoveItem(item.cartIds[quantity - 1])}
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
            );
          })}
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
          {showClosedModal && (
            <div className="modal" onClick={() => setShowClosedModal(false)}>
              <div
                className="modal__box"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                <p>{t.closedMsg}</p>
                <button
                  className="menu__btn"
                  onClick={() => setShowClosedModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          <button
            className={`cart__checkout ${!open ? "cart__checkout--closed" : ""}`}
            onClick={handleNext}
            aria-disabled={!open}
          >
            {t.pedir}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
