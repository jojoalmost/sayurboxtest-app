import {gql} from "@apollo/client";

const GET_STARSHIPS = gql`
    query GetStarships{
        allStarships{
            totalCount
            starships{
                name
                costInCredits
            }
        }
    }`

export default GET_STARSHIPS;