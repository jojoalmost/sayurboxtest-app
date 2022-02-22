import {render} from "@testing-library/react";
import {MockedProvider} from '@apollo/client/testing';
import {GET_FILMS} from "../../../graphql/services/films/queries";
import Films from "../Films";
import {BrowserRouter} from "react-router-dom";

const mocks = [
    {
        request: {
            query: GET_FILMS,
        },
        result: {
            data: {
                allFilms: {
                    totalCount: 1,
                    films: [
                        {
                            title: "Star Wars Title",
                            episodeID: 1,
                            openingCrawl: "Description",
                            director: "John Doe",
                            producers: ["Borg"],
                            releaseDate: "1-1-1970",
                            id: 1,
                        },
                    ],
                },
            },
        },
    },
];

const Container = () => (
    <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
            <Films/>
        </BrowserRouter>
    </MockedProvider>
);

describe("Film", () => {
    it("render the film swapi", async () => {
        const {findByText} = render(<Container/>);
        const title = await findByText(/Star Wars Title/i);
        expect(title).toBeInTheDocument();
    });
});