import {gql} from "@apollo/client";

export const GET_VEHICLES = gql`
    query GetVehicles{
        allVehicles {
            totalCount
            vehicles {
                id
                name
            }
        }
    }`

export const GET_VEHICLES_DETAIL = gql`
    query GetVehiclesDetail($id: ID!){
        vehicle(id: $id) {
            id
            name
            model
            vehicleClass
            manufacturers
            costInCredits
            length
            crew
            passengers
            maxAtmospheringSpeed
            cargoCapacity
            consumables
            pilotConnection {
                totalCount
                pilots {
                    id
                    name
                }
            }
            filmConnection {
                totalCount
                films {
                    id
                    title
                }
            }
        }
    }`
