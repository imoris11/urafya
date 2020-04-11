import React from "react";
import { shallow } from "enzyme";
import Button from ".";
import LinkListItem from ".";

describe("Button component", () => {
  const shallowRender = (props = {}) =>
    shallow(
      <LinkListItem
        link="/admin/users"
        linkText="Users"
        icon="fa fa-user"
        {...props}
      />
    );
  it("renders correctly", () => {
    expect(shallowRender()).toMatchSnapshot();
  });

  it("renders the icon", () => {
    const wrapper = shallowRender();
    expect(wrapper.find("i").exists()).toBe(true);
  });

  it("renders the Link component", () => {
    const wrapper = shallowRender();
    expect(wrapper.find("Link").exists()).toBe(true);
  });

  it("renders the correct tile for the Link component", () => {
    const linkText = "New User Button";
    const wrapper = shallowRender({ linkText });
    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.find("span").props().children).toContain(linkText);
  });

  it("has the correct link", () => {
    const link = "/admin/users";
    const wrapper = shallowRender({ link });
    expect(wrapper.find("Link").props().to).toBe(link);
  });
});
