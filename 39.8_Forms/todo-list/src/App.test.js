import { render, screen } from '@testing-library/react';
import App from './App';

//smoketest
test('renders learn react link', () => {
  render(<App />);
});


//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot();
})