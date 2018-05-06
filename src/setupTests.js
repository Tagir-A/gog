import {
    configure,
    shallow,
    render,
    mount
} from "enzyme";
import React from 'react'
import Adapter from "enzyme-adapter-react-16";

configure({
    adapter: new Adapter()
});

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
