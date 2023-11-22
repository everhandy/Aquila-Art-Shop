import React, { useEffect, useRef } from 'react';
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

  console.log('Rendering Cart component');

  const getCart = async () => {
    console.log('Getting cart...');
    if (!state || !Array.isArray(state.cart)) {
      return;
    }

    const cart = await idbPromise('cart', 'get');
    console.log('Cart from idbPromise:', cart);

    const updatedCart = cart.map((cartItem) => {
      const product = state.cart.find((product) => product._id === cartItem._id);

      if (!product) {
        return null;
      }

      return {
        _id: product._id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        artist: product.artist,
        category: product.category,
        quantity: cartItem.purchaseQuantity,
      };
    });

    const filteredCart = updatedCart.filter((item) => item !== null);
    console.log('Filtered cart:', filteredCart);

    dispatch({ type: ADD_MULTIPLE_TO_CART, products: filteredCart });
  };

  const [getCheckout, { data: checkoutData }] = useLazyQuery(QUERY_CHECKOUT);

  function calculateTotal() {
    console.log('state:', state);
    if (!state || !state.cart || !Array.isArray(state.cart) || state.cart.length === 0) {
      return '0.00';
    }

    let sum = 0;
    state.cart.forEach((item) => {
      if (item && typeof item.price === 'number' && typeof item.purchaseQuantity === 'number') {
        sum += item.price * item.purchaseQuantity;
      }
    });
    console.log('state.cart:', state.cart);
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
      console.error('Cart is undefined or not an array');
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
