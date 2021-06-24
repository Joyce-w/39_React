import react from "react"
import { render } from '@testing-library/react';
import Todo from "./Todo"

//smoketest
test('renders learn react link', () => {
  render(<Todo />);
});

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<Todo />)
  expect(asFragment()).toMatchSnapshot();
})