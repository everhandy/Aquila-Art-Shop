import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import CartButton from '../CartButton';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = ({ data }) => {
  const [state, dispatch] = useStoreContext();

  // Function to toggle the cart open/close
  const toggleCart = () => {
    console.log('toggleCart called');
    console.log('Current state.cartOpen:', state.cartOpen);
    dispatch({ type: TOGGLE_CART });
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    if (!state || !state.cart || !Array.isArray(state.cart) || state.cart.length === 0) {
      return '0.00';
    }

    return state.cart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  // Fetch cart from IndexedDB on mount
  useEffect(() => {
    const getCart = async () => {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: cart });
    };

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // Handle Stripe checkout
  const [getCheckout, { data: checkoutData }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data && data.checkout) {
      stripePromise.then((stripe) => {
        stripe.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // Function to initiate checkout
  const submitCheckout = () => {
    getCheckout({
      variables: {
        products: state.cart.map((item) => ({
          _id: item._id,
          quantity: item.quantity,
        })),
      },
    });
  };

  // Render cart UI
  return (
    <div>
      {!state.cartOpen && <CartButton />}

      {state.cartOpen && (
        <div className="cart">
          <div className="close" onClick={toggleCart}>
            [close]
          </div>
          <h2>Shopping Cart</h2>
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
            <h3>
              <span role="img" aria-label="shocked">
                😱
              </span>
              You haven't added anything to your cart yet!
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
