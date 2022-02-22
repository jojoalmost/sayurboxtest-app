import {render} from "@testing-library/react";
import DetailPage from "../DetailPage";

describe("DetailPage", () => {
    const DetailPageContainer = () => (<DetailPage backUrl="/back" title="title"/>
    );

    it("render correctly", () => {
        const {container} = render(<DetailPageContainer/>);
        expect(container).toBeInTheDocument();
    });

    it("render children correctly", () => {
        const {getByText} = render(<DetailPageContainer/>);
        const content = getByText(/title/i);
        expect(content).toBeInTheDocument();
    });
});