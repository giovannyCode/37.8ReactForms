import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("Add a new Box", function () {
  const { container } = render(<BoxList />);
  const widthInput = container.querySelector("#width");
  const heightInput = container.querySelector("#height");
  const colorInput = container.querySelector("#backgroundColor");

  fireEvent.change(widthInput, { target: { value: "100px" } });
  fireEvent.change(heightInput, { target: { value: "200px" } });
  fireEvent.change(colorInput, { target: { value: "blue" } });

  const addButton = getByText(container, "Add a new Box!");

  fireEvent.click(addButton);

  const blueBox = container.querySelector(
    'div[style*="background-color: blue"]'
  );
  expect(blueBox).toBeInTheDocument();

  expect(blueBox).toHaveStyle({
    width: "100px",
    height: "200px",
    backgroundColor: "blue",
  });
});

it("Deletes Box", function () {
  const { container } = render(<BoxList />);
  const closeButton = container.querySelector(
    'div[style*="background-color: lightblue"] button'
  );
  fireEvent.click(closeButton);
  const lightblueBox = container.querySelector(
    'div[style*="background-color: lightblue"]'
  );
  expect(lightblueBox).not.toBeInTheDocument();
});
