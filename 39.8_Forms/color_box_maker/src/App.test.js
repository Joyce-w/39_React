import { render} from '@testing-library/react';
import App from './App';

//smoke test
test('renders w/o crashing', () => {
  render(<App />);
});

//snapshot test
it("matches snapshot", () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})