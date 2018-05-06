import { Menu } from "./menu";

it("renders without crashing", () => {
    const wrapper = shallow( < Menu / > );
    expect(wrapper.debug()).toMatchSnapshot();
});
