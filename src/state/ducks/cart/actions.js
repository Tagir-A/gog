import * as types from "./types";

export function toggleCart() {
    return {
        type: types.TOGGLE
    };
}

export function clearCart() {
    return {
        type: types.CLEAR
    };
}

export function addToCart(game) {
    return {
        type: types.ADD_PRODUCT,
        game
    };
}

export function removeFromCart(game) {
    return {
        type: types.REMOVE_PRODUCT,
        game
    };
}
