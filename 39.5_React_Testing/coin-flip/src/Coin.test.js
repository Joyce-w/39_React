import React from "react"
import { render } from "@testing-library/react"
import Coin from "./Coin"

it("renders w/o crashing", () => {
    render(<Coin/>)
})