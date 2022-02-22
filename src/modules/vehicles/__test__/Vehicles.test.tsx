import {render} from "@testing-library/react";
import {MockedProvider} from '@apollo/client/testing';
import {BrowserRouter} from "react-router-dom";
import {GET_VEHICLES} from "../../../graphql/services/vehicles/queries";
import Vehicles from "../Vehicles";

const mocks = [
    {
        request: {
            query: GET_VEHICLES,
        },
        result:
            {
                "data": {
                    "allVehicles": {
                        "totalCount": 1,
                        "vehicles": [
                            {
                                "id": "dmVoaWNsZXM6NzY=",
                                "name": "AT-RT"
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
            <Vehicles/>
        </BrowserRouter>
    </MockedProvider>
);

describe("Vehicles", () => {
    it("render the vehicles swapi", async () => {
        const {findByText} = render(<Container/>);
        const title = await findByText(/AT-RT/i);
        expect(title).toBeInTheDocument();
    });
});