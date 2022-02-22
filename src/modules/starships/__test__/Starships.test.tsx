import {render} from "@testing-library/react";
import {MockedProvider} from '@apollo/client/testing';
import {BrowserRouter} from "react-router-dom";
import {GET_STARSHIPS} from "../../../graphql/services/starships/queries";
import Starships from "../Starships";

const mocks = [
    {
        request: {
            query: GET_STARSHIPS,
        },
        result:
            {
                "data": {
                    "allStarships": {
                        "totalCount": 1,
                        "starships": [
                            {
                                "id": "c3RhcnNoaXBzOjc1",
                                "name": "V-wing"
                            }
                        ]
                    }
                }
            }
    },
];

const Container = () => (
    <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
            <Starships/>
        </BrowserRouter>
    </MockedProvider>
);

describe("Starships", () => {
    it("render the starships swapi", async () => {
        const {findByText} = render(<Container/>);
        const title = await findByText(/V-wing/i);
        expect(title).toBeInTheDocument();
    });
});