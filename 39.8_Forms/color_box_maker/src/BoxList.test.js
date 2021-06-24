import { render} from '@testing-library/react';
import BoxList from './BoxList';

//smoke test
test('renders w/o crashing', () => {
  render(<BoxList />);
});

//snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})