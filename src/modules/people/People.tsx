import React from "react";
import {useQuery} from "@apollo/client";
import GET_PEOPLE from "../../graphql/services/people/queries";
import Loading from "../../components/Loading";

const People: React.FC = () => {
    const {data, error, loading} = useQuery(GET_PEOPLE);
    console.log(data);
    if (loading) return <Loading/>
    return (
        <div>
            <h1>People</h1>
            <div>
                {data.allPeople.people.map((person:any) => (
                    <h5>{person.name}</h5>
                ))}
            </div>
        </div>
    )
}
export default People;