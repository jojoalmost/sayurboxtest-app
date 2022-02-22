import {render} from "@testing-library/react";
import {MockedProvider} from '@apollo/client/testing';
import {BrowserRouter} from "react-router-dom";
import {GET_PLANETS} from "../../../graphql/services/planets/queries";
import Planets from "../Planets";

const mocks = [
    {
        request: {
            query: GET_PLANETS,
        },
        result:
            {
                data: {
                    allPlanets: {
                        totalCount: 1,
                        planets: [
                            {
                                id: "cGxhbmV0czo2MA==",
                                name: "Umbara"
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
            <Planets/>
        </BrowserRouter>
    </MockedProvider>
);

describe("Planets", () => {
    it("render the planets swapi", async () => {
        const {findByText} = render(<Container/>);
        const title = await findByText(/Umbara/i);
        expect(title).toBeInTheDocument();
    });
});