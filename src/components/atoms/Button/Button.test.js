import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("Button component", () => {
  const shallowRender = (props = {}) =>
    shallow(
      <Button
        onClick={jest.fn()}
        title="New User"
        icon="fa fa-user"
        showIcon={true}
        {...props}
      />
    );
  it("renders correctly", () => {
    expect(shallowRender()).toMatchSnapshot();
  });

  it("renders the icon when showIcon is true", () => {
    const wrapper = shallowRender();
    expect(wrapper.find("i").exists()).toBe(true);
  });

  it("does not render the icon when showIcon is false", () => {
    const wrapper = shallowRender({ showIcon: false });
    expect(wrapper.find("i").exists()).toBe(false);
  });
  it("renders the div component", () => {
    const wrapper = shallowRender();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  //test onclick later
  it("calls a function when clicked ", () => {
    const mock = jest.fn();
    const wrapper = shallowRender({ onClick: mock });
    wrapper.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
