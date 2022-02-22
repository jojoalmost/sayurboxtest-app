import React from "react";
import Card from "../../../components/Card";
import List from "../../../components/List";
import {Avatar} from "../../../components/Avatar";
import {GetPlanetDetail_planet} from "../../../graphql/services/planets/__generated__/GetPlanetDetail";

interface PersonProps {
    title: string;
    data?: (Pick<GetPlanetDetail_planet, 'id' | 'name'> | null)[] | null
}

const PlanetsRelated: React.FC<PersonProps> = ({title, data}) => {
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
export default PlanetsRelated;