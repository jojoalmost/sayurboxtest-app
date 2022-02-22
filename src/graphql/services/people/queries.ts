import {gql} from "@apollo/client";

export const GET_PEOPLE = gql`
    query GetPeople{
        allPeople {
            totalCount
            people {
                name
                gender
            }
        }
    }`

export const GET_DETAIL_PEOPLE = gql`
    query GetPeopleDetail($id: ID!){
        person(id: $id) {
            id
            name
            birthYear
            eyeColor
            gender
            hairColor
            height
            mass
            skinColor
            created
            edited
            homeworld {
                id
                name
                diameter
                rotationPeriod
                orbitalPeriod
                rotationPeriod
                gravity
                population
                climates
                surfaceWater
            }
            species {
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
            }
        }
    }`
