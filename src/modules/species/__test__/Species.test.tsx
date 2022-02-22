import {render} from "@testing-library/react";
import {MockedProvider} from '@apollo/client/testing';
import {BrowserRouter} from "react-router-dom";
import Species from "../Species";
import {GET_SPECIES} from "../../../graphql/services/species/queries";

const mocks = [
    {
        request: {
            query: GET_SPECIES,
        },
        result:
            {
                data: {
                    allSpecies: {
                        totalCount: 1,
                        species: [
                            {
                                id: "c3BlY2llczozNw==",
                                name: "Pau'an"
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
            <Species/>
        </BrowserRouter>
    </MockedProvider>
);

describe("Species", () => {
    it("render the species swapi", async () => {
        const {findByText} = render(<Container/>);
        const title = await findByText(/Pau'an/i);
        expect(title).toBeInTheDocument();
    });
});