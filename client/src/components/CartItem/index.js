import { useStoreContext } from "../../utils/GlobalState.jsx";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions.js";
import { idbPromise } from "../../utils/helpers.js";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row cart-item">
      <div className="cart-item-image">
        <img
          src={`/images/${item.imgLink}`}
          alt=""
        />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">${item.price}</div>
        <div className="cart-item-quantity">
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
