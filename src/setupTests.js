import { configure, shallow, render, mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

configure({
  adapter: new Adapter()
});

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
