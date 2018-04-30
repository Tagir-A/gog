import {
  TOGGLE_CART,
  CLEAR_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "./types";

export function toggleCart() {
  return {
    type: TOGGLE_CART
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART
  };
}

export function addToCart(game) {
  return {
    type: ADD_TO_CART,
    game
  };
}

export function removeFromCart(game) {
  return {
    type: REMOVE_FROM_CART,
    game
  };
}
