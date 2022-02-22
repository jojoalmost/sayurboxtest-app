import React from "react";
import {useQuery} from "@apollo/client";
import GET_PEOPLE from "../../graphql/services/people/queries";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import {Avatar} from "../../components/Avatar";
import List from "../../components/List";

const People: React.FC = () => {
    const {data, loading} = useQuery(GET_PEOPLE);
    if (loading) return <Loading/>
    const {totalCount, people} = data.allPeople;
    return (
        <div>
            <h1>People <span>({totalCount})</span></h1>
            <List.ListContainer>
                {people.map((person: any) => (
                    <Card.LinkCard to="people/1">
                        <List.ListWrapperAvatar>
                            <Avatar name={person.name}/>
                            <div className="title">{person.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}

export default People;