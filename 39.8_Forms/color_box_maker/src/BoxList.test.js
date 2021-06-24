import { render, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

//smoke test
test('renders w/o crashing', () => {
  render(<BoxList />);
});

//snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

//Specialize testing
test("if initial state is in doc", () => {
  const { getByText } = render(<BoxList />);
  expect(getByText("BoxList")).toBeInTheDocument();
})

