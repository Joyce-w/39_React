import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

//smoke test
it("renders Carousel component", () => {
    render(<Carousel/>)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Carousel />)
    expect(asFragment()).toMatchSnapshot();
})

/*test arrow functions*/
it('works when you click the left arrow', () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  //click to the next carousel 
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow)

  //expect second image data to appear
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument()

  //click back a previous card
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow)
  
  //expect first image data to appear 
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument()
})

/*test arrows are not visible at the ends*/
it('should not show arrow when at the carousel ends', () => {
  //test left arrow, should not display arrow
  const { queryByTestId} = render(<Carousel />)
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();

  //click event twice to get to third card, should not display arrow
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
})