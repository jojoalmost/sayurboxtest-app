import {gql} from "@apollo/client";

const GET_PEOPLE = gql`
    query GetPeople{
        allPeople {
            totalCount
            people {
                name
                gender
            }
        }
    }`

export default GET_PEOPLE;