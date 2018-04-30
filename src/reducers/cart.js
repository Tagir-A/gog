import {
  TOGGLE_CART,
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../actions/types";

const defaultState = {
  products: [],
  isOpen: false
};

export default function cart(state = defaultState, action = {}) {
  switch (action.type) {
    case TOGGLE_CART:
      return handleToggleCart(state);
    case CLEAR_CART:
      return handleClearCart(state);
    case ADD_TO_CART:
      return handleAddToCart(state, action);
    case REMOVE_FROM_CART:
      return handleRemoveFromCart(state, action);
    default:
      return state;
  }
}

function handleToggleCart(state) {
  return {
    ...state,
    isOpen: !state.isOpen
  };
}

function handleClearCart(state) {
  return {
    ...state,
    products: []
  };
}

function handleAddToCart(state, { game }) {
  return {
    ...state,
    products: [...state.products, game]
  };
}

function handleRemoveFromCart(state, { game }) {
  return {
    ...state,
    products: state.products.filter(item => item.title !== game.title)
  };
}
