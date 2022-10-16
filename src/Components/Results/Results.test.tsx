import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./Results";
import { dummyPhotos } from "./dummy-data";

test("it renders the photo results", async () => {
  render(<Results loading={false} photos={dummyPhotos[0]} />);

  dummyPhotos[0].hits.forEach((photo) => {
    const User = screen.getByText(photo.user);
    expect(User).toBeInTheDocument();
  });
});
