import react from "react"
import { render } from '@testing-library/react';
import NewTodoForm from "./NewTodoForm"

//smoketest
test('renders learn react link', () => {
  render(<NewTodoForm />);
});

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />)
  expect(asFragment()).toMatchSnapshot();
})