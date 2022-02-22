import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Header} from "../Layout";

describe("Header", () => {
    const HeaderContainer = () => (
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );

    it("render correctly", () => {
        const {container} = render(<HeaderContainer/>);
        expect(container).toBeInTheDocument();
    });

    it("render children correctly", () => {
        const {getByText} = render(<HeaderContainer/>);
        const content = getByText(/Films/i);
        expect(content).toBeInTheDocument();
    });
});