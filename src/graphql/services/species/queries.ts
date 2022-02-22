import {gql} from "@apollo/client";

export const GET_SPECIES = gql`
    query GetSpecies{
        allSpecies{
            totalCount
            species{
                id
                name
            }
        }
    }`

export const GET_SPECIES_DETAIL = gql`
    query GetSpeciesDetail($id: ID!){
        species(id: $id) {
            id
            name
            classification
            designation
            averageHeight
            averageLifespan
            eyeColors
            hairColors
            skinColors
            language
            personConnection {
                totalCount
                people {
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
