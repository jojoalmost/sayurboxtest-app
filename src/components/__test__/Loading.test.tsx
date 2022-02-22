import {render} from "@testing-library/react";
import Loading from "../Loading";

describe("Loading", () => {
    const LoadingContainer = () => <Loading/>;

    it("render correctly", () => {
        const {container} = render(<LoadingContainer/>);
        expect(container).toBeInTheDocument();
    });
});