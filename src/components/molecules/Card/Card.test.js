import React from "react";
import Card from ".";
import { shallow } from "enzyme";

describe("Card Item", () => {
  const shallowRender = (props = {}) =>
    shallow(<Card title="Test" icon="fa-icon" count="Test Count" {...props} />);

  it("renders correctly", () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the right icon", () => {
    const wrapper = shallowRender();
    expect(wrapper.find("i").exists()).toBe(true);
  });
});
