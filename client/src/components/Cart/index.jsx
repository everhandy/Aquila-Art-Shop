import React, { useEffect, useCallback, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { SiCarto } from "react-icons/si";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = ({ data }) => {
  const [state, dispatch] = useStoreContext();
  const buttonRef = useRef(null);

  const getCart = async () => {
    console.log('Getting cart...');
    const cart = await idbPromise('cart', 'get');
    console.log('Cart from idbPromise:', cart);

    dispatch({ type: ADD_MULTIPLE_TO_CART, products: cart });
  };

  useEffect(() => {
    async function fetchData() {
      if (state.cartOpen) {
        await getCart();
      }
    }

    fetchData();
  }, [state.cartOpen]);

  const [getCheckout, { data: checkoutData }] = useLazyQuery(QUERY_CHECKOUT);

  function calculateTotal() {
    if (!state || !state.cart || !Array.isArray(state.cart) || state.cart.length === 0) {
      return '0.00';
    }

    let sum = 0;
    state.cart.forEach((item) => {
      if (item && typeof item.price === 'number' && typeof item.purchaseQuantity === 'number') {
        sum += item.price * item.purchaseQuantity;
      }
    });
    return sum.toFixed(2);
}


  useEffect(() => {
    if (data && data.checkout) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    } else if (data && data.checkoutError) {
      console.error('Error during checkout:', data.checkoutError);
    }
  }, [data]);

  const submitCheckout = () => {
    if (!state || !state.cart || !Array.isArray(state.cart)) {
      console.error('Cart is empty');
      return;
    }
    getCheckout({
      variables: {
        products: state.cart.map((item) => ({
          _id: item._id,
          quantity: item.quantity,
        })),
      },
    });
  };

  return (
    <div>
      {!state.cartOpen && (
        <button
          ref={buttonRef}
          className="cart-closed"
          onClick={() => dispatch({ type: TOGGLE_CART })}
        >
          <SiCarto size={100} />
        </button>
      )}

      {state.cartOpen && (
        <div className="cart">
          <div className="close" onClick={() => dispatch({ type: TOGGLE_CART })}>
            [close]
          </div>
          <h2>Cart</h2>
          {state.cart && state.cart.length ? (
            <div>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}

              <div className="flex-row space-between">
                <strong>Total: ${calculateTotal()}</strong>

                {Auth.loggedIn() ? (
                  <button onClick={submitCheckout}>Checkout</button>
                ) : (
                  <span>(log in to check out)</span>
                )}
              </div>
            </div>
          ) : (
            <h5>
              No items in cart.
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
