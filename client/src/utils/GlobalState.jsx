import React, { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
};


export { StoreProvider, useStoreContext };