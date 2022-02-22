import {gql} from "@apollo/client";

const GET_PLANETS = gql`
    query GetPlanets{
        allPlanets {
            totalCount
            planets {
                name
            }
        }
    }`

export default GET_PLANETS;