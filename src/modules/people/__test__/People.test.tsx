import {render} from "@testing-library/react";
import {MockedProvider} from '@apollo/client/testing';
import {BrowserRouter} from "react-router-dom";
import {GET_PEOPLE} from "../../../graphql/services/people/queries";
import People from "../People";

const mocks = [
    {
        request: {
            query: GET_PEOPLE,
        },
        result:
            {
                data: {
                    allPeople: {
                        totalCount: 1,
                        people: [
                            {
                                id: "cGVvcGxlOjgz",
                                name: "Tion Medon"
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
            <People/>
        </BrowserRouter>
    </MockedProvider>
);

describe("Person", () => {
    it("render the person swapi", async () => {
        const {findByText} = render(<Container/>);
        const title = await findByText(/Tion Medon/i);
        expect(title).toBeInTheDocument();
    });
});