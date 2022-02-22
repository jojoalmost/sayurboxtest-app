import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import {Avatar} from "../../components/Avatar";
import List from "../../components/List";
import {GET_PEOPLE} from "../../graphql/services/people/queries";
import {GetPeople} from "../../graphql/services/people/__generated__/GetPeople";

const People: React.FC = () => {
    const {data, loading} = useQuery<GetPeople>(GET_PEOPLE);
    if (loading) return <Loading/>
    return (
        <div>
            <h1>People <span>({data?.allPeople?.totalCount})</span></h1>
            <List.ListContainer>
                {data?.allPeople?.people?.map((person) => (
                    <Card.LinkCard to="/people/1">
                        <List.ListWrapperAvatar>
                            <Avatar name={person?.name}/>
                            <div className="title">{person?.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}

export default People;