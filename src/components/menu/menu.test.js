import React from "react";
import { shallow, mount, render } from "enzyme";
import Menu from "./menu";

it("renders without crashing", () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper.debug()).toMatchSnapshot();
});
