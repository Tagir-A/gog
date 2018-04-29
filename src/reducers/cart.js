import { TOGGLE_CART, CLEAR_CART } from "../actions/types";

const defaultState = {
  products: [],
  isOpen: false
};

export default function cart(state = defaultState, action = {}) {
  switch (action.type) {
    case TOGGLE_CART:
      return handleToggleCart(state, action);
    case CLEAR_CART:
      return handleclearCart(state, action);
    default:
      return state;
  }
}

function handleToggleCart(state, action) {
  return {
    ...state,
    isOpen: !state.isOpen
  };
}

function handleclearCart(state, action) {
  return {
    ...state,
    products: []
  };
}
