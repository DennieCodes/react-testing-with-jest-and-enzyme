import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ClickCounter from "./ClickCounter";

Enzyme.configure({ adapter: new Adapter() });

test("renders without error", () => {
  const wrapper = shallow(<ClickCounter />);

  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = shallow(<ClickCounter />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = shallow(<ClickCounter />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = shallow(<ClickCounter />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("clicking button increments counter", () => {
  const wrapper = shallow(<ClickCounter />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
