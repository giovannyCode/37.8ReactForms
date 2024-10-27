import React from "react";
import {
  render,
  fireEvent,
  screen,
  getByText,
  within,
  queryByText,
} from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("Add a new Box", function () {
  const { container } = render(<TodoList />);
  const taskInput = container.querySelector("#task");
  fireEvent.change(taskInput, { target: { value: "Steam Vegetables" } });
  const addButton = getByText(container, "Add a new Todo!");
  fireEvent.click(addButton);
  const newTask = screen.getByText("Steam Vegetables");
  expect(newTask).toBeInTheDocument();
});

it("Deletes Todo", function () {
  const { container } = render(<TodoList />);

  const todoDiv = screen.getByText("Plan a weekend trip").closest(".todo");
  const deleteButton = within(todoDiv).getByRole("button", { name: /x/i });

  fireEvent.click(deleteButton);
  const taskPlanaWeekendTrip = queryByText(container, "Plan a weekend trip");

  expect(taskPlanaWeekendTrip).not.toBeInTheDocument();
});
