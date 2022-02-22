import React from "react";
import Card from "../../../components/Card";
import {GetPeopleDetail_person} from "../../../graphql/services/people/__generated__/GetPeopleDetail";
import List from "../../../components/List";
import {Avatar} from "../../../components/Avatar";

interface PersonProps {
    title: string;
    data?: (Pick<GetPeopleDetail_person, 'id' | 'name'> | null)[] | null
}

const Person: React.FC<PersonProps> = ({title, data}) => {
    if (data?.length === 0) return null;
    return (
        <div>
            <h2>{title}</h2>
            <List.ListContainer>
                {data?.map(item => (
                    <Card.LinkCard key={item?.id} to={`/people/${item?.id}`}>
                        <List.ListWrapperAvatar>
                            <Avatar name={item?.name}/>
                            <div className="title">{item?.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default Person;