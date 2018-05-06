import React from "react";
import { shallow, mount, render } from "enzyme";
import { SmallSpot } from "./small-spot";
import { smallSpots } from "../../data/small-spots";

it("renders without crashing", () => {
  const props = {
    isInCart: true,
    game: smallSpots[0]
  };
  const wrapper = shallow(<SmallSpot {...props} />);
  expect(wrapper.debug()).toMatchSnapshot();
});

it("renders owned button when game is owned", () => {
  const props = {
    isInCart: false,
    game: { ...smallSpots[0], owned: true }
  };
  const wrapper = shallow(<SmallSpot {...props} />);
  expect(wrapper.debug()).toMatchSnapshot();
  expect(wrapper.find(".small-spot__btn--disabled").text()).toEqual("OWNED");
});

it("renders add button when game not owned and not in a cart", () => {
  const props = {
    isInCart: false,
    game: { ...smallSpots[0] }
  };
  const wrapper = shallow(<SmallSpot {...props} />);
  expect(wrapper.debug()).toMatchSnapshot();
});
