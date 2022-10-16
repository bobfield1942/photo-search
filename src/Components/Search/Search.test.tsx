import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";

test("it renders the search", async () => {
  render(<Search handleSubmit={() => {}} />);

  expect(screen.getByTestId("input-search-query")).toBeInTheDocument();
  expect(screen.getByTestId("button-search")).toBeInTheDocument();
});

test("it posts the correct query", async () => {
  let query = "";
  const submit = (result: string) => {
    query = result;
  };

  render(<Search handleSubmit={submit} />);

  expect(screen.getByTestId("button-search")).toBeInTheDocument();

  const input = screen.getByTestId("input-search-query");
  fireEvent.input(input, { target: { value: "Dogs" } });

  const linkElement = screen.getByTestId("button-search");
  linkElement.click();

  expect(query).toEqual("Dogs");
});
