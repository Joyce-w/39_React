import { render, screen } from '@testing-library/react';
import Box from './Box';

//smoke test
test('renders w/o crashing', () => {
  render(<Box />);
});


//snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot();
})