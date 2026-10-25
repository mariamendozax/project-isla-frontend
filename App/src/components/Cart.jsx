function Cart({ cartItems, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.precio, 0);

  if (cartItems.length === 0) {
    return <p>Tu carrito está vacío 🌮</p>;
  }

  return (
    <section className="cart">
      <ul className="cart__list">
        {cartItems.map((item) => (
          <li key={item.cartId}>
            <span>{item.nombre}</span>
            <span>${item.precio}</span>
            <button onClick={() => onRemoveItem(item.cartId)}>Quitar</button>
          </li>
        ))}
      </ul>
      <p className="cart__total">Total: ${total}</p>
    </section>
  );
}

export default Cart;
