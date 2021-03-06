import react from "react"
import { render } from '@testing-library/react';
import TodoList from "./TodoList"

//smoketest
test('renders learn react link', () => {
  render(<TodoList />);
});

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />)
  expect(asFragment()).toMatchSnapshot();
})

//specialized test
test("it should display list", () => {
  const { getByText} = render(<TodoList />)
  
  expect(getByText("What to do List")).toBeInTheDocument();

})