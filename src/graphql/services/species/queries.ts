import {gql} from "@apollo/client";

const GET_SPECIES = gql`
    query GetSpecies{
        allSpecies{
            totalCount
            species{
                name
                skinColors
            }
        }
    }`

export default GET_SPECIES;