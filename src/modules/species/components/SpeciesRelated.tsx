import React from "react";
import Card from "../../../components/Card";
import List from "../../../components/List";
import {Avatar} from "../../../components/Avatar";
import {GetSpeciesDetail_species} from "../../../graphql/services/species/__generated__/GetSpeciesDetail";

interface PersonProps {
    title: string;
    data?: (Pick<GetSpeciesDetail_species, 'id' | 'name'> | null)[] | null
}

const SpeciesRelated: React.FC<PersonProps> = ({title, data}) => {
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
export default SpeciesRelated;