import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <span className="secondary-content">
        <button className="material-icons btn" onClick={handleBasketShow}>
          close
        </button>
      </span>
      <li className="collection-item active">Корзина</li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            changeQuantity={changeQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn-small">Оформить заказ</button>
      </li>
    </ul>
  );
}

export { BasketList };
