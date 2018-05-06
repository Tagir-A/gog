import { SmallSpot } from "./small-spot";
import { GAMES } from "../../data/games";

const props = {
  game: GAMES[0],
  onAddClick: () => null
};

it("renders without crashing", () => {
  const wrapper = shallow(<SmallSpot {...props} />);
  expect(wrapper.debug()).toMatchSnapshot();
});

it("renders owned button when game is owned", () => {
  const innerProps = {
    ...props,
    game: {
      ...GAMES[0],
      owned: true
    }
  };
  const wrapper = shallow(<SmallSpot {...innerProps} />);
  expect(wrapper.debug()).toMatchSnapshot();
  expect(wrapper.find(".small-spot__btn--disabled").text()).toEqual("OWNED");
});

it("renders add button when game not owned and not in a cart", () => {
  const wrapper = shallow(<SmallSpot {...props} />);
  expect(wrapper.debug()).toMatchSnapshot();
});
