import {gql} from "@apollo/client";

const GET_VEHICLES = gql`
    query GetVehicles{
        allVehicles {
            totalCount
            vehicles {
                name
            }
        }
    }`

export default GET_VEHICLES;