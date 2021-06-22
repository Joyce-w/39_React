import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


//smoke test
it("it should render w/o crashing", () => {
    render(<App/>)
})


