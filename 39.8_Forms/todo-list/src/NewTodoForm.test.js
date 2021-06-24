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

//specialized test
test("it should display a form", () => {
  const { getByLabelText, getByText} = render(<NewTodoForm />)
  
  expect(getByLabelText("New Todo")).toBeInTheDocument("task");
  expect(getByText("Add new task")).toHaveClass("NewTodoForm-btn");

})