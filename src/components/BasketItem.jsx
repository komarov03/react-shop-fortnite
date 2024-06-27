function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} руб.
      <span className="secondary-content">
        <span>
          <i className="material-icons" onClick={() => changeQuantity(id, "+")}>
            add
          </i>
          <i className="material-icons" onClick={() => changeQuantity(id, "-")}>
            remove
          </i>
        </span>
        <i
          className="material-icons basket-close"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
