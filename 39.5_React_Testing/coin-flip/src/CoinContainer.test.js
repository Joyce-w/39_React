import React from "react"
import { render } from "@testing-library/react"
import CoinContainer from "./CoinContainer"
import Coin from "./Coin"

//smoke test
it("renders w/o crashing", () => {
    render(<CoinContainer/>)
})

//snapshot test
it('matches snapshot', () => {
    const { asFragment } = render(<CoinContainer />);
    expect(asFragment()).toMatchSnapshot();
})

test('if button exists', () => {
    const { getByText } = render(<CoinContainer />)
    const buttonText = getByText("Flip Coin");
    expect(buttonText).toBeInTheDocument();

})