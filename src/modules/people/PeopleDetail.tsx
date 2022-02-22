import React from "react";
import {useQuery} from "@apollo/client";
import {GET_DETAIL_PEOPLE} from "../../graphql/services/people/queries";
import Loading from "../../components/Loading";
import {GetPeopleDetail} from "../../graphql/services/people/__generated__/GetPeopleDetail";

const PeopleDetail: React.FC = () => {
    const {data, loading} = useQuery<any>(GET_DETAIL_PEOPLE, {variables: {id: "cGVvcGxlOjE="}});
    if (loading) return <Loading/>
    console.log(data);
    const render = () => {
        if (!data?.person) return null;
        const testing = Object.keys(data?.person).map(key => {
            // if (data?.person?[key].isArray()){
            //     return  null;
            // }
            return <div>{key}: {JSON.stringify(data?.person[key])}</div>
        })

        return testing.map(x => <div>{x}</div>)
    }
    return (
        <div>
            <h1>People Detail</h1>
            {render()}
        </div>
    )
}
export default PeopleDetail;