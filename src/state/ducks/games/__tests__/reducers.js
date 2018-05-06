import reducer from "../reducers";
import { GAMES } from "../../../../data/games";

const defaultState = [...GAMES];

describe("games reducer", () => {
  it("should return default state", () => {
    expect(reducer()).toEqual(defaultState);
  });
});
