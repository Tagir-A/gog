import { TOGGLE_CART, CLEAR_CART } from "./types";

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
