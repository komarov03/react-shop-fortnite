import { useContext } from "react";
import { ShopContext } from "./context";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
  } = props;

  const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext)

  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} руб.
      <span className="secondary-content">
        <span>
          <i className="material-icons" onClick={() => incQuantity(id)}>
            add
          </i>
          <i className="material-icons" onClick={() => decQuantity(id)}>
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
