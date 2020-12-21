import React from "react";
import { create } from "react-test-renderer";
import App from "../App";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

jest.mock("react-native-numeric-input", () => "NumericInput");

describe("Header Component", () => {
  it("Renders correctly", () => {
    shallow(<Header />);
  });
});

describe("Counter Component", () => {
  it("Renders correctly", () => {
    shallow(<Counter />);
  });

  it("Props title passed correctly", () => {
    const propsTitle = "Player 1";
    const wrapper = create(<Counter title={propsTitle} />);
    const title = wrapper.root.findByProps({ testID: "title" }).props;
    expect(title.children).toEqual(propsTitle);
  });
});

describe("App", () => {
  it("Renders correctly", () => {
    shallow(<App />);
  });

  it("Initial totalScore is 0", () => {
    const wrapper = create(<App />);
    const totalScore = wrapper.root.findByProps({ testID: "totalScore" }).props;

    expect(totalScore.children).toEqual(0);
  });

  it("Return updateArray work correctly", () => {
    const array = [
      {
        qty: 1,
      },
      {
        qty: 2,
      },
      {
        qty: 3,
      },
      {
        qty: 4,
      },
    ];

    const arrayUpdated = [
      {
        qty: 1,
      },
      {
        qty: 2,
      },
      {
        qty: 99,
      },
      {
        qty: 4,
      },
    ];

    const index = 2;
    const value = 99;

    expect(updateArray(array, index, "qty", value)).toEqual(arrayUpdated);
  });

  it("Return sumArray work correctly", () => {
    expect(sumArray([1, 2, 3])).toEqual(6);
  });
});
