import reducer from "../reducers";
import * as types from "../types";
import { GAMES } from "../../../../data/games";

const defaultState = {
  products: [],
  isOpen: false
};

describe("cart reducer", () => {
  it("should return default state", () => {
    expect(reducer()).toEqual(defaultState);
  });
  it("should handle ADD", () => {
    const action = {
      type: types.ADD_PRODUCT,
      game: GAMES[0]
    };
    const expectedState = {
      products: [GAMES[0]],
      isOpen: false
    };
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });
  it("should handle REMOVE", () => {
    const action = {
      type: types.REMOVE_PRODUCT,
      game: GAMES[0]
    };
    const expectedState = {
      products: [GAMES[1]],
      isOpen: false
    };
    const previousState = {
      products: [GAMES[0], GAMES[1]],
      isOpen: false
    };
    expect(reducer(previousState, action)).toEqual(expectedState);
  });
  it("should handle CLEAR", () => {
    const action = {
      type: types.CLEAR
    };
    const previousState = {
      products: [GAMES[0], GAMES[1]],
      isOpen: false
    };
    expect(reducer(previousState, action)).toEqual(defaultState);
  });
  it("should handle TOGGLE", () => {
    const action = {
      type: types.TOGGLE
    };
    const expectedState = {
      products: [],
      isOpen: true
    };
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });
});
