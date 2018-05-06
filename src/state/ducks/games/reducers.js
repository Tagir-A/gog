import { GAMES } from "../../../data/games";

const defaultState = [...GAMES];

export default function games(state = defaultState, action = {}) {
  return state;
}
