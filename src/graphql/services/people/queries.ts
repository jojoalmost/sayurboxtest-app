import {gql} from "@apollo/client";

export const GET_PEOPLE = gql`
    query GetPeople{
        allPeople {
            totalCount
            people {
                id
                name
            }
        }
    }`

export const GET_PEOPLE_DETAIL = gql`
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
            homeworld {
                id
                name
            }
            species {
                id
                name
            }
            starshipConnection {
                totalCount
                starships {
                    id
                    name
                }
            }
            vehicleConnection {
                totalCount
                vehicles {
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
