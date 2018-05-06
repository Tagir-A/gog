import React from "react";
import { shallow } from "enzyme";
import { BigSpot } from "./big-spot";
import { wrap } from "module";

it("renders without crashing", () => {
  const wrapper = shallow(<BigSpot />);
  expect(wrapper.html()).toMatchSnapshot();
});

it("contains title with proper text", () => {
  const wrapper = shallow(<BigSpot />);
  expect(wrapper.find(".big-spot__title").exists()).toBeTruthy();
  expect(wrapper.find(".big-spot__title").text()).toEqual("GAME OF THE WEEK");
});
