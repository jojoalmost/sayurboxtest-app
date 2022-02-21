import {gql} from "@apollo/client";

const GET_PEOPLE = gql`
query GetPeople{
  allPeople {
    people {
      name
      gender
    }
  }
}`

export default GET_PEOPLE;