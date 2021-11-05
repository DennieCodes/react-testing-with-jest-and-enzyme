import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ClickCounter from "./ClickCounter";

Enzyme.configure({ adapter: new Adapter() });

test("renders without error", () => {
  const wrapper = shallow(<ClickCounter />);

  // Example of data-test
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {});

test("renders counter display", () => {});

test("counter display starts at 0", () => {});

test("clicking button increments counter", () => {});
