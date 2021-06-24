import { render} from '@testing-library/react';
import NewBoxForm from "./NewBoxForm"


//smoke test
test('renders w/o crashing', () => {
  render(<NewBoxForm />);
});


//snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot();
})

//specialized test
it("test for form", () => {
    const { getByPlaceholderText } = render(<NewBoxForm />)
    expect(getByPlaceholderText("height")).toBeInTheDocument();
})