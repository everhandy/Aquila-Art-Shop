import React from 'react';
import { useStoreContext } from '../../utils/GlobalState.jsx'; 
import { TOGGLE_CART } from '../../utils/actions.js';

const CartButton = () => {
    const [state, dispatch] = useStoreContext();

    const cartClosedStyle = {
        position: 'fixed',
        zIndex: 1000,
        top: '3%',
        right: '10%',
        fontSize: '2rem',
        cursor: 'pointer',
        backgroundColor: 'var(--secondary)', 
        borderRadius: '50%',
        padding: '.25rem',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
  
    const toggleCart = () => {
      console.log('toggleCart function called');
      dispatch({ type: TOGGLE_CART });
    };
  
    return (
      <button style={cartClosedStyle} onClick={toggleCart}>
        🛒
      </button>
    );
  };
  
  export default CartButton;