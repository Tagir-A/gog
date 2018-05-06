import * as types from "./types";

const defaultState = {
    products: [],
    isOpen: false
};

export default function cart(state = defaultState, action = {}) {
    switch (action.type) {
        case types.TOGGLE:
            return handleToggleCart(state);
        case types.CLEAR:
            return handleClearCart(state);
        case types.ADD_PRODUCT:
            return handleAddProduct(state, action);
        case types.REMOVE_PRODUCT:
            return handleRemoveProduct(state, action);
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

function handleAddProduct(state, {
    game
}) {
    return {
        ...state,
        products: [...state.products, game]
    };
}

function handleRemoveProduct(state, {
    game
}) {
    return {
        ...state,
        products: state.products.filter(item => item.title !== game.title)
    };
}
